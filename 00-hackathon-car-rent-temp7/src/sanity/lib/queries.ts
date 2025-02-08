// sanity/lib/queries.ts
export const allCars = `*[_type == "car"] | order(_createdAt desc){
    _id, 
    name,
    brand,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    originalPrice,
    description,
    tags,
    "imageUrl": image.asset->url
  }`;
  
  export const carQuery = `*[_type == 'car' && _id == $id][0]{
    _id, 
    name,
    brand,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    originalPrice,
    description,
    tags,
    "imageUrl": image.asset->url,
    reviews[]->{
    _id,
    author,
    rating,
    comment,
    date
  }
  }`;