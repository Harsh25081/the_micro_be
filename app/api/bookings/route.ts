import { NextRequest, NextResponse } from 'next/server';
import { Booking } from '@/models';
import { getSessionFromCookie } from '@/lib/auth';
import { bookingSchema } from '@/lib/validators';
import { generateBookingNumber } from '@/lib/payment';
import { initializeDatabase } from '@/lib/db';

export async function POST(request: NextRequest) {
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
    const bookingData = bookingSchema.parse(body);

    const booking = await Booking.create({
      bookingNumber: generateBookingNumber(),
      userId: session.userId,
      testIds: bookingData.testIds,
      packageIds: bookingData.packageIds || [],
      totalAmount: bookingData.testIds.length * 299, // Placeholder calculation
      finalAmount: bookingData.testIds.length * 299,
      collectionType: bookingData.collectionType,
      collectionDate: bookingData.collectionDate,
      collectionTime: bookingData.collectionTime,
      collectionAddress: bookingData.collectionAddress,
      city: bookingData.city,
      state: bookingData.state,
      pincode: bookingData.pincode,
      paymentStatus: 'pending',
      bookingStatus: 'pending',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Booking created successfully',
        booking,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[v0] Create booking error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create booking' },
      { status: 400 }
    );
  }
}

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

    const bookings = await Booking.findAll({
      where: { userId: session.userId },
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    const total = await Booking.count({
      where: { userId: session.userId },
    });

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
    console.error('[v0] Get bookings error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch bookings' },
      { status: 400 }
    );
  }
}
