'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { AlertCircle, Loader2 } from 'lucide-react';

interface User {
  id: string;
  phone: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  gender?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState<Partial<User>>({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/auth/profile');
        if (!response.ok) {
          router.push('/login');
          return;
        }
        const data = await response.json();
        setUser(data.user);
        setFormData(data.user);
      } catch (err) {
        console.error('[v0] Error:', err);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setError('');
      setSuccess('');

      const response = await fetch('/api/auth/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to update profile');
        return;
      }

      setSuccess('Profile updated successfully');
      setUser(data.user);
      setEditing(false);
    } catch (err) {
      setError('Error updating profile');
      console.error('[v0] Error:', err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin" size={40} />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <p className="text-gray-600 mb-4">Please log in first</p>
          <Button onClick={() => router.push('/login')}>Go to Login</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
            <p className="text-gray-600 mt-1">Manage your account information</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
              <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
              <p className="text-sm text-green-600">{success}</p>
            </div>
          )}

          <div className="space-y-6">
            {/* Phone - Read Only */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <Input disabled value={user.phone} />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email || ''}
                onChange={handleChange}
                disabled={!editing}
              />
            </div>

            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <Input
                name="firstName"
                value={formData.firstName || ''}
                onChange={handleChange}
                disabled={!editing}
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <Input
                name="lastName"
                value={formData.lastName || ''}
                onChange={handleChange}
                disabled={!editing}
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age
              </label>
              <Input
                type="number"
                name="age"
                value={formData.age || ''}
                onChange={handleChange}
                disabled={!editing}
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <Input
                name="address"
                value={formData.address || ''}
                onChange={handleChange}
                disabled={!editing}
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <Input
                name="city"
                value={formData.city || ''}
                onChange={handleChange}
                disabled={!editing}
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <Input
                name="state"
                value={formData.state || ''}
                onChange={handleChange}
                disabled={!editing}
              />
            </div>

            {/* Pincode */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pincode
              </label>
              <Input
                name="pincode"
                value={formData.pincode || ''}
                onChange={handleChange}
                disabled={!editing}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              {editing ? (
                <>
                  <Button
                    onClick={handleSave}
                    disabled={saving}
                    className="bg-teal-600 hover:bg-teal-700"
                  >
                    {saving ? 'Saving...' : 'Save Changes'}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setEditing(false);
                      setFormData(user);
                    }}
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => setEditing(true)}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  Edit Profile
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

import { CheckCircle } from 'lucide-react';
