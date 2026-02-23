import { NextRequest, NextResponse } from 'next/server';
import { Admin } from '@/models';
import { adminLoginSchema } from '@/lib/validators';
import { initializeDatabase } from '@/lib/db';
import bcrypt from 'bcrypt';
import { createSession, setSessionCookie } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    await initializeDatabase();
    const body = await request.json();

    const { email, password } = adminLoginSchema.parse(body);

    const admin = await Admin.findOne({ where: { email } });

    if (!admin || !admin.isActive) {
      return NextResponse.json(
        { success: false, error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const isValidPassword = await bcrypt.compare(password, admin.passwordHash);

    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Update last login
    await admin.update({ lastLoginAt: new Date() });

    // Create session
    const token = await createSession({
      userId: admin.id,
      phone: email, // Using email as phone field for admins
      email,
      isAdmin: true,
    });

    await setSessionCookie(token);

    return NextResponse.json(
      {
        success: true,
        message: 'Login successful',
        admin: {
          id: admin.id,
          email: admin.email,
          firstName: admin.firstName,
          lastName: admin.lastName,
          role: admin.role,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Admin login error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to login' },
      { status: 400 }
    );
  }
}
