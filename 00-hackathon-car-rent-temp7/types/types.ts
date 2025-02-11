

// types/car.d.ts
export type carData ={
    _id: string;
    name: string;
    brand: string;
    type: string;
    fuelCapacity: string;
    transmission: string;
    seatingCapacity: string;
    pricePerDay: string;
    originalPrice: string;
    description: string;
    tags: string[];
    imageUrl: string;
    // reviews?: Review[];
    // slug:{
    //   _type:"slug"
    //   current: string;
    // }
  }

  // export interface Review {
  //   _id: string;
  //   author: string;
  //   rating: number;
  //   comment: string;
  //   date: string;
  // }