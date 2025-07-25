import React from "react";

export default function CartSkeleton() {
  return (
    <>
      <section className="mt-10 bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-12 gap-8 py-10">
            {/* right skeleton */}
            <div className="col-span-12 lg:col-span-8 border border-gray-300 rounded-xl p-5 bg-white max-h-fit">
              <div className="animate-pulse">
                <div className="h-7 bg-gray-300 rounded w-1/3 mb-3"></div>
                <div className="h-5 bg-gray-200 rounded w-1/4 mb-6"></div>
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex gap-4 items-center mb-4">
                      <div className="w-20 h-20 bg-gray-200 rounded"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* left skeleton */}
            <div className="Order col-span-12 lg:col-span-4 border border-gray-300 rounded-xl p-7 bg-white space-y-6 max-h-fit">
              <div className="animate-pulse space-y-4">
                <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
                <div className="space-y-3 border-b border-gray-200 pb-5">
                  <div className="flex justify-between">
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/6"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="h-4 bg-gray-200 rounded w-1/5"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/6"></div>
                  </div>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/6"></div>
                </div>
                <div className="flex flex-col space-y-2 *:w-full">
                  <div className="h-10 bg-gray-300 rounded"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
                <div className="icons-info space-y-4">
                  <div className="bg-gray-100 rounded-lg p-5 space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-6 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    </div>
                    <div>
                      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="bg-primary-100 rounded-lg p-5 border border-primary-500 space-y-2">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-6 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      </div>
                      <div>
                        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                      </div>
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
