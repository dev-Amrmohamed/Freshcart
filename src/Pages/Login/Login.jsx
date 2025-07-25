import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEye,
  faEyeSlash,
  faLock,
  faStar,
  faTruckFast,
  faUsers,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import loginImg from "../../assets/login.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { data, Link, useLocation, useNavigate } from "react-router";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { API_CONFUG } from "../../config";
import { sendDataToLogIn } from "../../services/api-services";
import { AuthContext } from "../../context/auth.context";
export default function Login() {
  const location = useLocation();
  const from = location?.state?.from || "/";

  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [inCorrectCredentaitsMsg, setInCorrectCredentaitsMsg] = useState(null);
  const [isShownPassword, setIsShownPassword] = useState(false);
  function toggelPassword() {
    setIsShownPassword(!isShownPassword);
  }
  const myRegex = {
    email: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
  };
  const validationSchema = yup.object({
    email: yup.string().required("email is required").matches(myRegex.email, "email is invalid"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        myRegex.password,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
  });

  async function handleLogin(values) {
    try {
      const response = await sendDataToLogIn(values);
      console.log(response.data.data.token);
      if (response.success) {
        toast.success("You logedin successfully");
        setToken(response.data.data.token);
        if (values.rememberMe) {
          localStorage.setItem("token", response.data.data.token);
        } else {
          sessionStorage.setItem("token", response.data.data.token);
        }

        setTimeout(() => {}, 3000);
        navigate(from);
      }
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
      setInCorrectCredentaitsMsg(error.message);
    }
  }

  function handleChange(e) {
    setInCorrectCredentaitsMsg(" ");
    formik.handleChange(e);
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <>
      <main className="py-12  bg-gray-100">
        <div className="container grid lg:gap-10 lg:grid-cols-2">
          {/* left */}
          <div className="space-y-12 flex flex-col justify-center items-center">
            <img src={loginImg} className="rounded-2xl  shadow-2xl" alt="" />

            <div className="body text-center space-y-5">
              <h2 className="text-4xl font-bold">Fresh Groceries Delivered</h2>

              <p className="text-lg">
                Join thousands of happy customers who trust FreshCart for their daily grocery needs
              </p>

              <ul className="flex items-center justify-center gap-8 *:flex *:items-center *:justify-center *:gap-3">
                <li>
                  <div className="icon text-xl bg-primary-200 size-12 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faTruckFast} className=" text-primary-600" />
                  </div>
                  <span className="text-md text-gray-600/80">Free Delivery</span>
                </li>
                <li>
                  <div className="icon text-xl bg-primary-200 size-12 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faUserSecret} className=" text-primary-600" />
                  </div>
                  <span className="text-md text-gray-600/80">Secure Payment</span>
                </li>
                <li>
                  <div className="icon text-xl bg-primary-200 size-12 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faClock} className=" text-primary-600" />
                  </div>
                  <span className="text-md text-gray-600/80">24/7 Support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* right */}
          <div className="flex space-y-7 flex-col bg-white rounded-xl shadow-lg p-7">
            <div className="text-center space-y-2">
              <h3 className="font-bold text-4xl">
                <span className="text-primary-600">Fresh </span> Cart
              </h3>
              <h4 className="font-bold text-3xl">
                Welcome <span className="text-primary-600">Back </span>
              </h4>
              <p className="text-md text-gray-600 ">
                Sign in to continue your fresh shopping experience
              </p>
            </div>

            <div className="flex flex-col gap-3 *:w-full *:hover:bg-gray-100">
              <button className="btn bg-transparent border-1 border-gray-300 flex gap-4 justify-center items-center text-black">
                <FontAwesomeIcon icon={faGoogle} className=" text-red-500" />
                Google
              </button>
              <button className="btn bg-white border-1 border-gray-300 flex gap-4 justify-center items-center text-black">
                <FontAwesomeIcon icon={faFacebook} className=" text-blue-500" />
                Facebook
              </button>
            </div>

            <div className="relative w-full h-0.5 bg-gray-300/40 ">
              <span className="absolute bg-white px-4 right-10 top-1/2 -translate-1/2">
                OR CONTINUE WITH EMAIL
              </span>
            </div>

            <form action="#" className="space-y-6" onSubmit={formik.handleSubmit}>
              <div className="*:flex *:justify-center *:flex-col *:w-full space-y-6 ">
                <div className="email space-y-2">
                  <label htmlFor="email">Email Address</label>
                  <div className="relative">
                    {" "}
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className="form-control px-12 w-full "
                      value={formik.values.email}
                      onChange={handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="absolute top-1/2 left-6 -translate-x-1/2 -translate-y-1/2 text-gray-400 "
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-600 ">{formik.errors.email}</p>
                  )}
                </div>

                <div className="password space-y-2">
                  <div className="flex justify-between items-center">
                    <label htmlFor="password">Password</label>
                    <Link
                      to={`/forgotPassword`}
                      className="text-primary-500 font-medium hover:text-primary-600"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      type={isShownPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Create a strong password"
                      className="form-control w-full px-12"
                      value={formik.values.password}
                      onChange={handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <FontAwesomeIcon
                      icon={faLock}
                      className="absolute top-1/2 left-4 -translate-y-1/2  text-gray-400"
                    />
                    <FontAwesomeIcon
                      icon={isShownPassword ? faEyeSlash : faEye}
                      className="absolute top-1/2 right-6 -translate-x-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                      onClick={toggelPassword}
                    />
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                    <p className="text-red-600 ">{formik.errors.password}</p>
                  ) : (
                    ""
                  )}

                  {inCorrectCredentaitsMsg && (
                    <p className="text-red-600">{inCorrectCredentaitsMsg}</p>
                  )}
                </div>
              </div>

              <div className="rememberMe space-x-3 gap-3 space-y-6">
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  className="transform scale-150"
                  checked={formik.values.rememberMe}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <label htmlFor="rememberMe">Keep me signed in</label>
              </div>

              <button
                type="submit"
                className="btn px-3 py-4 bg-primary-600 text-white w-full hover:bg-primary-500 "
              >
                Sign In
              </button>
            </form>

            <div className="p-7 border-t-1 space-y-5 border-gray-500/20">
              <p className="text-center text-lg">
                New to FreshCart?{" "}
                <Link to={`/signup`} className="text-primary-500 font-semibold underline">
                  Create an account
                </Link>
              </p>

              <ul className="flex justify-center gap-5 *:flex *:items-center *:gap-2 *:text-gray-500">
                <li>
                  <FontAwesomeIcon icon={faLock} />
                  <span>SSL Secured</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faUsers} />
                  <span>50K+ Users</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faStar} />
                  <span>4.9 Rating</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
