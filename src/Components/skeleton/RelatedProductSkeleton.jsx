import React from "react";

export default function RelatedProductSkeleton() {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex justify-between items-center mb-5">
            <div className="h-8 w-64 bg-gray-300 rounded animate-pulse"></div>
            <div className="flex items-center justify-center gap-5">
              <div className="size-10 bg-gray-100 rounded-full animate-pulse"></div>
              <div className="size-10 bg-gray-100 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="p-6 space-y-3 rounded-2xl shadow-xl flex flex-col justify-center items-center bg-white animate-pulse"
              >
                <div className="size-24 rounded-lg bg-gray-200 mb-3"></div>
                <div className="h-5 w-32 bg-gray-300 rounded"></div>
                <div className="h-4 w-20 bg-gray-200 rounded"></div>
                <div className="h-4 w-16 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
