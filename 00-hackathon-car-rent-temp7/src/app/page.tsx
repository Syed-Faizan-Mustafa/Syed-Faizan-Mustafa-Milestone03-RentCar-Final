import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import PickDropFormMain from "@/components/PickDropFormMain";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allCars } from "@/sanity/lib/queries";

type Car = {
  _id: string;
  name: string;
  brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  originalPrice: string;
  tags: string;
  imageUrl: string;
};

export default async function Home() {
  let cars: Car[] = [];
  try {
    cars = await sanityFetch({ query: allCars });
  } catch (error) {
    console.error("error fetching cars", error);
  }
  console.log("my sanity data", cars);

  const popularCars = cars.filter((car) => car.tags.includes("popular"));
  const recommendedCars = cars.filter((car) =>
    car.tags.includes("recommended")
  );
  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      {/* Section 1 - Ads with buttons */}

      <section className="w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center items-center">
        <div className="relative flex flex-col items-center">
          <Image
            src={"/Ads 1.png"}
            alt="Ad 1"
            width={600}
            height={360}
            className="max-w-full"
          />
          {/* <Link href={'/categories'}>
          <button className="absolute bottom-[89px] left-[8px] m-3 bg-blue-600 hover:bg-blue-500 text-white font-normal py-2 px-4 rounded hidden lg:block">
            Rental Car
          </button>
          </Link> */}
        </div>

        <div className="relative flex flex-col items-center">
          <Image
            src={"/Ads 2.png"}
            alt="Ad 2"
            width={600}
            height={360}
            className="max-w-full"
          />
          {/* <Link href = {"/categories"}>
          <button className="absolute bottom-[89px] left-[8px] m-3 bg-blue-400 hover:bg-blue-600 text-white font-normal py-2 px-4 rounded hidden lg:block">
            Rental Car
          </button>
          </Link> */}
        </div>
      </section>
      <PickDropFormMain />

      {/* switch */}
      {/* <div className="w-[60px] h-[60px] bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center">
          <img src="/Swap.png" alt="Switch" className="w-[24px] h-[24px]" />
        </div> */}

      {/* <Image
          src={"/Drop - Off.png"}
          alt=""
          width={500}
          height={132}
          className="max-w-full"
        /> */}

      {/* Popular car  */}
      <section className="popular w-full flex flex-col gap-4 mt-10">
        <div className="first w-full flex items-center justify-between">
          <h1 className="text-gray-500 text-lg sm:text-xl">Popular Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularCars.map((car) => (
            <Card
              key={car._id}
              className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between"
            >
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  {car.name}{" "}
                  <Image
                    src="/heart.png"
                    alt="Favorite"
                    width={20}
                    height={20}
                  />
                </CardTitle>
                <CardDescription>{car.type}</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image
                  src={car.imageUrl}
                  alt={car.name}
                  width={232}
                  height={72}
                />
                <br />

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
              <CardFooter className="w-full flex items-center justify-between">
                <div>
                  <p className="text-2xl font-semibold leading-none tracking-tight">
                    {car.pricePerDay}
                  </p>

                  <span>{car.originalPrice}</span>
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

      {/* Recommendation car */}
      <section className="popular w-full flex flex-col gap-4">
        <h1 className="text-gray-500 text-lg sm:text-xl">Recommendation Car</h1>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendedCars.map((car) => (
            <Card
              key={car._id}
              className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between"
            >
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  {car.name}{" "}
                  <Image
                    src="/heart.png"
                    alt="Favorite"
                    width={20}
                    height={20}
                  />
                </CardTitle>
                <CardDescription>{car.type}</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image
                  src={car.imageUrl}
                  alt={car.name}
                  width={232}
                  height={72}
                />
                <br />

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
              <CardFooter className="w-full flex items-center justify-between">
                <div>
                  <p className="text-2xl font-semibold leading-none tracking-tight">
                    {car.pricePerDay}
                  </p>
                  <span>{car.originalPrice}</span>
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

      <section className="w-full text-center">
        <Link href="/categories">
          <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5">
            Show More Cars
          </button>
        </Link>
      </section>
    </div>
  );
}
//<Link href={`/details/${details.slug.current}`}>