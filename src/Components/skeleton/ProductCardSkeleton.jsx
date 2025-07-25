import React from "react";

export default function ProductCardSkeleton() {
  return (
    <>
      <div className="card space-y-2 relative shadow-lg overflow-hidden cursor-pointer animate-pulse">
        <div>
          <div className="h-60 w-full bg-gray-200 rounded"></div>
        </div>
        <div className="card_body card space-y-3 p-4">
          <div>
            <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
            <div className="h-6 w-40 bg-gray-200 rounded"></div>
          </div>
          <div className="ratings flex items-center gap-2">
            <div className="h-5 w-20 bg-gray-200 rounded"></div>
            <div className="h-4 w-16 bg-gray-300 rounded"></div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <div className="h-5 w-20 bg-gray-300 rounded"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </div>
            <div className="btn p-0 size-8 flex justify-center items-center rounded-full bg-gray-300"></div>
          </div>
        </div>
        <div className="actions absolute right-4 top-5 flex flex-col gap-4">
          <div className="h-6 w-6 bg-gray-200 rounded"></div>
          <div className="h-6 w-6 bg-gray-200 rounded"></div>
          <div className="h-6 w-6 bg-gray-200 rounded"></div>
        </div>
        <div className="badage absolute left-4 top-4 h-6 w-16 bg-gray-300 rounded"></div>
      </div>
    </>
  );
}
