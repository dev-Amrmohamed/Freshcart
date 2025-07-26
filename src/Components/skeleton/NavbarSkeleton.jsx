import React from "react";

export default function NavbarSkeleton() {
  return (
    <>
      <div className="container animate-pulse">
        {/* Top-Nav Skeleton */}
        <div className="hidden lg:flex justify-between items-center py-2 border-b border-gray-300/40">
          <ul className="flex items-center gap-5">
            <li className="flex gap-2 items-center">
              <div className="h-4 w-4 bg-gray-200 rounded-full" />
              <div className="h-3 w-24 bg-gray-200 rounded" />
            </li>
            <li className="flex gap-2 items-center">
              <div className="h-4 w-4 bg-gray-200 rounded-full" />
              <div className="h-3 w-32 bg-gray-200 rounded" />
            </li>
          </ul>
          <ul className="flex items-center gap-5">
            {[...Array(3)].map((_, i) => (
              <li key={i} className="h-3 w-20 bg-gray-200 rounded" />
            ))}
            <li className="h-6 w-14 bg-gray-200 rounded" />
            <li className="h-6 w-16 bg-gray-200 rounded" />
          </ul>
        </div>

        {/* Main-Nav Skeleton */}
        <nav className="flex justify-between items-center py-5">
          <div className="h-10 w-32 bg-gray-200 rounded" />
          <div className="relative hidden lg:block">
            <div className="h-10 w-96 bg-gray-200 rounded" />
          </div>
          <ul className="hidden lg:flex gap-5">
            {[...Array(3)].map((_, i) => (
              <li key={i} className="flex flex-col items-center space-y-2">
                <div className="h-7 w-7 bg-gray-200 rounded-full" />
                <div className="h-3 w-14 bg-gray-200 rounded" />
              </li>
            ))}
            <li className="flex flex-col items-center space-y-2">
              <div className="h-7 w-7 bg-gray-200 rounded-full" />
              <div className="h-3 w-14 bg-gray-200 rounded" />
            </li>
            <li className="flex flex-col items-center space-y-2">
              <div className="h-7 w-7 bg-gray-200 rounded-full" />
              <div className="h-3 w-14 bg-gray-200 rounded" />
            </li>
          </ul>
          <button className="lg:hidden h-10 w-10 bg-gray-200 rounded" />
        </nav>
      </div>
      {/* Category-Nav Skeleton */}
      <nav className="hidden lg:block bg-gray-100 py-3 animate-pulse">
        <div className="container flex items-center gap-9">
          <div className="relative">
            <div className="h-10 w-48 bg-gray-200 rounded" />
          </div>
          <ul className="flex gap-5">
            {[...Array(6)].map((_, i) => (
              <li key={i} className="h-3 w-20 bg-gray-200 rounded" />
            ))}
          </ul>
        </div>
      </nav>
      {/* OffCanvas-SideBar Skeleton */}
      <div className="hidden" /> {/* Hide offcanvas for skeleton */}
    </>
  );
}
