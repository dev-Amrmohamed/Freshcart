export default function HomeCategoriesSkeleton() {
  return (
    <>
      <section className="py-10">
        <div className="container">
          <div className="flex justify-between">
            <div className="h-7 w-40 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-7 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>

          <div className="grid grid-cols-6 gap-4 mt-7">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="card p-6 space-y-3 rounded-2xl shadow-xl flex flex-col justify-center items-center bg-white animate-pulse"
              >
                <div className="size-14 rounded-full bg-gray-200"></div>
                <div className="h-5 w-20 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
