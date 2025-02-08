// components/Reviews.tsx
"use client";

import { useState } from "react";
import StarRating from "./StarRating";

export default function Reviews({ reviews, carId }: { reviews: any[], carId: string }) {
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    author: '',
    rating: 5,
    comment: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add API call to submit review
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newReview,
          carId
        }),
      });

      if (response.ok) {
        setShowForm(false);
        // Refresh reviews
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Reviews ({reviews.length})</h2>
      
      <button 
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Write a Review
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-8 p-4 bg-gray-50 rounded">
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded"
              value={newReview.author}
              onChange={(e) => setNewReview({...newReview, author: e.target.value})}
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2">Rating</label>
            <StarRating
              rating={newReview.rating}
              onRate={(rating) => setNewReview({...newReview, rating})}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Comment</label>
            <textarea
              required
              className="w-full p-2 border rounded h-32"
              value={newReview.comment}
              onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
            />
          </div>

          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            Submit Review
          </button>
        </form>
      )}

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review._id} className="p-4 bg-white rounded shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold">{review.author}</h3>
              <span className="text-sm text-gray-500">
                {new Date(review.date).toLocaleDateString()}
              </span>
            </div>
            <StarRating rating={review.rating} />
            <p className="mt-2 text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}