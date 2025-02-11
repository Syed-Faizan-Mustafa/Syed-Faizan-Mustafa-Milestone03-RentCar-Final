import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allCars } from "@/sanity/lib/queries";
import Sidebar from "@components/Sidebar"
import PickDropFormMain from "@/components/PickDropFormMain";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { carData } from "../../../types/types";

export default async function CategoriesPage() {
  let cars: carData[] = [];

  try {
    cars = await sanityFetch<carData[]>({ query: allCars });
  } catch (error) {
    console.error("Error fetching cars:", error);
  }

  return (
    <div className="w-full flex">
      {/* Sidebar */}
      <div className="first max-sm:hidden w-[20%]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-10">
        {/* Header */}
        <section className="w-full flex flex-col sm:flex-row items-center justify-between">
          <PickDropFormMain />
        </section>

        {/* Cars Listing */}
        <section className="popular w-full flex flex-col gap-4">
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cars.map((car) => (
              <Card
                key={car._id}
                className="w-full max-w-[304px] mx-auto flex flex-col"
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {car.name}
                    <Image src="/heart.png" alt="Favorite" width={20} height={20} />
                  </CardTitle>
                  <CardDescription>{car.type}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                  <Image
                    src={car.imageUrl}
                    alt={car.name}
                    width={232}
                    height={72}
                    className="rounded-md"
                  />
                  <div className="w-full flex gap-4 items-center">
                    <div className="flex items-center">
                      <Image
                        src="/FuelCapacity.png"
                        alt="Fuel Capacity"
                        width={24}
                        height={24}
                      />
                      <span className="text-sm font-medium text-gray-500">
                        {car.fuelCapacity}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src="/Tranmission.png"
                        alt="Transmission"
                        width={24}
                        height={24}
                      />
                      <span className="text-sm font-medium text-gray-500">
                        {car.transmission}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src="/CarCapacity.png"
                        alt="Car Capacity"
                        width={24}
                        height={24}
                      />
                      <span className="text-sm font-medium text-gray-500">
                        {car.seatingCapacity}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-semibold">{car.pricePerDay}</p>
                    <span className="line-through">{car.originalPrice}</span>
                  </div>
                  <Link href={`/details/${car._id}`}>
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">
                      Rent Now
                    </button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <section className="button w-full text-center">
          <Link href="/categories">
            <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5">
              Show More Cars
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}
