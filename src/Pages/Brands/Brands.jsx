import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router";
import Loading from "./../../Components/Loading/Loading";
import { categoriesContext } from "../../context/categories.context";
import appel from "./../../assets/appel.png";
import sam from "./../../assets/samsung.png";
import huawei from "./../../assets/huawei.png";
import htc from "./../../assets/HTC.png";
import nokia from "./../../assets/nokia.png";
import blackB from "./../../assets/blackberry.png";
import lenovo from "./../../assets/lenovo.png";
import lg from "./../../assets/LG.png";
import toshiba from "./../../assets/toshiba.png";
import tesla from "./../../assets/Tesla.png";
import BrandsSkeleton from "../../Components/skeleton/BrandsSkeleton";

export default function Brands() {
  const { isLoading, categories } = useContext(categoriesContext);
  if (isLoading) {
    return <BrandsSkeleton />;
  }
  return (
    <>
      <section className="py-10">
        <div className="container">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Shop by Category</h2>

            <Link
              to={`/categories`}
              className="text-primary-500 hover:text-primary-700 transition-colors duration-200 font-bold flex justify-center items-center gap-2.5"
            >
              View All Categories
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-7">
            {categories.map((category) => (
              <Link
                to={`/category/${category._id}`}
                key={category._id}
                className="card space-y-3 rounded-2xl shadow-xl flex flex-col justify-center items-center bg-white"
              >
                <img
                  src={category.image}
                  alt=""
                  className="h-36 w-full cursor-pointer object-cover"
                />
                <h3 className="">{category.name}</h3>
              </Link>
            ))}
          </div>

          <div className="mt-24">
            <h3 className="text-xl font-bold mb-7">Popular Subcategories</h3>
            <div className="grid lg:grid-cols-4 gap-4 ">
              <div className="flex flex-col items-center space-x-2 space-y-3 shadow  rounded-lg border-e border-gray-500/10">
                <img src={appel} alt="" className="size-24" />
                <button className="btn text-white bg-primary-600 w-full">View</button>
              </div>
              <div className="flex flex-col items-center space-y-3 shadow  rounded-lg border-e border-gray-500/10">
                <img src={sam} alt="" className="size-24" />
                <button className="btn text-white bg-primary-600 w-full">View</button>
              </div>
              <div className="flex flex-col items-center space-y-3 shadow  rounded-lg border-e border-gray-500/10">
                <img src={huawei} alt="" className="size-24" />
                <button className="btn text-white bg-primary-600 w-full">View</button>
              </div>
              <div className="flex flex-col items-center space-y-3 shadow  rounded-lg border-e border-gray-500/10">
                <img src={htc} alt="" className="size-24" />
                <button className="btn text-white bg-primary-600 w-full">View</button>
              </div>
              <div className="flex flex-col items-center space-y-3 shadow  rounded-lg border-e border-gray-500/10">
                <img src={nokia} alt="" className="size-24" />
                <button className="btn text-white bg-primary-600 w-full">View</button>
              </div>
              <div className="flex flex-col items-center space-y-3 shadow  rounded-lg border-e border-gray-500/10">
                <img src={blackB} alt="" className="size-24" />
                <button className="btn text-white bg-primary-600 w-full">View</button>
              </div>
              <div className="flex flex-col items-center space-y-3 shadow  rounded-lg border-e border-gray-500/10">
                <img src={lenovo} alt="" className="size-24" />
                <button className="btn text-white bg-primary-600 w-full">View</button>
              </div>
              <div className="flex flex-col items-center space-y-3 shadow  rounded-lg border-e border-gray-500/10">
                <img src={lg} alt="" className="size-24" />
                <button className="btn text-white bg-primary-600 w-full">View</button>
              </div>
              <div className="flex flex-col items-center space-y-3 shadow  rounded-lg border-e border-gray-500/10">
                <img src={toshiba} alt="" className="size-24" />
                <button className="btn text-white bg-primary-600 w-full">View</button>
              </div>
              <div className="flex flex-col items-center space-y-3 shadow  rounded-lg border-e border-gray-500/10">
                <img src={tesla} alt="" className="size-24" />
                <button className="btn text-white bg-primary-600 w-full">View</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
