import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/product-services";
import Loading from "../Loading/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import RelatedProductSkeleton from "../skeleton/RelatedProductSkeleton";
export default function RelatedProduct({ productDetails }) {
  const { category } = productDetails;
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchRelatedProducted() {
    try {
      setIsLoading(true);
      const response = await getAllProducts({ category: category._id });
      console.log(response);
      if (response.success) {
        setIsLoading(false);
        console.log(response.data.data);

        setProduct(response.data.data.data);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchRelatedProducted();
  }, []);

  if (isLoading) {
    return <RelatedProductSkeleton />;
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-2xl font-bold ">You May Also Like</h3>

            <div className="flex items-center justify-center gap-5 *:flex *:justify-center *:text-center *:items-center *:rounded-full *:cursor-pointer *:hover:bg-primary-200 *:hover:text-primary-500 *:transition-colors *:duration-200">
              <button className="prev-btn bg-gray-100 text-gray-600 size-10 *:text-xl">
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
              <button className="next-btn bg-gray-100 text-gray-600 size-10 *:text-xl">
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          </div>

          {/* <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 "> */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            slidesPerView={5}
            spaceBetween={10}
            loop={true}
          >
            {product ? (
              product.map((product) => (
                <SwiperSlide>
                  <ProductCard key={product._id} productInfo={product} />
                </SwiperSlide>
              ))
            ) : (
              <Loading />
            )}
          </Swiper>
          {/* </div> */}
        </div>
      </section>
    </>
  );
}
