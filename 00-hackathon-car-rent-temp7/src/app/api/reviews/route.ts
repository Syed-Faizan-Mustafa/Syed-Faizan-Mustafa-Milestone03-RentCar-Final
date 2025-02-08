// // app/api/reviews/route.ts
// import { serverClient } from "@/sanity/lib/serverClient";
// import { nanoid } from "nanoid";

// export async function POST(request: Request) {
//     const { author, rating, comment, carId } = await request.json();

//     const transaction = serverClient.transaction()
//         .create(review)
//         .patch(carId, (patch) =>
//             patch.append('reviews', [{ _type: 'reference', _ref: review._id }])
//         );

//     try {
//         const review = {
//             _type: 'review',
//             _id: `review.${nanoid()}`,
//             author,
//             rating: Number(rating),
//             comment,
//             date: new Date().toISOString(),
//             car: {
//                 _type: 'reference',
//                 _ref: carId
//             }
//         };

//         const transaction = client.transaction()
//             .create(review)
//             .patch(carId, (patch) =>
//                 patch.append('reviews', [{ _type: 'reference', _ref: review._id }])
//             );

//         await transaction.commit();
//         return new Response(JSON.stringify({ success: true }), { status: 200 });
//     } catch (error) {
//         return new Response(JSON.stringify({ error: 'Failed to submit review' }), { status: 500 });
//     }
// }