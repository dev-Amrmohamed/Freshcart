export default function HomeDealsSkeleton() {
  return (
    <>
      <section>
        <div className="container">
          <div className="left flex justify-between">
            <div>
              <div className="h-7 w-48 bg-gray-300 rounded animate-pulse mb-2"></div>
              <div className="flex gap-2 items-center mt-3">
                <div className="h-5 w-28 bg-gray-200 rounded animate-pulse"></div>
                <div className="counter flex gap-2">
                  <div className="size-8 bg-gray-300 rounded-md animate-pulse"></div>
                  <span className="h-5 w-2 bg-gray-200 rounded animate-pulse"></span>
                  <div className="size-8 bg-gray-300 rounded-md animate-pulse"></div>
                  <span className="h-5 w-2 bg-gray-200 rounded animate-pulse"></span>
                  <div className="size-8 bg-gray-300 rounded-md animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="h-7 w-40 bg-gray-200 rounded animate-pulse"></div>
          </div>

          <div className="py-10 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
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
