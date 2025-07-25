import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HomeSildeImg from "../../assets/home-slider-1.png";
import HomeFeatures from "../HomeFeatures/HomeFeatures";

export default function HomeSlider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${HomeSildeImg}')`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
            }}
          >
            <div className="overlay py-24 bg-gradient-to-r from-primary-500/95 to-primary-600/40">
              <div className="container text-white space-y-2">
                <h2 className="text-2xl font-bold">
                  Fresh Products delievered <br /> to your Door
                </h2>
                <p>Get 20% Off for your first ordei</p>
                <div className="space-x-2">
                  <button className="btn bg-white text-primary-500 hover:bg-gray-100 ">
                    Shop Now
                  </button>
                  <button className="btn bg-transparent border text-white border-white hover:bg-white hover:text-primary-500">
                    View Deals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${HomeSildeImg}')`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
            }}
          >
            <div className="overlay py-24 bg-gradient-to-r from-primary-500/95 to-primary-600/40">
              <div className="container text-white space-y-2">
                <h2 className="text-2xl font-bold">
                  FreshOrganicProduce
                  <br />
                  Delivered to your Door
                </h2>
                <p>Get 20% Off for your first ordei</p>
                <div className="space-x-2">
                  <button className="btn bg-white text-primary-500 hover:bg-gray-100 ">
                    Shop Now
                  </button>
                  <button className="btn bg-transparent border text-white border-white hover:bg-white hover:text-primary-500">
                    View Deals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${HomeSildeImg}')`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
            }}
          >
            <div className="overlay py-24 bg-gradient-to-r from-primary-500/95 to-primary-600/40">
              <div className="container text-white space-y-2">
                <h2 className="text-2xl font-bold">
                  Fresh Products delievered <br /> to your Door
                </h2>
                <p>Get 20% Off for your first ordei</p>
                <div className="space-x-2">
                  <button className="btn bg-white text-primary-500 hover:bg-gray-100 ">
                    Shop Now
                  </button>
                  <button className="btn bg-transparent border text-white border-white hover:bg-white hover:text-primary-500">
                    View Deals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <HomeFeatures />
    </>
  );
}
