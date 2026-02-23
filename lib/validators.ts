import { z } from 'zod';

// User Registration/Login Validators
export const phoneSchema = z
  .string()
  .regex(/^[6-9]\d{9}$/, 'Please enter a valid Indian phone number');

export const emailSchema = z.string().email('Please enter a valid email address');

export const otpSchema = z.string().length(6, 'OTP must be 6 digits').regex(/^\d+$/, 'OTP must contain only numbers');

export const loginSchema = z.object({
  phone: phoneSchema,
});

export const verifyOtpSchema = z.object({
  phone: phoneSchema,
  otp: otpSchema,
});

export const profileSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: emailSchema.optional(),
  age: z.number().min(1).max(150).optional(),
  gender: z.enum(['M', 'F', 'Other']).optional(),
  address: z.string().min(5, 'Address must be at least 5 characters').optional(),
  city: z.string().min(2, 'City name must be at least 2 characters').optional(),
  state: z.string().min(2, 'State name must be at least 2 characters').optional(),
  pincode: z.string().regex(/^\d{6}$/, 'Pincode must be 6 digits').optional(),
});

// Booking Validators
export const bookingSchema = z.object({
  testIds: z.array(z.string().uuid()).min(1, 'Select at least one test'),
  packageIds: z.array(z.string().uuid()).optional().default([]),
  collectionType: z.enum(['home', 'center']),
  collectionDate: z.date().min(new Date(), 'Collection date must be in the future'),
  collectionTime: z.string().optional(),
  collectionAddress: z.string().optional(),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  pincode: z.string().regex(/^\d{6}$/, 'Pincode must be 6 digits'),
});

// Payment Validators
export const paymentSchema = z.object({
  bookingId: z.string().uuid(),
  razorpayOrderId: z.string(),
  razorpayPaymentId: z.string(),
  razorpaySignature: z.string(),
});

// Admin Validators
export const adminLoginSchema = z.object({
  email: emailSchema,
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const adminCreateSchema = z.object({
  email: emailSchema,
  password: z.string().min(8, 'Password must be at least 8 characters'),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  role: z.enum(['admin', 'manager', 'lab_technician']),
});

// Test Validators
export const testSchema = z.object({
  name: z.string().min(3, 'Test name must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  category: z.string().min(2, 'Category is required'),
  price: z.number().positive('Price must be greater than 0'),
  basePrice: z.number().positive('Base price must be greater than 0'),
  discountPercentage: z.number().min(0).max(100).optional(),
  turnaroundTime: z.string(),
  homeCollectionAvailable: z.boolean().default(true),
  sampleType: z.string(),
  preparationInstructions: z.string().optional(),
  resultsAvailableIn: z.string(),
});

// Package Validators
export const packageSchema = z.object({
  name: z.string().min(3, 'Package name must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  price: z.number().positive('Price must be greater than 0'),
  basePrice: z.number().positive('Base price must be greater than 0'),
  discountPercentage: z.number().min(0).max(100).optional(),
  testIds: z.array(z.string().uuid()).min(1, 'Select at least one test'),
  packageType: z.string(),
});

// Blog Post Validators
export const blogPostSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters'),
  content: z.string().min(50, 'Content must be at least 50 characters'),
  excerpt: z.string().min(20, 'Excerpt must be at least 20 characters'),
  category: z.string(),
  tags: z.array(z.string()).optional().default([]),
  isPublished: z.boolean().default(false),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type VerifyOtpInput = z.infer<typeof verifyOtpSchema>;
export type ProfileInput = z.infer<typeof profileSchema>;
export type BookingInput = z.infer<typeof bookingSchema>;
export type PaymentInput = z.infer<typeof paymentSchema>;
export type AdminLoginInput = z.infer<typeof adminLoginSchema>;
export type TestInput = z.infer<typeof testSchema>;
export type PackageInput = z.infer<typeof packageSchema>;
export type BlogPostInput = z.infer<typeof blogPostSchema>;
