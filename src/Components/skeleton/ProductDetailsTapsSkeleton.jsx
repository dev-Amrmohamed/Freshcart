import React from "react";

export default function ProductDetailsTapsSkeleton() {
  return (
    <>
      <section className="my-10">
        <div className="container">
          <div className="border-b border-gray-200">
            <div className="flex gap-10 *:font-medium *:px-6 *:py-4 *:cursor-pointer">
              <div className="h-6 w-32 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4 animate-pulse">
              <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
              <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
