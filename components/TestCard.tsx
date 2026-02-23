'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Home, Clock, Droplet } from 'lucide-react';

interface TestCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  basePrice: number;
  discountPercentage?: number;
  turnaroundTime: string;
  homeCollectionAvailable: boolean;
  sampleType: string;
  onAddToCart?: (testId: string) => void;
  onViewDetails?: (testId: string) => void;
}

export function TestCard({
  id,
  name,
  description,
  price,
  basePrice,
  discountPercentage,
  turnaroundTime,
  homeCollectionAvailable,
  sampleType,
  onAddToCart,
  onViewDetails,
}: TestCardProps) {
  const hasDiscount = discountPercentage && discountPercentage > 0;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6 space-y-4">
        {/* Header with Badge */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
          </div>
          {homeCollectionAvailable && (
            <Badge variant="secondary" className="ml-2 whitespace-nowrap">
              <Home size={14} className="mr-1" />
              Home
            </Badge>
          )}
        </div>

        {/* Price Section */}
        <div className="border-t pt-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-teal-600">₹{price.toFixed(2)}</span>
            {hasDiscount && (
              <>
                <span className="text-sm text-gray-500 line-through">
                  ₹{basePrice.toFixed(2)}
                </span>
                <Badge className="bg-red-100 text-red-800">
                  {discountPercentage}% OFF
                </Badge>
              </>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={16} className="text-teal-600" />
            <span>{turnaroundTime}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Droplet size={16} className="text-teal-600" />
            <span>{sampleType}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t">
          <Button
            variant="outline"
            onClick={() => onViewDetails?.(id)}
            className="text-teal-600 border-teal-600 hover:bg-teal-50"
          >
            Details
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
