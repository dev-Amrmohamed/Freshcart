import React from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";

export default function HomeFeaturesSkeleton() {
  return (
    <>
      <section>
        <div className="container">
          <div className="h-7 w-48 bg-gray-300 rounded animate-pulse mt-4 mb-6"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {[...Array(5)].map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
