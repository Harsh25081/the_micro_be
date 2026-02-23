import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/models';
import { generateOTP, setSessionCookie } from '@/lib/auth';
import { loginSchema } from '@/lib/validators';
import { initializeDatabase } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    await initializeDatabase();
    const body = await request.json();

    // Validate input
    const { phone } = loginSchema.parse(body);

    // Find or create user
    let user = await User.findOne({ where: { phone } });

    if (!user) {
      user = await User.create({
        phone,
        isVerified: false,
      });
    }

    // Generate OTP
    const otp = await generateOTP();
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Save OTP to database
    await user.update({ otp, otpExpiresAt });

    // TODO: Send OTP via SMS (integrate with SMS provider)
    console.log(`[v0] OTP for ${phone}: ${otp}`);

    return NextResponse.json(
      {
        success: true,
        message: 'OTP sent successfully',
        phone,
        // Dev mode - return OTP (remove in production)
        ...(process.env.NODE_ENV === 'development' && { otp }),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Login error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process login' },
      { status: 400 }
    );
  }
}
