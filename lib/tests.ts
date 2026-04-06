export interface Test {
  id: string;
  name: string;
  description: string;
  price: number;
  basePrice: number;
  discountPercentage?: number;
  turnaroundTime: string;
  homeCollectionAvailable: boolean;
  sampleType: string;
  category: string;
}

export const allTests: Test[] = [
  {
    id: "1",
    name: "Complete Blood Count",
    description:
      "Comprehensive blood analysis including RBC, WBC, platelets and more",
    price: 299,
    basePrice: 299,
    turnaroundTime: "1 day",
    homeCollectionAvailable: true,
    sampleType: "Blood Work",
    category: "Blood Work",
  },
  {
    id: "2",
    name: "Thyroid Profile",
    description: "TSH, T3, T4 tests to check thyroid function and health",
    price: 599,
    basePrice: 599,
    turnaroundTime: "1 day",
    homeCollectionAvailable: true,
    sampleType: "Blood",
    category: "Thyroid Profile",
  },
  {
    id: "3",
    name: "Cardiac Profile",
    description: "Cholesterol levels, triglycerides and heart health markers",
    price: 359,
    basePrice: 399,
    discountPercentage: 10,
    turnaroundTime: "1 day",
    homeCollectionAvailable: false,
    sampleType: "Blood Work",
    category: "Cardiac Profile",
  },
];
