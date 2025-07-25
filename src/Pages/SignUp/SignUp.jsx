import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import reviewImg from "../../assets/review-author.png";
import {
  faLeaf,
  faShieldHalved,
  faStar,
  faTruckFast,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { sendDataToSignUp } from "../../services/api-services";
import { passStrenght } from "../../utils/validation";
export default function SignUp() {
  const navigate = useNavigate();
  const [isExistError, setIsExistError] = useState(null);

  const myRegex = {
    name: /^[a-zA-Z ]{3,30}$/,
    lastName: /^[a-zA-Z ]{3,30}$/,
    email: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  };
  const validationSchema = yup.object({
    name: yup.string().required("name is required").matches(myRegex.name, "name is invalid"),
    lastName: yup.string(),
    email: yup.string().required("email is required").matches(myRegex.email, "email is invalid"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        myRegex.password,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
    rePassword: yup
      .string()
      .required("confirm password")
      .oneOf([yup.ref("password")], "password must be same"),

    phone: yup
      .string()
      .required("phone number is required")
      .matches(myRegex.phone, "egyprion phone number only"),

    terms: yup.boolean().required("cheak").oneOf([true], "you must agree to our terms"),
  });

  async function handleSignup(values) {
    try {
      const response = await sendDataToSignUp(values);
      if (response.message === "success") {
        toast.success("you signUp Successfully");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      console.log(error.response.data.message);
      setIsExistError(error.response.data.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },
    validationSchema: validationSchema,
    onSubmit: handleSignup,
  });
  const feedbackFunction = passStrenght(formik.values.password);

  return (
    <>
      <main className="py-12  bg-gray-100">
        <div className="container grid lg:gap-10 lg:grid-cols-2">
          {/* left */}
          <div className="space-y-12 flex flex-col justify-center">
            <div className="heading space-y-5">
              <h2 className="text-4xl font-bold">
                Welcome to <span className="text-primary-500">FreshCart</span>
              </h2>

              <p className="text-lg">
                Join thousands of happy customers who enjoy fresh groceries delivered right to their
                doorstep.
              </p>
            </div>

            <ul className="space-y-8 *:flex *:gap-5 *:items-center">
              <li>
                <div className="icon text-2xl bg-primary-200 size-14 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faLeaf} className=" text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Fresh & Organic</h3>
                  <p className="text-lg">Premium quality products sourced directly from farms</p>
                </div>
              </li>
              <li>
                <div className="icon text-2xl bg-primary-200 size-14 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faTruckFast} className=" text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Fast Delivery</h3>
                  <p className="text-lg">Same-day delivery available in most areas</p>
                </div>
              </li>
              <li>
                <div className="icon text-2xl bg-primary-200 size-14 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faShieldHalved} className=" text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Secure Shopping</h3>
                  <p className="text-lg">Your data and payments are completely secure</p>
                </div>
              </li>
            </ul>
            <div className="review space-y-5 p-7 border-1 rounded-lg border-primary-400 bg-white">
              <div className="flex gap-5 items-center">
                {" "}
                <div className="size-16">
                  <img src={reviewImg} alt="" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Sarah Johnson</h3>
                  <ul className="*:inline-flex *:text-amber-300">
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                  </ul>
                </div>
              </div>

              <blockquote>
                <p className="text-md">
                  "FreshCart has completely changed how I shop for groceries. The quality is amazing
                  and delivery is always on time!"
                </p>
              </blockquote>
            </div>
          </div>
          {/* right */}
          <div className="flex space-y-7 flex-col bg-white rounded-xl shadow-lg p-7">
            <div className="text-center space-y-2">
              <h3 className="font-bold text-3xl">Create Your Account</h3>
              <p className="text-md text-gray-600 ">Start your fresh journey with us today</p>
            </div>

            <div className="flex gap-3 w-full *:hover:bg-gray-100">
              <button className="btn bg-transparent border-1 border-gray-300 w-1/2 flex gap-4 justify-center items-center text-black">
                <FontAwesomeIcon icon={faGoogle} className=" text-red-500" />
                Google
              </button>
              <button className="btn bg-white border-1 border-gray-300 w-1/2 flex gap-4 justify-center items-center text-black">
                <FontAwesomeIcon icon={faFacebook} className=" text-blue-500" />
                Facebook
              </button>
            </div>

            <div className="relative w-full h-0.5 bg-gray-300/40 ">
              <span className="absolute bg-white px-4 right-53 top-1/2 -translate-1/2">OR</span>
            </div>

            <form action="#" className="space-y-6" onSubmit={formik.handleSubmit}>
              <div className="flex gap-3 *:flex *:justify-center *:flex-col *:w-full ">
                <div className="name *:w-full ">
                  <label htmlFor="name">First Name *</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Jhon"
                    className="form-control"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-600 ">{formik.errors.name}</p>
                  )}
                </div>
                <div className="lastName *:w-full">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Doe"
                    className="form-control"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <p className="text-red-600 ">{formik.errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="*:flex *:justify-center *:flex-col *:w-full space-y-6 ">
                <div className="email">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="jhon.wick@example.com"
                    className="form-control"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-600 ">{formik.errors.email}</p>
                  )}

                  {isExistError && <p className="text-red-600 ">* {isExistError}</p>}
                </div>

                <div className="phone">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    className="form-control"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-600 ">{formik.errors.phone}</p>
                  )}
                </div>

                <div className="password">
                  <label htmlFor="password">Password *</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Create a strong password"
                    className="form-control "
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.values.password && (
                    <div className="password-Strength flex items-center gap-3 mt-1.5">
                      <div className="bar w-full h-1 rounded-3xl bg-gray-300">
                        <div
                          className={`progress h-full ${feedbackFunction.background} ${feedbackFunction.width}`}
                        ></div>
                      </div>
                      <span className="text-nowrap text-center w-28">{feedbackFunction.text}</span>
                    </div>
                  )}
                  {formik.touched.password && formik.errors.password ? (
                    <p className="text-red-600 ">{formik.errors.password}</p>
                  ) : (
                    <p className="text-sm text-gray-500 -mt-1">
                      Must be at least 8 characters with numbers and symbols
                    </p>
                  )}
                </div>

                <div className="rePassword">
                  <label htmlFor="rePassword">Confirm Password *</label>
                  <input
                    type="password"
                    id="rePassword"
                    name="rePassword"
                    placeholder="Confirm your password"
                    className="form-control"
                    value={formik.values.rePassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.rePassword && formik.errors.rePassword && (
                    <p className="text-red-600 ">{formik.errors.rePassword}</p>
                  )}
                </div>
              </div>

              <div className="trems space-x-3 gap-3 space-y-6">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  className="transform scale-150"
                  checked={formik.values.terms}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <label htmlFor="terms">
                  I agree to the{" "}
                  <Link to={`/terms`} className="text-primary-500 underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to={`/privay`} className="text-primary-500 underline">
                    Privacy Policy
                  </Link>
                  *
                </label>
                {formik.touched.terms && formik.errors.terms && (
                  <p className="text-red-600 ">{formik.errors.terms}</p>
                )}
              </div>

              <button
                type="submit"
                className="btn px-3 py-4 bg-primary-600 text-white w-full hover:bg-primary-500 "
              >
                <FontAwesomeIcon icon={faUserPlus} />
                Create My Account
              </button>
            </form>

            <div className="p-7 border-t-1 border-gray-500/20">
              <p className="text-center">
                Alrady have an account?{" "}
                <Link to={`/login`} className="text-primary-500 font-semibold underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
