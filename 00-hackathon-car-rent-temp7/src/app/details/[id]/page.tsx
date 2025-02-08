// app/details/[slug]/page.tsx
import { sanityFetch } from "@/sanity/lib/fetch";
import { carQuery, allCars } from "@/sanity/lib/queries";
import Image from "next/image";
import DetailsCard from "@/components/ui/DetailsCard";
import Sidebar from "@/components/Sidebar";
import { Car } from "../../../../types/car";
import Reviews from "@/components/ui/Reviews";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Link from "next/link";

export default async function DetailPage({
  params,
}: {
  params: { id?: string };
}) {
  console.log(" params.id:", params.id); // Debugging: See what `id` is being passed

  // ✅ Ensure `id` is defined before making the Sanity query
  if (!params.id) {
    return <div>Error: Missing Car ID</div>;
  }
  const car = await sanityFetch<Car>({
    query: carQuery,
    params: { id: params.id },
  });
  // Fetch all cars
  const allCarsList = await sanityFetch<Car[]>({
    query: allCars,
  });

  if (!car) return <div>Car not found</div>;

  return (
    <div className="w-full flex">
      <div className="first max-sm:hidden w-[25%]">
        <Sidebar />
      </div>
      <div className="sec w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-10">
        <Reviews reviews={car.reviews || []} carId={car._id} />
        <section className="w-full flex flex-col md:flex-row gap-5 items-stretch justify-around">
          <div className="first flex flex-col gap-4 w-full lg:max-w-[470px]">
            <Image
              src={car.imageUrl}
              alt={car.name}
              width={470}
              height={508}
              className="w-full h-auto rounded-xl"
              priority
            />
          </div>

          <div className="flex flex-col w-full lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md">
            <DetailsCard product={car} />
            {/* Rest of your component */}
          </div>
        </section>
        <section className="popular w-full flex flex-col gap-5">
          <div className="first w-full flex items-center justify-between px-10 xl:px-14">
            <h1 className="text-gray-500 text-lg sm:text-xl">Recent Car</h1>
            <Link href={"/categories"}>
              <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
                View All
              </h1>
            </Link>
          </div>
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">
            {allCarsList.map((c:any) => (
              <Card
                key={c._id}
                className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between"
              >
                <CardHeader>
                  <CardTitle className="w-full flex items-center justify-between">
                    {c.name}
                    <Image src={"/heart.png"} alt="" width={20} height={20} />
                  </CardTitle>
                  <CardDescription>{c.type}</CardDescription>
                </CardHeader>
                <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image
                  src={c.imageUrl}
                  alt={c.name}
                  width={232}
                  height={72}
                />
                </CardContent>
                <CardFooter className="w-full flex items-center justify-between">
                  <p className="text-2xl font-semibold leading-none tracking-tight">
                    {car.pricePerDay}
                    <span className="text-sm font-medium text-gray-500"></span>
                  </p>
                  <Link href={"/payments"}>
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">
                      Rent Now
                    </button>
                  </Link>
                </CardFooter>
              </Card>
            ))}

          </div>
        </section>
      </div>
    </div>
  );
}
