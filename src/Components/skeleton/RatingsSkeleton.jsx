import React from "react";

export default function RatingsSkeleton() {
  return (
    <>
      <div className="flex gap-2 animate-pulse">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-5 w-5 bg-gray-200 rounded"></div>
        ))}
      </div>
    </>
  );
}
