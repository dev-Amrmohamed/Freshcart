export default function CartItemSkeleton() {
  return (
    <>
      <div className="item flex justify-between mt-10 animate-pulse">
        <div className="info flex">
          <div className="size-30 rounded-lg bg-gray-200"></div>
          <div className="ms-5 space-y-2">
            <div>
              <div className="h-6 w-40 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
            </div>
            <div className="rate flex gap-2 items-center">
              <div className="h-5 w-20 bg-gray-200 rounded"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
        <div className="counterer flex justify-center items-center gap-4">
          <div className="flex justify-center items-center gap-0 rounded-xl px-0 py-0">
            <div className="border border-gray-300 rounded-s-lg p-2">
              <div className="h-5 w-5 bg-gray-200 rounded"></div>
            </div>
            <div className="border-y border-gray-300 px-4 py-2">
              <div className="h-5 w-8 bg-gray-200 rounded"></div>
            </div>
            <div className="border border-gray-300 rounded-e-lg p-2">
              <div className="h-5 w-5 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="text-xl font-bold">
            <div className="h-6 w-16 bg-gray-300 rounded"></div>
          </div>
          <div>
            <div className="h-6 w-6 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </>
  );
}
