import "../assets/tailwind.css";
import { Link } from "react-router-dom";

import { useFormik, form } from "formik";

import { useDispatch } from "react-redux";

// importing component

// Importing ACTIONS
import * as AuthActions from "../redux/actions/recruiter.action";

const validate = (values) => {
  const errors = {};
  if (!values.recruiter_name) {
    errors.recruiter_name = "*Required";
  } else if (values.recruiter_name.length > 15) {
    errors.recruiter_name = "Must be 15 characters or less";
  }

  if (!values.email_id) {
    errors.email_id = "*Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email_id)
  ) {
    errors.email_id = "*Invalid Email address";
  }

  if (!values.password) {
    errors.password = "*Required";
  } else if (values.password.length < 5) {
    errors.password = "Your password is weak";
  } else if (5 <= values.password.length && 10 > values.password.length) {
    errors.password = "Your password can be a bit more strong!";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "*Required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password doesn't match";
  }

  // if (!values.city) {
  //   errors.city = "*Required";
  // }
  //
  // if (!values.state) {
  //   errors.state = "*Required";
  // }
  //
  // if (!values.zip_code) {
  //   errors.zip = "*Required";
  // }
  return errors;
};

const Signup = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      recruiter_name: "",
      email_id: "",
      password: "",
      confirmPassword: "",
      // city: "",
      // state: "",
      // zip_code: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleSignupSubmit = (event) => {
    dispatch(
      AuthActions.signup(
        formik.values.email_id,
        formik.values.password,
        formik.values.recruiter_name
        // formik.values.city,
        // formik.values.state,
        // formik.values.zip_code
      )
    );
  };

  return (
    <div>
      <Link to="/">
        <div class="w-full   flex md:w-full justify-start items-start px-2 ">
          <p className="dark:text-gray-100 text-gray-800 font-bold font-sans mx-1 text-4xl leading-10">
            remote-now
          </p>
          <div className=" text-gray-200 text-xl font-bold">
            <svg
              id="logo-35"
              width="50"
              height="39"
              viewBox="0 0 50 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                class="ccompli1"
                fill="#007AFF"
              ></path>{" "}
              <path
                d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                class="ccustom"
                fill="#312ECB"
              ></path>{" "}
            </svg>
          </div>
        </div>
      </Link>
      <div className="w-full h-screen flex  justify-center items-center">
        <form class="w-full max-w-lg mx-10">
          <div className=" w-full md:w-full flex flex-col justify-center items-center mb-16">
            <p className="text-2xl md:text-3xl font-light dark:text-gray-100 text-gray-800 ">
              Register yourself to connect with the{" "}
              <p className="text-4xl text-blue-700 font-medium">
                Industry's best talents!
              </p>
            </p>
          </div>
          {/* <p className="text-3xl mb-2 font-extralight text-left text-gray-800 my-8 mb-4 ">
            Register yourself.
          </p> */}
          <div class="flex flex-wrap -mx-3 mb-6">
            {/* Name */}
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="uppercase tracking-wide dark:text-gray-100 text-gray-700 text-sm md:flex w-full justify-start font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Organisation's Name
              </label>

              <input
                class="appearance-none block w-full bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                type="text"
                id="recruiter_name"
                name="recruiter_name"
                value={formik.values.recruiter_name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Enter Organisation's name"
              />
              {formik.touched.recruiter_name && formik.errors.recruiter_name ? (
                <div className="flex justify-start items-start -mt-3">
                  <p className="text-red-500 font-medium ">
                    {formik.errors.recruiter_name}
                  </p>
                </div>
              ) : null}
            </div>

            {/* Email */}
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide dark:text-gray-100 text-gray-700 md:flex w-full justify-start text-sm font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Email id
              </label>
              <input
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border-blue-500"
                onChange={formik.handleChange}
                value={formik.values.email_id}
                id="email_id"
                type="email"
                name="email_id"
                onBlur={formik.handleBlur}
                placeholder="doe@email.com"
              />
              {formik.touched.email_id && formik.errors.email_id ? (
                <div className="flex justify-start items-start -mt-3 font-bold">
                  <p className="text-red-500 font-medium ">
                    {formik.errors.email_id}
                  </p>
                </div>
              ) : null}
            </div>
          </div>

          {/* Password */}
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide dark:text-gray-100 text-gray-700 md:flex w-full justify-start text-sm font-bold mb-2">
                Password
              </label>

              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="password"
                name="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="******************"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="flex justify-start items-start -mt-3">
                  <p className="text-red-500 font-medium ">
                    {formik.errors.password}
                  </p>
                </div>
              ) : null}
            </div>
          </div>

          {/* Confirm Password */}
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide dark:text-gray-100 text-gray-700 md:flex w-full justify-start text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formik.values.confirmPassword}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="******************"
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="flex justify-start items-start -mt-3">
                  <p className="text-red-500 font-medium ">
                    {formik.errors.confirmPassword}
                  </p>
                </div>
              ) : null}
            </div>
          </div>

          {/* CITY  */}
          {/* <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 md:flex w-full justify-start text-sm font-bold mb-2"
              htmlFor="grid-city"
            >
              City
            </label>

            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="city"
              id="city"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.initialValues.city}
              placeholder="Albuquerque"
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="flex justify-start items-start ">
                <p className="text-red-500 font-medium ">
                  {formik.errors.city}
                </p>
              </div>
            ) : null}
          </div> */}

          {/* State */}
          {/* <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 md:flex w-full justify-start text-sm font-bold mb-2"
              htmlFor="grid-state"
            >
              State
            </label>
            <div class="relative">
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="state"
                type="text"
                onBlur={formik.handleBlur}
                id="state"
                value={formik.initialValues.state}
                onChange={formik.handleChange}
                placeholder="State"
              />
              {formik.touched.state && formik.errors.state ? (
                <div className="flex justify-start items-start ">
                  <p className="text-red-500 font-medium ">
                    {formik.errors.state}
                  </p>
                </div>
              ) : null}
            </div>
          </div> */}

          {/* ZIP Code */}
          {/* <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 md:flex w-full justify-start text-sm font-bold mb-2"
              htmlFor="grid-zip"
            >
              Zip
            </label>

            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="zip_code"
              id="zip_code"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.zip}
              placeholder="90210"
            />
            {formik.touched.zip_code && formik.errors.zip_code ? (
              <div className="flex justify-start items-start ">
                <p className="text-red-500 font-medium ">
                  {formik.errors.zip_code}
                </p>
              </div>
            ) : null}
          </div> */}
          {/* </div> */}

          {/* Submit Button */}
          <div class="md:flex md:items-center flex-col justify-center">
            <button
              class="shadow text-white bg-blue-600 w-full hover:bg-blue-500 hover:border mt-8   focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded-lg"
              type="button"
              onClick={handleSignupSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
