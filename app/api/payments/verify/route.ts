import { NextRequest, NextResponse } from 'next/server';
import { Booking } from '@/models';
import { getSessionFromCookie } from '@/lib/auth';
import { verifyRazorpaySignature } from '@/lib/payment';
import { paymentSchema } from '@/lib/validators';
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
    const paymentData = paymentSchema.parse(body);

    // Verify Razorpay signature
    const isValid = verifyRazorpaySignature(
      paymentData.razorpayOrderId,
      paymentData.razorpayPaymentId,
      paymentData.razorpaySignature
    );

    if (!isValid) {
      return NextResponse.json(
        { success: false, error: 'Invalid payment signature' },
        { status: 400 }
      );
    }

    // Update booking
    const booking = await Booking.findOne({
      where: {
        id: paymentData.bookingId,
        userId: session.userId,
      },
    });

    if (!booking) {
      return NextResponse.json(
        { success: false, error: 'Booking not found' },
        { status: 404 }
      );
    }

    await booking.update({
      paymentStatus: 'paid',
      paymentMethod: 'razorpay',
      razorpayPaymentId: paymentData.razorpayPaymentId,
      bookingStatus: 'confirmed',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Payment verified successfully',
        booking: {
          id: booking.id,
          bookingNumber: booking.bookingNumber,
          paymentStatus: booking.paymentStatus,
          bookingStatus: booking.bookingStatus,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Verify payment error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to verify payment' },
      { status: 400 }
    );
  }
}
