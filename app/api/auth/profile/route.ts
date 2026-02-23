import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/models';
import { getSessionFromCookie } from '@/lib/auth';
import { profileSchema } from '@/lib/validators';
import { initializeDatabase } from '@/lib/db';

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

    const user = await User.findByPk(session.userId);

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        user: {
          id: user.id,
          phone: user.phone,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          age: user.age,
          gender: user.gender,
          address: user.address,
          city: user.city,
          state: user.state,
          pincode: user.pincode,
          isVerified: user.isVerified,
          lastLoginAt: user.lastLoginAt,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Get profile error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch profile' },
      { status: 400 }
    );
  }
}

export async function PUT(request: NextRequest) {
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
    const profileData = profileSchema.parse(body);

    const user = await User.findByPk(session.userId);

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }

    await user.update(profileData);

    return NextResponse.json(
      {
        success: true,
        message: 'Profile updated successfully',
        user: {
          id: user.id,
          phone: user.phone,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          age: user.age,
          gender: user.gender,
          address: user.address,
          city: user.city,
          state: user.state,
          pincode: user.pincode,
          isVerified: user.isVerified,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Update profile error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update profile' },
      { status: 400 }
    );
  }
}
