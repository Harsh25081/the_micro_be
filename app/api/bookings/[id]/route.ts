import { NextRequest, NextResponse } from 'next/server';
import { Booking } from '@/models';
import { getSessionFromCookie } from '@/lib/auth';
import { initializeDatabase } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await initializeDatabase();
    const session = await getSessionFromCookie();

    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const booking = await Booking.findOne({
      where: {
        id: params.id,
        userId: session.userId,
      },
    });

    if (!booking) {
      return NextResponse.json(
        { success: false, error: 'Booking not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        booking,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Get booking error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch booking' },
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
    const session = await getSessionFromCookie();

    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();

    const booking = await Booking.findOne({
      where: {
        id: params.id,
        userId: session.userId,
      },
    });

    if (!booking) {
      return NextResponse.json(
        { success: false, error: 'Booking not found' },
        { status: 404 }
      );
    }

    // Only allow updating certain fields
    const allowedUpdates = ['collectionTime', 'collectionAddress', 'notes'];
    const updates = Object.keys(body)
      .filter((key) => allowedUpdates.includes(key))
      .reduce((acc, key) => ({ ...acc, [key]: body[key] }), {});

    await booking.update(updates);

    return NextResponse.json(
      {
        success: true,
        message: 'Booking updated successfully',
        booking,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Update booking error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update booking' },
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
    const session = await getSessionFromCookie();

    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const booking = await Booking.findOne({
      where: {
        id: params.id,
        userId: session.userId,
      },
    });

    if (!booking) {
      return NextResponse.json(
        { success: false, error: 'Booking not found' },
        { status: 404 }
      );
    }

    // Only allow cancellation for pending bookings
    if (booking.bookingStatus !== 'pending') {
      return NextResponse.json(
        { success: false, error: 'Cannot cancel this booking' },
        { status: 400 }
      );
    }

    await booking.update({ bookingStatus: 'cancelled' });

    return NextResponse.json(
      {
        success: true,
        message: 'Booking cancelled successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Cancel booking error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to cancel booking' },
      { status: 400 }
    );
  }
}
