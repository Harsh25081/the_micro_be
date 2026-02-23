import { NextRequest, NextResponse } from 'next/server';
import { clearSessionCookie } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    await clearSessionCookie();

    return NextResponse.json(
      {
        success: true,
        message: 'Logged out successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Logout error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to logout' },
      { status: 400 }
    );
  }
}
