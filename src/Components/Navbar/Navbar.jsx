import {
  faAngleDown,
  faBabyCarriage,
  faBars,
  faBolt,
  faCartShopping,
  faEllipsis,
  faMagnifyingGlass,
  faPerson,
  faPersonDress,
  faPhone,
  faRightFromBracket,
  faSpinner,
  faSuitcaseMedical,
  faUserPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faEnvelope, faUser, faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router";
import logoImg from "../../assets/freshcart-logo.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import { CartContext } from "../../context/Cart.context";
import Loading from "../Loading/Loading";

export default function Navbar() {
  const { logOut, token } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  function toggele() {
    setIsOpen(!isOpen);
  }
  const { cartInfo, isLoading } = useContext(CartContext);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="container ">
        {/* Top-Nav */}
        <div className="hidden lg:flex text-sm  justify-between items-center py-2 border-b border-gray-300/40">
          <ul className="flex items-center gap-5 *:flex *:gap-2 *:items-center">
            <li>
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+1 (800) 123-4567">+1 (800) 123-4567</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:support@freshcart.com">support@freshcart.com</a>
            </li>
          </ul>

          <ul className="flex items-center  gap-5">
            <li>
              <NavLink to={`tarck order`}>Track Order</NavLink>
            </li>
            <li>
              <NavLink to={`about`}>About</NavLink>
            </li>
            <li>
              <NavLink to={`contact`}>Contact</NavLink>
            </li>
            <li>
              <select>
                <option>EGP</option>
                <option>SAR</option>
                <option>AED</option>
              </select>
            </li>
            <li>
              <select>
                <option value="ar">العربية</option>
                <option value="En">English</option>
              </select>
            </li>
          </ul>
        </div>

        {/* Main-Nav */}
        <nav className="flex justify-between items-center py-5">
          <h1>
            <NavLink to={`/`}>
              <img src={logoImg} alt="" className="" />
            </NavLink>
          </h1>

          <search className="relative hidden lg:block ">
            <input type="text" placeholder="Search for products" className="form-control w-96 " />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute right-2 top-1/2 -translate-1/2 "
            />
          </search>

          <ul className="hidden lg:flex gap-5">
            <li>
              <NavLink
                className={({ isActive }) => {
                  return `${
                    isActive ? "text-primary-600" : ""
                  } flex flex-col space-y-2 hover:text-primary-600 transition-colors duration-200`;
                }}
                to={`wishlist`}
              >
                <FontAwesomeIcon className="text-2xl" icon={faHeart} />
                <span className="text-sm">Wishlist</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return `${
                    isActive ? "text-primary-600" : ""
                  } flex flex-col space-y-1 hover:text-primary-600 transition-colors duration-200`;
                }}
                to={`cart`}
              >
                <div className="relative">
                  <FontAwesomeIcon className="text-2xl" icon={faCartShopping} />
                  <span className="absolute -top-1 -right-1 -translate-y-1 flex justify-center items-center size-5 bg-primary-600 text-white text-sm rounded-full">
                    {isLoading ? (
                      <FontAwesomeIcon icon={faSpinner} spin />
                    ) : (
                      cartInfo?.numOfCartItems
                    )}
                  </span>
                </div>
                <span className="text-sm">Cart</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return `${
                    isActive ? "text-primary-600" : ""
                  } flex flex-col space-y-2 hover:text-primary-600 transition-colors duration-200`;
                }}
                to={`account`}
              >
                <FontAwesomeIcon className="text-2xl" icon={faUser} />
                <span className="text-sm">Account</span>
              </NavLink>
            </li>

            {!token ? (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-primary-600" : ""
                      } flex flex-col space-y-2 hover:text-primary-600 transition-colors duration-200`;
                    }}
                    to={`signup`}
                  >
                    <FontAwesomeIcon className="text-2xl" icon={faUserPlus} />
                    <span className="text-sm">Sign up</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-primary-600" : ""
                      } flex flex-col space-y-2 hover:text-primary-600 transition-colors duration-200`;
                    }}
                    to={`login`}
                  >
                    <FontAwesomeIcon className="text-xl" icon={faAddressCard} />
                    <span className="text-sm">Login</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <li
                className="flex flex-col space-y-2  hover:text-primary-900 transition-colors duration-200 cursor-pointer"
                onClick={logOut}
              >
                <FontAwesomeIcon className="text-2xl" someIcon icon={faRightFromBracket} />
                <span className="text-sm">Logout</span>
              </li>
            )}
          </ul>
          {/* custom */}
          <button className="lg:hidden btn bg-primary-500 text-white" onClick={toggele}>
            {isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
        </nav>
      </div>
      {/* Category-Nav */}
      <nav className="hidden lg:block bg-gray-100 py-3">
        <div className="container flex items-center gap-9">
          <div className="relative group">
            <button className="btn flex gap-3 items-center bg-primary-500 hover:bg-primary-700 text-white">
              <FontAwesomeIcon icon={faBars} />
              <span>All Categories</span>
              <FontAwesomeIcon icon={faAngleDown} />
            </button>

            <menu className="hidden group-hover:block absolute top-10 bg-white shadow rounded-lg divide-y-2 divide-gray-300/20  *:py-3 *:px-3 *:hover:bg-gray-100 min-w-60">
              <li>
                <Link className="flex items-center gap-2">
                  <FontAwesomeIcon
                    className="text-2xl text-primary-500"
                    fixedWidth
                    icon={faPerson}
                  />
                  <span>Men's Fashion</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2">
                  <FontAwesomeIcon
                    className="text-2xl text-primary-500"
                    fixedWidth
                    icon={faPersonDress}
                  />
                  <span>Women's Fashion</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2">
                  <FontAwesomeIcon
                    className="text-2xl text-primary-500"
                    fixedWidth
                    icon={faBabyCarriage}
                  />
                  <span>Baby & toys</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2">
                  <FontAwesomeIcon
                    className="text-2xl text-primary-500"
                    fixedWidth
                    icon={faSuitcaseMedical}
                  />
                  <span>Beauty & Health</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2">
                  <FontAwesomeIcon className="text-2xl text-primary-500" fixedWidth icon={faBolt} />
                  <span>Electronics</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2">
                  <FontAwesomeIcon className="text-2xl text-primary-500" icon={faEllipsis} />
                  <span>View All Categories</span>
                </Link>
              </li>
            </menu>
          </div>

          <ul className="flex gap-5">
            <li>
              <NavLink to={`/`}>Home</NavLink>
            </li>
            <li>
              <NavLink to={`shop`}>Shop</NavLink>
            </li>
            <li>
              <NavLink to={`deals`}>Deals</NavLink>
            </li>
            <li>
              <NavLink to={`new-arrivals`}>New Arrivals</NavLink>
            </li>
            <li>
              <NavLink to={`brands`}>Brands</NavLink>
            </li>
            <li>
              <NavLink to={`recipes`}>Recipes</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* offCanvas-SideBar */}
      {isOpen && (
        <>
          <div
            className=" background bg-black/40 fixed inset-0 z-30 cursor-pointer"
            onClick={toggele}
          ></div>
          <div className=" offCanvas animate-slid-in space-y-7 fixed  z-40 top-0 bottom-0 p-5 bg-white">
            <div className="flex items-center justify-between border-b-1 border-gray-300/50 pb-5">
              <img src={logoImg} alt="" />
              <button className="btn">
                <FontAwesomeIcon icon={faXmark} className="text-2xl" onClick={toggele} />
              </button>
            </div>

            <search className="relative  ">
              <input type="text" placeholder="Search for products" className="form-control w-64 " />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-2 top-1/2 -translate-1/2 "
              />
            </search>

            <div>
              <h2 className="text-xl font-bold">Main Menu</h2>
              <ul className="*:hover:bg-gray-100 transition-colors duration-200 space-y-3 mt-3 ">
                <li>
                  <NavLink
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-primary-600 bg-primary-100 " : ""
                      } flex gap-2  space-y-2 hover:text-primary-600 transition-colors duration-200 py-3 px-2`;
                    }}
                    to={`wishlist`}
                  >
                    <FontAwesomeIcon className="text-xl" icon={faHeart} />
                    <span className="text-sm">Wishlist</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-primary-600 bg-primary-100 " : ""
                      } flex gap-2 space-y-2 hover:text-primary-600 transition-colors duration-200 py-3 px-2`;
                    }}
                    to={`cart`}
                  >
                    <div className="relative">
                      <FontAwesomeIcon className="text-xl" icon={faCartShopping} />
                      <span className="absolute top-0 right-0 -translate-y-1 flex justify-center items-center size-4 bg-primary-600 text-white text-sm rounded-full">
                        7
                      </span>
                    </div>
                    <span className="text-sm">Cart</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-primary-600 bg-primary-100 " : ""
                      } flex gap-2 space-y-2 hover:text-primary-600 transition-colors duration-200 py-3 px-2`;
                    }}
                    to={`account`}
                  >
                    <FontAwesomeIcon className="text-xl" icon={faUser} />
                    <span className="text-sm">Account</span>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-300/50 pt-5">
              <h2 className="text-xl  font-bold">Account</h2>

              <ul className="*:hover:bg-gray-100 transition-colors duration-200  space-y-3 mt-3 ">
                {!token ? (
                  <>
                    <li>
                      <NavLink
                        className={({ isActive }) => {
                          return `${
                            isActive ? "text-primary-600 bg-primary-100" : ""
                          } flex gap-2 space-y-2 hover:text-primary-600 transition-colors duration-200 py-3 px-2`;
                        }}
                        to={`signup`}
                      >
                        <FontAwesomeIcon className="text-xl" icon={faUserPlus} />
                        <span className="text-sm">Sign up</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) => {
                          return `${
                            isActive ? "text-primary-600 bg-primary-100" : ""
                          } flex gap-2 space-y-2 hover:text-primary-600 transition-colors duration-200 py-3 px-2`;
                        }}
                        to={`login`}
                      >
                        <FontAwesomeIcon className="text-xl" icon={faAddressCard} />
                        <span className="text-sm">Login</span>
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <li
                    className="flex gap-2 space-y-2   hover:text-primary-900 transition-colors duration-200 py-3 px-2 cursor-pointer"
                    onClick={logOut}
                  >
                    <FontAwesomeIcon className="text-xl" someIcon icon={faRightFromBracket} />
                    <span className="text-sm">Logout</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}
