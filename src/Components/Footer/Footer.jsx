import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/freshcart-logo.svg";
import logoLg from "../../assets/mini-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
export default function Footer() {
  return (
    <>
      <footer className="p-5 bg-white border-t border-gray-400/30 ">
        <div className="container">
          <div className="grid lg:grid-cols-2 xl:grid-cols-5 py-8 gap-6">
            <div className="col-span-2">
              <img src={logo} alt="logo" />
              <p className="mt-4">
                FreshCart is a versatile e-commerce platform offering a wide range of products, from
                clothing to electronics. It provides a user-friendly experience for seamless
                shopping across diverse categories.
              </p>
              <ul className="flex gap-4 *:text-gray-500 *:hover:text-primary-600 transition-colors duration-200 text-lg">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faPinterestP} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="text-xl font-semibold">Categories</h2>
              <ul className="space-y-3 *:hover:text-primary-500 mt-4 *:transition-colors *:duration-200 ">
                <li>
                  <Link to={""}>Men's Fashion</Link>
                </li>
                <li>
                  <Link to={""}>Women's Fashion</Link>
                </li>
                <li>
                  <Link to={""}>Baby & Toys</Link>
                </li>
                <li>
                  <Link to={""}>Beauty & Health</Link>
                </li>
                <li>
                  <Link to={""}>Electronics</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="text-xl font-semibold">Quick Links</h2>
              <ul className="space-y-3 *:hover:text-primary-500 mt-4 *:transition-colors *:duration-200 ">
                <li>
                  <Link to={"/about"}>About Us</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact Us</Link>
                </li>
                <li>
                  <Link to={"privacy-policy"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to={"terms"}>Terms of Serves</Link>
                </li>
                <li>
                  <Link to={"shipping-policy"}>Shipping Policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="text-xl font-semibold">Cutomer Service</h2>
              <ul className="space-y-3 *:hover:text-primary-500 mt-4 *:transition-colors *:duration-200 ">
                <li>
                  <Link to={"/account"}>My Account</Link>
                </li>
                <li>
                  <Link to={"/orders"}>My Orders</Link>
                </li>
                <li>
                  <Link to={"/wishlist"}>Wishlist</Link>
                </li>
                <li>
                  <Link to={"returns-refunds"}>Returns & Refunds</Link>
                </li>
                <li>
                  <Link to={"help-center"}>Help Center</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between py-3 border-t border-gray-400/30">
            <p>&copy; {new Date().getFullYear()} FreshCart. All rights reserved.</p>
            <img src={logoLg} alt="logo" className="w-8" />
          </div>
        </div>
      </footer>
    </>
  );
}
