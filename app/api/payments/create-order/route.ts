import { NextRequest, NextResponse } from 'next/server';
import { Booking } from '@/models';
import { getSessionFromCookie } from '@/lib/auth';
import { createRazorpayOrder } from '@/lib/payment';
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

    const { bookingId } = await request.json();

    if (!bookingId) {
      return NextResponse.json(
        { success: false, error: 'Booking ID is required' },
        { status: 400 }
      );
    }

    const booking = await Booking.findOne({
      where: {
        id: bookingId,
        userId: session.userId,
      },
    });

    if (!booking) {
      return NextResponse.json(
        { success: false, error: 'Booking not found' },
        { status: 404 }
      );
    }

    if (booking.paymentStatus !== 'pending') {
      return NextResponse.json(
        { success: false, error: 'Invalid payment status' },
        { status: 400 }
      );
    }

    // Create Razorpay order
    const razorpayOrder = await createRazorpayOrder({
      amount: Math.round(booking.finalAmount * 100), // Convert to paise
      currency: 'INR',
      receipt: booking.bookingNumber,
      description: `Health tests booking - ${booking.bookingNumber}`,
    });

    // Update booking with Razorpay order ID
    await booking.update({
      razorpayOrderId: razorpayOrder.id,
    });

    return NextResponse.json(
      {
        success: true,
        order: razorpayOrder,
        booking: {
          id: booking.id,
          bookingNumber: booking.bookingNumber,
          finalAmount: booking.finalAmount,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Create payment order error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create payment order' },
      { status: 400 }
    );
  }
}
