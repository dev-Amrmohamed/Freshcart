import React from "react";

export default function CheackoutSkeleton() {
  return (
    <>
      <section>
        <div className="container max-w-6xl py-6">
          <div className="animate-pulse">
            <div className="h-8 w-40 bg-gray-300 rounded mb-6"></div>
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="Payment-method lg:col-span-8 space-y-6">
                <div className="payment-options bg-white shadow-sm rounded-lg mb-6 p-6 space-y-4">
                  <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-14 bg-gray-200 rounded"></div>
                    <div className="h-14 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="shipping-address bg-white shadow-sm rounded-lg p-5 space-y-4">
                  <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>
                  <div className="h-10 bg-gray-200 rounded mb-2"></div>
                  <div className="flex gap-3">
                    <div className="h-10 w-32 bg-gray-200 rounded"></div>
                    <div className="h-10 w-32 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="order-summary h-fit bg-white shadow-sm rounded-lg lg:col-span-4 p-6 space-y-4">
                <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>
                <div className="cart-items border-b max-h-48 overflow-auto space-y-3 border-gray-500/20 pb-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex gap-2 items-center">
                      <div className="size-12 bg-gray-200 rounded-lg"></div>
                      <div>
                        <div className="h-4 w-24 bg-gray-300 rounded mb-1"></div>
                        <div className="h-3 w-16 bg-gray-200 rounded"></div>
                      </div>
                      <div className="ms-auto h-4 w-12 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
                <ul className="py-3 space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <li key={i} className="flex justify-between items-center">
                      <div className="h-4 w-20 bg-gray-200 rounded"></div>
                      <div className="h-4 w-16 bg-gray-300 rounded"></div>
                    </li>
                  ))}
                </ul>
                <div className="btn-groub space-y-2">
                  <div className="h-10 w-full bg-gray-300 rounded"></div>
                  <div className="h-10 w-full bg-gray-200 rounded"></div>
                </div>
                <div className="space-y-2 mt-3">
                  <div className="h-5 w-32 bg-gray-300 rounded"></div>
                  <div className="h-4 w-48 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
