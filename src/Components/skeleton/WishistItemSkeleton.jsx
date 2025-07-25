import React from "react";

export default function WishistItemSkeleton() {
  return (
    <>
      <div className="item flex justify-between items-center mt-10 animate-pulse">
        <div className="info flex">
          <div className="size-30 rounded-lg bg-gray-200"></div>
          <div className="ms-5 space-y-2">
            <div>
              <span className="text-sm text-gray-600"></span>
              <h4 className="font-bold text-xl"></h4>
            </div>
            <div className="rate flex gap-2">
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
            </div>

            <p className="text-primary-600 font-bold"></p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4"></div>

        <div>
          <button className="btn font-normal bg-primary-600 text-white me-3 opacity-50 cursor-not-allowed">
            Add to Cart
          </button>
          <button className="opacity-50 cursor-not-allowed">
            <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
          </button>
        </div>
      </div>
    </>
  );
}
