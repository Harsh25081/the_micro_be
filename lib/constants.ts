// Indian Cities
export const CITIES = [
  'Bangalore',
  'Chennai',
  'Delhi',
  'Hyderabad',
  'Kolkata',
  'Mumbai',
  'Pune',
  'Ahmedabad',
  'Jaipur',
  'Lucknow',
  'Kochi',
  'Indore',
  'Chandigarh',
  'Nagpur',
  'Bhopal',
];

// Test Categories
export const TEST_CATEGORIES = [
  'Blood Work',
  'Thyroid Profile',
  'Cardiac Profile',
  'Liver Profile',
  'Kidney Profile',
  'Diabetes Screening',
  'Allergy Tests',
  'Vitamin Tests',
  'Hormone Tests',
  'Infection Tests',
];

// Package Types
export const PACKAGE_TYPES = [
  'Essential Health Checkup',
  'Comprehensive Health Checkup',
  'Women\'s Health Package',
  'Men\'s Health Package',
  'Cardiac Health Package',
  'Diabetic Care Package',
  'Thyroid Care Package',
  'Senior Citizen Package',
];

// Turnaround Times
export const TURNAROUND_TIMES = [
  '24 hours',
  '48 hours',
  '2-3 days',
  '3-5 days',
  'Same day',
];

// Sample Types
export const SAMPLE_TYPES = [
  'Blood',
  'Urine',
  'Saliva',
  'Feces',
  'Hair',
  'Throat Swab',
  'Nasal Swab',
];

// Gender Options
export const GENDER_OPTIONS = [
  { value: 'M', label: 'Male' },
  { value: 'F', label: 'Female' },
  { value: 'Other', label: 'Other' },
];

// Collection Types
export const COLLECTION_TYPES = [
  { value: 'home', label: 'Home Collection' },
  { value: 'center', label: 'Visit Center' },
];

// Booking Status Colors
export const BOOKING_STATUS_COLORS: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-blue-100 text-blue-800',
  collected: 'bg-purple-100 text-purple-800',
  completed: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800',
};

// Payment Status Colors
export const PAYMENT_STATUS_COLORS: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  paid: 'bg-green-100 text-green-800',
  failed: 'bg-red-100 text-red-800',
  refunded: 'bg-gray-100 text-gray-800',
};

// Admin Roles
export const ADMIN_ROLES = [
  { value: 'admin', label: 'Administrator' },
  { value: 'manager', label: 'Manager' },
  { value: 'lab_technician', label: 'Lab Technician' },
];
