import React from "react";

export default function ForgotPasswordSkeleton() {
  return (
    <>
      <section>
        {/* top skeleton */}
        <div className="bg-gray-200 flex flex-col items-center justify-center p-10 space-y-5">
          <div className="box flex flex-col justify-center items-center space-y-10 shadow rounded-lg bg-white p-10 animate-pulse">
            <div className="icon bg-gray-300 rounded-full flex justify-center items-center size-16"></div>
            <div className="para text-center space-y-2 mt-5">
              <div className="h-6 w-48 bg-gray-300 rounded mx-auto mb-2"></div>
              <div className="h-4 w-72 bg-gray-200 rounded mx-auto"></div>
            </div>
            <div className="flex flex-col w-full space-y-2">
              <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
              <div className="h-10 w-full bg-gray-200 rounded mb-4"></div>
              <div className="h-10 w-full bg-gray-300 rounded"></div>
            </div>
            <div className="h-4 w-48 bg-gray-200 rounded mx-auto"></div>
          </div>
          <div className="w-md">
            <div className="flex justify-center p-4 rounded-lg gap-4 shadow animate-pulse">
              <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
              <div>
                <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 w-64 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        {/* bottom skeleton */}
        <div>
          <div className="container">
            <div className="h-6 w-64 bg-gray-300 rounded mx-auto my-10 animate-pulse"></div>
            <div className="flex justify-center mb-10 gap-5">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="p-9 flex flex-col items-center bg-gray-50 border border-gray-300 rounded-lg animate-pulse"
                >
                  <div className="bg-gray-300 flex justify-center items-center size-16 rounded-full mb-4"></div>
                  <div className="h-5 w-32 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 w-40 bg-gray-200 rounded mb-2"></div>
                  <div className="h-10 w-24 bg-gray-300 rounded mt-5"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
