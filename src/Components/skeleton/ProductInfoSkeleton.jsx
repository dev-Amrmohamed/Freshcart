import React from "react";

export default function ProductInfoSkeleton() {
  return (
    <>
      <section className="mt-15">
        <div className="container">
          <div>
            <div className="grid grid-cols-12 gap-8">
              {/* right skeleton */}
              <div className="col-span-12 sm:col-span-12 lg:col-span-3">
                <div className="h-96 w-full bg-gray-200 rounded animate-pulse"></div>
              </div>
              {/* left skeleton */}
              <div className="col-span-12 sm:col-span-12 lg:col-span-9 p-4">
                <div className="space-y-3 animate-pulse">
                  <div className="head flex justify-between items-center">
                    <span className="h-6 w-24 bg-gray-300 rounded"></span>
                    <div className="flex gap-2">
                      <div className="h-6 w-6 bg-gray-200 rounded"></div>
                      <div className="h-6 w-6 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="product-info mt-5">
                    <div className="h-6 w-48 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-20 bg-gray-200 rounded"></div>
                    <div className="h-4 w-8 bg-gray-300 rounded"></div>
                    <div className="h-4 w-12 bg-gray-200 rounded"></div>
                  </div>
                  <div className="price flex items-center gap-2">
                    <div className="h-7 w-24 bg-gray-300 rounded"></div>
                    <div className="h-5 w-16 bg-gray-200 rounded"></div>
                    <div className="h-5 w-20 bg-red-200 rounded"></div>
                  </div>
                </div>

                <div className="space-y-5 mt-10 animate-pulse">
                  <div className="h-4 w-96 bg-gray-200 rounded"></div>
                  <div className="counter flex items-center gap-7">
                    <div className="h-4 w-20 bg-gray-200 rounded"></div>
                    <div className="border border-gray-300 px-2 py-1 flex items-center gap-8">
                      <div className="h-8 w-8 bg-gray-200 rounded"></div>
                      <div className="h-8 w-8 bg-gray-200 rounded"></div>
                      <div className="h-8 w-8 bg-gray-200 rounded"></div>
                    </div>
                    <div className="h-4 w-32 bg-gray-200 rounded"></div>
                  </div>
                </div>

                <div className="flex mt-7 gap-3 w-full *:w-full animate-pulse">
                  <div className="h-12 w-full bg-gray-300 rounded"></div>
                  <div className="h-12 w-full bg-gray-200 rounded"></div>
                </div>

                <div className="icons mt-10 flex justify-between animate-pulse">
                  <div className="item flex items-center gap-3">
                    <div className="bg-gray-200 size-10 rounded-full"></div>
                    <div>
                      <div className="h-4 w-24 bg-gray-300 rounded mb-1"></div>
                      <div className="h-3 w-32 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="item flex items-center gap-3">
                    <div className="bg-gray-200 size-10 rounded-full"></div>
                    <div>
                      <div className="h-4 w-24 bg-gray-300 rounded mb-1"></div>
                      <div className="h-3 w-32 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
