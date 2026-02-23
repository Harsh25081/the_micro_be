'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

interface PackageCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  basePrice: number;
  discountPercentage?: number;
  testCount: number;
  packageType: string;
  onAddToCart?: (packageId: string) => void;
  onViewDetails?: (packageId: string) => void;
}

export function PackageCard({
  id,
  name,
  description,
  price,
  basePrice,
  discountPercentage,
  testCount,
  packageType,
  onAddToCart,
  onViewDetails,
}: PackageCardProps) {
  const hasDiscount = discountPercentage && discountPercentage > 0;
  const savings = basePrice - price;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all hover:border-teal-400">
      <div className="p-6 space-y-4">
        {/* Header */}
        <div>
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
              <Badge variant="outline" className="mt-1 text-teal-600 border-teal-600">
                {packageType}
              </Badge>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
        </div>

        {/* Price Section */}
        <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
          <div className="flex items-end gap-3">
            <span className="text-3xl font-bold text-teal-600">₹{price.toFixed(2)}</span>
            {hasDiscount && (
              <span className="text-sm text-gray-500 line-through mb-1">
                ₹{basePrice.toFixed(2)}
              </span>
            )}
          </div>
          {hasDiscount && (
            <p className="text-sm text-green-600 font-medium mt-2">
              Save ₹{savings.toFixed(2)} ({discountPercentage}%)
            </p>
          )}
        </div>

        {/* Test Count */}
        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
          <Check size={20} className="text-teal-600" />
          <span className="font-medium text-gray-700">
            {testCount} comprehensive tests included
          </span>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t">
          <Button
            variant="outline"
            onClick={() => onViewDetails?.(id)}
            className="text-teal-600 border-teal-600 hover:bg-teal-50"
          >
            View Tests
          </Button>
          <Button
            onClick={() => onAddToCart?.(id)}
            className="bg-teal-600 hover:bg-teal-700"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
}
