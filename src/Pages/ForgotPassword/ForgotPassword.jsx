import { faCircleQuestion, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faEnvelopeOpenText, faLock, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

export default function ForgotPassword() {
  return (
    <>
      <section>
        {/* top */}
        <div className="bg-gray-200 flex flex-col items-center justify-center p-10 space-y-5">
          <div className="box flex flex-col justify-center items-center space-y-10 shadow rounded-lg bg-white  p-10">
            <div className="icon bg-primary-200 rounded-full flex justify-center items-center size-16">
              <FontAwesomeIcon icon={faLock} className="text-primary-600 text-2xl" />
            </div>

            <div className="para text-center space-y-2 mt-5">
              <h3 className="text-2xl font-bold">Forgot your password?</h3>
              <p className="text-gray-700">
                No worries! Enter your email address and we'll <br /> send you a link to reset your
                password.
              </p>
            </div>

            <div className="flex flex-col w-full space-y-2 ">
              <label htmlFor="email" className="font-bold">
                Email Address
              </label>
              <div className="relative mb-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Your registered email address"
                  className="form-control w-full"
                />
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute top-3 right-3 text-gray-400 text-lg"
                />
              </div>
              <button className="btn py-3 bg-primary-600 text-white">Send Reset Link</button>
            </div>

            <p>
              Remember your password?{" "}
              <Link className="text-primary-600" to={"/login"}>
                Sigin in
              </Link>
            </p>
          </div>

          <div className="w-md">
            <div className="flex justify-center p-4  rounded-lg gap-4 shadow">
              <FontAwesomeIcon className="text-primary-600 text-xl" icon={faShieldHalved} />
              <div>
                <p className="font-bold">Security Notice</p>
                <span className="text-sm">
                  For your security, a password reset link will be sent to your registered email
                  address. The link will expire after 30 minutes.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div>
          <div className="container">
            <h3 className="text-center my-10 font-bold text-lg">Need additional help?</h3>
            <div className="flex justify-center mb-10 gap-5">
              <div className=" p-9 flex flex-col items-center bg-gray-50 border border-gray-300 rounded-lg">
                <div className="bg-primary-200 flex justify-center items-center text-primary-600 text-2xl size-16 rounded-full">
                  <FontAwesomeIcon icon={faHeadphones} />
                </div>
                <h2 className="font-bold my-4">Contact Support</h2>
                <p>
                  Our customer support team is <br /> available 24/7 to assist you.
                </p>
                <button className="text-primary-500 font-bold mt-5"> Contact Us </button>
              </div>
              <div className=" p-9 flex flex-col items-center bg-gray-50 border border-gray-300 rounded-lg">
                <div className="bg-primary-200 flex justify-center items-center text-primary-600 text-2xl size-16 rounded-full">
                  <FontAwesomeIcon icon={faCircleQuestion} />
                </div>
                <h2 className="font-bold my-4">Contact Support</h2>
                <p>
                  Our customer support team is <br /> available 24/7 to assist you.
                </p>
                <button className="text-primary-500 font-bold mt-5">Contact Us </button>
              </div>
              <div className=" p-9 flex flex-col items-center bg-gray-50 border border-gray-300 rounded-lg">
                <div className="bg-primary-200 flex justify-center items-center text-primary-600 text-2xl size-16 rounded-full">
                  <FontAwesomeIcon icon={faEnvelopeOpenText} />
                </div>
                <h2 className="font-bold my-4">Contact Support</h2>
                <p>
                  Our customer support team is <br /> available 24/7 to assist you.
                </p>
                <button className="text-primary-500 font-bold mt-5">Contact Us </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
