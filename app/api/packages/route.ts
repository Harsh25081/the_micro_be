import { NextRequest, NextResponse } from 'next/server';
import { TestPackage, Test } from '@/models';
import { packageSchema } from '@/lib/validators';
import { initializeDatabase } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    await initializeDatabase();

    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    const packages = await TestPackage.findAll({
      where: { isActive: true },
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    const total = await TestPackage.count({ where: { isActive: true } });

    // Get test count for each package
    const packagesWithCount = await Promise.all(
      packages.map(async (pkg) => {
        const testCount = (pkg.testIds as string[])?.length || 0;
        return {
          ...pkg.toJSON(),
          testCount,
        };
      })
    );

    return NextResponse.json(
      {
        success: true,
        packages: packagesWithCount,
        total,
        limit,
        offset,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Get packages error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch packages' },
      { status: 400 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await initializeDatabase();
    const body = await request.json();

    const packageData = packageSchema.parse(body);

    const pkg = await TestPackage.create(packageData);

    return NextResponse.json(
      {
        success: true,
        message: 'Package created successfully',
        package: pkg,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[v0] Create package error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create package' },
      { status: 400 }
    );
  }
}
