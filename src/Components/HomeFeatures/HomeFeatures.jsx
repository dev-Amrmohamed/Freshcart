import { faRotateRight, faShieldHalved, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeFeatures() {
  return (
    <>
      <div className="container py-18">
        <ul className="flex justify-between *:flex *:gap-4">
          <li>
            <div className=" bg-primary-200 size-16 rounded-full text-3xl flex justify-center items-center">
              <FontAwesomeIcon icon={faTruckFast} className="text-primary-600" />
            </div>
            <div>
              <p className="font-bold text-xl">Free Delivery</p>
              <span className="text-gray-500 text-lg font-medium">Orders $50 or more</span>
            </div>
          </li>
          <li>
            <div className=" bg-primary-200 size-16 rounded-full text-3xl flex justify-center items-center">
              <FontAwesomeIcon icon={faRotateRight} className="text-primary-600" />
            </div>
            <div>
              <p className="font-bold text-xl">30 Days Return</p>
              <span className="text-gray-500 text-lg font-medium">OSatisfaction guaranteed</span>
            </div>
          </li>
          <li>
            <div className=" bg-primary-200 size-16 rounded-full text-3xl flex justify-center items-center">
              <FontAwesomeIcon icon={faShieldHalved} className="text-primary-600" />
            </div>
            <div>
              <p className="font-bold text-xl">Secure Payment</p>
              <span className="text-gray-500 text-lg font-medium">100% protected checkout</span>
            </div>
          </li>
          <li>
            <div className=" bg-primary-200 size-16 rounded-full text-3xl flex justify-center items-center">
              <FontAwesomeIcon icon={faShieldHalved} className="text-primary-600" />
            </div>
            <div>
              <p className="font-bold text-xl">24/7 Support</p>
              <span className="text-gray-500 text-lg font-medium">Ready to help any time</span>
            </div>
          </li>
        </ul>
      </div>
      ;
    </>
  );
}
