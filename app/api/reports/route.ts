import { NextRequest, NextResponse } from 'next/server';
import { Report } from '@/models';
import { getSessionFromCookie } from '@/lib/auth';
import { initializeDatabase } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    await initializeDatabase();
    const session = await getSessionFromCookie();

    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');

    const reports = await Report.findAll({
      where: { userId: session.userId },
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    const total = await Report.count({
      where: { userId: session.userId },
    });

    return NextResponse.json(
      {
        success: true,
        reports,
        total,
        limit,
        offset,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Get reports error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch reports' },
      { status: 400 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await initializeDatabase();
    const session = await getSessionFromCookie();

    if (!session || !session.isAdmin) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();

    const report = await Report.create({
      bookingId: body.bookingId,
      userId: body.userId,
      testId: body.testId,
      reportStatus: body.reportStatus || 'pending',
      testResults: body.testResults,
      normalRanges: body.normalRanges,
      interpretations: body.interpretations,
      doctorNotes: body.doctorNotes,
      reportGeneratedAt: new Date(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Report created successfully',
        report,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[v0] Create report error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create report' },
      { status: 400 }
    );
  }
}
