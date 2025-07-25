import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { useContext, useEffect, useState } from "react";
import { getAllProducts } from "../../services/product-services";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import { calcTimeLeft } from "../../utils/counterDown";
import { productContext } from "../../context/Product.context";
import HomeDealsSkeleton from "../skeleton/HomeDealsSkeleton";

export default function HomeDeals() {
  const { isLoading, products, isError } = useContext(productContext);
  const [timeLeft, setTimeLeft] = useState({ Hour: 0, Minute: 0, Sec: 0 });
  useEffect(() => {
    const timer = setInterval(() => {
      const NewTimeLeft = calcTimeLeft();
      setTimeLeft(NewTimeLeft);
    }, 1000);

    return function () {
      clearInterval(timer);
    };
  }, []);

  if (isLoading) {
    return <HomeDealsSkeleton />;
  }

  const deals = products.filter((product) => product.priceAfterDiscount).slice(0, 5);

  return (
    <>
      <section>
        <div className="container">
          <div className="left flex justify-between">
            <div>
              <h3 className="text-2xl font-bold">Deals of the Day</h3>
              <div className="flex gap-2 items-center mt-3">
                <p className="text-gray-600 ">Offers end in:</p>
                <div className="counter flex gap-2">
                  <div className="size-8 bg-black text-sm text-white rounded-md flex justify-center items-center">
                    {String(timeLeft.Hour).padStart(2, "0")}
                  </div>
                  <span>:</span>
                  <div className="size-8 bg-black text-sm text-white rounded-md flex justify-center items-center">
                    {String(timeLeft.Minute).padStart(2, "0")}
                  </div>
                  <span>:</span>
                  <div className="size-8 bg-black text-sm text-white rounded-md flex justify-center items-center">
                    {String(timeLeft.Sec).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>

            <Link className="text-primary-500 hover:text-primary-700 transition-colors duration-200 font-bold flex justify-center items-center gap-2.5">
              View All Deals
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <div className="py-10 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
            {deals.map((product) => (
              <ProductCard key={product._id} productInfo={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
