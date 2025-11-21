"use client";

import React, { useState } from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useRouter } from 'next/navigation';

const CarCard = ({car}) => {

  
   const [isSaved,setIsSaved] = useState(Boolean(car.wishlisted));
   const router = useRouter();

  return (
    <Card className="overflow-hidden hover:shadow-lg transition group py-0"> {}
      <div className="relative w-full h-56">
        {car.images && car.images.length > 0 ? (
          <Image
            src={car.images[0]}
            alt={`${car.make} ${car.model}`}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm text-gray-500">No image</span>
          </div>
        )}

        
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10"
          onClick={(e) => {
            e.stopPropagation(); 
            setIsSaved(prev => !prev);
          }}
          aria-pressed={isSaved}
        >
          <Heart
            size={18}
            fill={isSaved ? "currentColor" : "none"}
            className={isSaved ? "text-red-500" : "text-white"}
          />
        </Button>
      </div>

      <CardContent className={"p-4"}>
       <div  className="flex flex-col mb-2">
        <h3 className="text-lg font-bold line-clamp-1">
              {car.make} {car.model}
        </h3>
        <div className="text-xl font-bold">
          {formatLkrFromUsd(car.price)}
        </div>
       </div>

        <div className="text-gray-600 mb-2 flex items-center">
          <span>{car.year}</span>
          <span className="mx-2">•</span>
          <span>{car.transmission}</span>
          <span className="mx-2">•</span>
          <span>{car.fuelType}</span>
        </div>

          <div className="flex flex-wrap gap-1 mb-4">
          <Badge variant="outline" className="bg-gray-50">
            {car.bodyType}
          </Badge>
          <Badge variant="outline" className="bg-gray-50">
            {car.mileage.toLocaleString()} miles
          </Badge>
          <Badge variant="outline" className="bg-gray-50">
            {car.color}
          </Badge>
        </div>

        <div className="flex justify-between">
          <Button
            className="flex-1"
            onClick={() => {
              router.push(`/cars/${car.id}`);
            }}
          >
            View Car
          </Button>
        </div>

      </CardContent>
    </Card>
  )
}

// Add conversion helper (adjust rate if needed)
const USD_TO_LKR = 360;
function formatLkrFromUsd(usd) {
  return `LKR ${Math.round(usd * USD_TO_LKR).toLocaleString()}`;
}

export default CarCard