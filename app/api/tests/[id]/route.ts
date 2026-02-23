import { NextRequest, NextResponse } from 'next/server';
import { Test } from '@/models';
import { testSchema } from '@/lib/validators';
import { initializeDatabase } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await initializeDatabase();

    const test = await Test.findByPk(params.id);

    if (!test) {
      return NextResponse.json(
        { success: false, error: 'Test not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        test,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Get test error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch test' },
      { status: 400 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await initializeDatabase();
    const body = await request.json();

    const test = await Test.findByPk(params.id);

    if (!test) {
      return NextResponse.json(
        { success: false, error: 'Test not found' },
        { status: 404 }
      );
    }

    const testData = testSchema.partial().parse(body);
    await test.update(testData);

    return NextResponse.json(
      {
        success: true,
        message: 'Test updated successfully',
        test,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Update test error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update test' },
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await initializeDatabase();

    const test = await Test.findByPk(params.id);

    if (!test) {
      return NextResponse.json(
        { success: false, error: 'Test not found' },
        { status: 404 }
      );
    }

    await test.destroy();

    return NextResponse.json(
      {
        success: true,
        message: 'Test deleted successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Delete test error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete test' },
      { status: 400 }
    );
  }
}
