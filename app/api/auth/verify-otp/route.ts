import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/models';
import { createSession, setSessionCookie } from '@/lib/auth';
import { verifyOtpSchema } from '@/lib/validators';
import { initializeDatabase } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    await initializeDatabase();
    const body = await request.json();

    // Validate input
    const { phone, otp } = verifyOtpSchema.parse(body);

    // Find user
    const user = await User.findOne({ where: { phone } });

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }

    // Verify OTP
    if (user.otp !== otp) {
      return NextResponse.json(
        { success: false, error: 'Invalid OTP' },
        { status: 400 }
      );
    }

    // Check if OTP has expired
    if (user.otpExpiresAt && new Date() > user.otpExpiresAt) {
      return NextResponse.json(
        { success: false, error: 'OTP has expired' },
        { status: 400 }
      );
    }

    // Mark user as verified
    await user.update({
      isVerified: true,
      otp: null,
      otpExpiresAt: null,
      lastLoginAt: new Date(),
    });

    // Create session
    const token = await createSession({
      userId: user.id,
      phone: user.phone,
      email: user.email || undefined,
    });

    // Set session cookie
    await setSessionCookie(token);

    return NextResponse.json(
      {
        success: true,
        message: 'Login successful',
        user: {
          id: user.id,
          phone: user.phone,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          isVerified: user.isVerified,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] OTP verification error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to verify OTP' },
      { status: 400 }
    );
  }
}
