import {
  faAppleAlt,
  faBreadSlice,
  faComment,
  faDrumstickBite,
  faEgg,
  faEnvelope,
  faHouse,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import notFoundImg from "../../assets/notFound.svg";

export default function NotFound() {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container">
          <div className="head flex flex-col  justify-center items-center ">
            <img src={notFoundImg} alt="" />
            <div className="paragrphs text-center mt-14 space-y-3">
              <h2 className="text-4xl font-bold ">Oops! Page Not Found</h2>
              <p className="text-gray-700 text-lg">
                The page you're looking for seems to have gone shopping!
              </p>
              <span className="text-gray-500">
                Don't worry, our fresh products are still available for you.
              </span>
            </div>

            <div className="btn-groub flex gap-5 mt-10">
              <Link
                to={"/"}
                className="btn w-full px-8 py-3 font-medium flex items-center gap-2 bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faHouse} />
                Back To Home
              </Link>
              <button className="btn w-full px-8 py-3 font-medium flex items-center gap-2  bg-transparent text-primary-600 border border-primary-600 hover:text-primary-700 transition-colors duration-200">
                <FontAwesomeIcon icon={faSearch} className="" />
                <span className="whitespace-nowrap">Search Products</span>
              </button>
            </div>
          </div>

          <div className="popular categories space-y-10">
            <h2 className="text-center text-xl font-bold mb-5 my-14">
              Or explore our popular categories
            </h2>
            <div className="items mx-auto max-w-7xl w-full flex justify-center gap-5">
              <div className="item w-full flex justify-center items-center flex-col  space-y-4 bg-white px-6 py-10 rounded-lg">
                <div className="icon bg-primary-100 size-16 flex justify-center items-center rounded-full">
                  <FontAwesomeIcon icon={faAppleAlt} className="text-2xl text-primary-600" />
                </div>
                <p className="font-bold text-lg">Fruits & Vegetables</p>
              </div>
              <div className="item w-full flex  justify-center items-center flex-col space-y-4 bg-white p-6 rounded-lg">
                <div className="icon bg-primary-100 size-16 flex justify-center items-center rounded-full">
                  <FontAwesomeIcon icon={faEgg} className="text-2xl text-primary-600" />
                </div>
                <p className="font-bold text-lg">Dairy & Eggs</p>
              </div>
              <div className="item w-full flex justify-center items-center flex-col space-y-4 bg-white p-6 rounded-lg">
                <div className="icon bg-primary-100 size-16 flex justify-center items-center rounded-full">
                  <FontAwesomeIcon icon={faBreadSlice} className="text-2xl text-primary-600" />
                </div>
                <p className="font-bold text-lg">Bakery & Snacks</p>
              </div>
              <div className="item w-full flex justify-center items-center flex-col space-y-4 bg-white p-6 rounded-lg">
                <div className="icon bg-primary-100 size-16 flex justify-center items-center rounded-full">
                  <FontAwesomeIcon icon={faDrumstickBite} className="text-2xl text-primary-600" />
                </div>
                <p className="font-bold text-lg">Meat & Seafood</p>
              </div>
            </div>

            <div className="help space-y-7 p-10 max-w-7xl flex flex-col items-center justify-center mx-auto bg-primary-100">
              <div>
                <h3 className="text-center text-3xl font-bold mb-6">Need Help?</h3>
                <p className="text-lg text-gray-600">
                  Our customer support team is here to assist you 24/7
                </p>
              </div>

              <ul className="flex gap-4 *:flex *:items-center *:gap-2">
                <li>
                  <FontAwesomeIcon icon={faPhone} className="text-primary-600 text-lg" />
                  <span>+045-311(9090)</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} className="text-primary-600 text-lg" />
                  <span>+045-311(9090)</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faComment} className="text-primary-600 text-lg" />
                  <span>+045-311(9090)</span>
                </li>{" "}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-primary-100 p-10 mt-20 flex flex-col items-center space-y-4">
          <h3 className="text-4xl font-bold">Subscribe to our Newsletter</h3>
          <p className="text-lg text-gray-600">
            Stay updated with our latest offers, recipes, and health tips.
          </p>
          <div className="w-2xl flex">
            <input
              type="email"
              placeholder="Your email address"
              className="form-control rounded-none bg-white w-full"
            />
            <button className="btn py-2 rounded-none rounded-e-lg border border-primary-600 bg-primary-600 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
