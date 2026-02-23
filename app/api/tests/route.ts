import { NextRequest, NextResponse } from 'next/server';
import { Test } from '@/models';
import { testSchema } from '@/lib/validators';
import { initializeDatabase } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    await initializeDatabase();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    const where: any = { isActive: true };

    if (category) {
      where.category = category;
    }

    const tests = await Test.findAll({
      where,
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    const total = await Test.count({ where });

    return NextResponse.json(
      {
        success: true,
        tests,
        total,
        limit,
        offset,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Get tests error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch tests' },
      { status: 400 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await initializeDatabase();
    const body = await request.json();

    // Validate input
    const testData = testSchema.parse(body);

    const test = await Test.create(testData);

    return NextResponse.json(
      {
        success: true,
        message: 'Test created successfully',
        test,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[v0] Create test error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create test' },
      { status: 400 }
    );
  }
}
