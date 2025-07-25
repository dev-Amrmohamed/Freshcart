import React from "react";
import WishistItemSkeleton from "./WishistItemSkeleton";

export default function WishlistSkeleton() {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-12 gap-8 py-10">
            {/* right skeleton */}
            <div className="col-span-12 lg:col-span-9 border border-gray-300 rounded-xl p-5 bg-white max-h-fit">
              <div>
                <div>
                  <div className="h-7 w-40 bg-gray-300 rounded mb-2 animate-pulse"></div>
                </div>
                <div className="flex justify-between items-center *:font-normal mb-6">
                  <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
                  <div className="flex gap-2">
                    <div className="h-10 w-32 bg-gray-300 rounded animate-pulse"></div>
                    <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div>
                {[...Array(3)].map((_, i) => (
                  <WishistItemSkeleton key={i} />
                ))}
              </div>
            </div>

            {/* left skeleton */}
            <div className="Order col-span-12 lg:col-span-3 space-y-6">
              {/* Wishlist Name */}
              <div className="border border-gray-300 rounded-xl p-5 bg-white animate-pulse">
                <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>
                <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                <div className="h-10 w-full bg-gray-200 rounded mb-4"></div>
                <div className="h-10 w-full bg-gray-300 rounded"></div>
              </div>
              {/* My Wishlists */}
              <div className="border border-gray-300 rounded-xl p-5 bg-white animate-pulse">
                <div className="h-6 w-32 bg-gray-300 rounded mb-7"></div>
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="item flex justify-between items-center border-b border-gray-200 py-3"
                  >
                    <div>
                      <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
                      <div className="h-3 w-16 bg-gray-200 rounded"></div>
                    </div>
                    <div className="h-6 w-16 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
              {/* Share Your */}
              <div className="border border-gray-300 rounded-xl p-5 bg-white animate-pulse">
                <div className="h-6 w-32 bg-gray-300 rounded mb-7"></div>
                <div className="h-4 w-48 bg-gray-200 rounded mb-4"></div>
                <div className="flex gap-2 mb-4">
                  <div className="h-10 w-24 bg-gray-300 rounded"></div>
                  <div className="h-10 w-10 bg-gray-200 rounded"></div>
                </div>
                <div className="relative">
                  <div className="h-10 w-full bg-gray-200 rounded"></div>
                  <div className="h-8 w-24 bg-gray-300 rounded absolute top-1 right-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
