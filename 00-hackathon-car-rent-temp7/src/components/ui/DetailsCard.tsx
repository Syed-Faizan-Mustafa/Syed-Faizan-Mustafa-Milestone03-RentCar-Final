// components/ui/DetailsCard.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"; // Verify this path
import { carQuery } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

// Add interface
export interface CarDetails {
  _id: string;
  name: string;
  description: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  originalPrice: string;
  imageUrl: string;
}

const DetailsCard = ({ product }: { product: CarDetails }) => {
  if (!product) return null;

  return (
    <Card className="w-full mx-auto h-auto border-none">
      <CardHeader>
        <CardTitle className="w-full flex items-center justify-between text-2xl md:text-3xl font-bold">
          {product.name}

          <Image
            src="/heart.png"
            alt="Favorite"
            width={24}
            height={24}
            className="ml-2"
          />
        </CardTitle>
      </CardHeader>

      <CardContent className="w-full text-[#596780] space-y-6">
        <p className="text-base md:text-lg">{product.description}</p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="text-[#90A3BF]">Type</div>
          <div className="text-[#596780]">{product.type}</div>
          <div className="text-[#90A3BF]">Capacity</div>
          <div className="text-[#596780]">{product.seatingCapacity}</div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="text-[#90A3BF]">Transmission</div>
          <div className="text-[#596780]">{product.transmission}</div>
          <div className="text-[#90A3BF]">Fuel Capacity</div>
          <div className="text-[#596780]">{product.fuelCapacity}</div>
        </div>
      </CardContent>

      <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-4">
        <div className="space-y-2">
          <div className="text-2xl font-bold text-[#3563E9]">
            {product.pricePerDay}
          </div>
          {/* {product.originalPrice && (
            <div className="text-[#90A3BF] line-through">
              ${product.originalPrice}
            </div>
          )} */}
        </div>

        <Link href={`/payments/${product._id}`} className="w-full md:w-auto">
          <button className="w-full bg-[#3563E9] text-white px-6 py-3 rounded-md hover:bg-[#2b4fc2] transition-colors">
            Rent Now
          </button>
        </Link>
      </div>
    </Card>
  );
};
export default DetailsCard;
