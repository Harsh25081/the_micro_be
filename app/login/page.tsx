'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [displayOtp, setDisplayOtp] = useState(''); // For dev mode

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to send OTP');
        return;
      }

      setSuccess('OTP sent successfully!');
      if (data.otp) setDisplayOtp(data.otp); // Dev mode
      setStep('otp');
    } catch (err) {
      setError('Error sending OTP');
      console.error('[v0] Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, otp }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Invalid OTP');
        return;
      }

      setSuccess('Login successful!');
      setTimeout(() => {
        router.push('/profile');
      }, 1000);
    } catch (err) {
      setError('Error verifying OTP');
      console.error('[v0] Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">HealthLab</h1>
          <p className="text-gray-600">Login to your account</p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
            <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {/* Success Alert */}
        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3">
            <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
            <p className="text-sm text-green-600">{success}</p>
          </div>
        )}

        {/* Phone Step */}
        {step === 'phone' && (
          <form onSubmit={handlePhoneSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <Input
                type="tel"
                placeholder="10 digit mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                className="w-full"
                maxLength={10}
              />
              <p className="text-xs text-gray-500 mt-1">
                Enter your 10-digit Indian mobile number
              </p>
            </div>

            <Button
              type="submit"
              disabled={loading || phone.length !== 10}
              className="w-full bg-teal-600 hover:bg-teal-700 disabled:opacity-50"
            >
              {loading ? 'Sending OTP...' : 'Send OTP'}
            </Button>
          </form>
        )}

        {/* OTP Step */}
        {step === 'otp' && (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter OTP
              </label>
              <Input
                type="text"
                placeholder="6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                className="w-full text-center text-2xl tracking-widest"
                maxLength={6}
              />
              <p className="text-xs text-gray-500 mt-1">
                Check your SMS for the 6-digit code
              </p>
              {displayOtp && (
                <p className="text-xs text-amber-600 mt-2 p-2 bg-amber-50 rounded">
                  Dev: OTP is {displayOtp}
                </p>
              )}
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setStep('phone')}
                className="text-sm text-teal-600 hover:underline"
              >
                Change phone number?
              </button>
            </div>

            <Button
              type="submit"
              disabled={loading || otp.length !== 6}
              className="w-full bg-teal-600 hover:bg-teal-700 disabled:opacity-50"
            >
              {loading ? 'Verifying...' : 'Verify & Login'}
            </Button>
          </form>
        )}

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link href="/tests" className="text-teal-600 hover:underline font-medium">
            Browse tests
          </Link>
        </p>
      </Card>
    </div>
  );
}
