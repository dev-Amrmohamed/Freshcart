export default function BrandsSkeleton() {
  return (
    <>
      <section className="py-10">
        <div className="container">
          <div className="flex justify-between">
            <div className="h-7 w-40 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-7 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-7">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="card space-y-3 rounded-2xl shadow-xl flex flex-col justify-center items-center bg-white animate-pulse"
              >
                <div className="h-36 w-full bg-gray-200 rounded"></div>
                <div className="h-5 w-24 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>

          <div className="mt-24">
            <div className="h-6 w-48 bg-gray-300 rounded mb-7 animate-pulse"></div>
            <div className="grid lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center space-y-3 shadow rounded-lg border-e border-gray-500/10 animate-pulse p-4 w-full"
                >
                  <div className="size-24 bg-gray-200 rounded mb-2"></div>
                  <div className="h-10 w-full bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
