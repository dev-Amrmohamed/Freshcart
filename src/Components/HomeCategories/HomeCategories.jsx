import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router";
import Loading from "../Loading/Loading";
import { categoriesContext } from "../../context/categories.context";
import HomeCategoriesSkeleton from "../skeleton/HomeCategoriesSkeleton";

export default function HomeCategories() {
  const { isLoading, categories } = useContext(categoriesContext);
  if (isLoading) {
    return <HomeCategoriesSkeleton />;
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

          <div className="grid grid-cols-6 gap-4 mt-7">
            {categories.map((category) => (
              <Link
                to={`/category/${category._id}`}
                key={category._id}
                className="card p-6 space-y-3 rounded-2xl shadow-xl flex flex-col justify-center items-center bg-white"
              >
                <img
                  src={category.image}
                  alt=""
                  className="size-14 rounded-full cursor-pointer object-cover"
                />
                <h3>{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
