import { NextRequest, NextResponse } from 'next/server';
import { Booking, User } from '@/models';
import { getSessionFromCookie } from '@/lib/auth';
import { initializeDatabase } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    await initializeDatabase();
    const session = await getSessionFromCookie();

    if (!session || !session.isAdmin) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    const where: any = {};

    if (status) {
      where.bookingStatus = status;
    }

    const bookings = await Booking.findAll({
      where,
      include: [{ model: User, as: 'user', attributes: ['id', 'phone', 'firstName', 'lastName'] }],
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    const total = await Booking.count({ where });

    return NextResponse.json(
      {
        success: true,
        bookings,
        total,
        limit,
        offset,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Get admin bookings error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch bookings' },
      { status: 400 }
    );
  }
}
