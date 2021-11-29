import React from "react";
import { useFormik, form } from "formik";

import { useDispatch } from "react-redux";
import * as AuthActions from "../redux/actions/jobseeker.actions";

const validate = (values) => {
  const errors = {};
  if (!values.signup_name) {
    errors.signup_name = "*Required";
  } else if (values.signup_name.length > 15) {
    errors.signup_name = "Must be 15 characters or less";
  }

  if (!values.signup_email) {
    errors.signup_email = "*Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.signup_email)
  ) {
    errors.signup_email = "*Invalid Email address";
  }

  if (!values.signup_password) {
    errors.signup_password = "*Required";
  } else if (values.signup_password.length < 5) {
    errors.signup_password = "Your password is weak";
  } else if (
    5 <= values.signup_password.length &&
    10 > values.signup_password.length
  ) {
    errors.signup_password = "Your password can be a bit more strong!";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "*Required";
  } else if (values.signup_password !== values.confirmPassword) {
    errors.confirmPassword = "Password doesn't match";
  }

  if (!values.city) {
    errors.city = "*Required";
  }

  if (!values.state) {
    errors.state = "*Required";
  }

  if (!values.zip_code) {
    errors.zip = "*Required";
  }
  return errors;
};

const JobseekerSignup = () => {
  const formik = useFormik({
    initialValues: {
      signup_name: "",
      signup_email: "",
      signup_password: "",
      confirmPassword: "",
      city: "",
      state: "",
      zip_code: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const dispatch = useDispatch();

  const handleSignupSubmit = (event) => {
    dispatch(
      AuthActions.signup(
        formik.values.signup_name,
        formik.values.signup_email,
        formik.values.signup_password,
        formik.values.city,
        formik.values.state,
        formik.values.zip_code
      )
    );
  };

  return (
    <div className="w-full flex flex-col md:w-full h-full justify-start items-center overflow-scroll">
      <form class="w-full max-w-lg mx-10">
        <p className="text-3xl mb-2 font-extralight text-left text-gray-800 my-8 mb-4 ">
          Register yourself.
        </p>
        <div class="flex flex-wrap -mx-3 mb-6">
          {/* Name */}
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="uppercase tracking-wide text-gray-700 text-sm md:flex w-full justify-start font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Name
            </label>

            <input
              class="appearance-none block w-full bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              type="text"
              id="signup_name"
              name="signup_name"
              value={formik.values.signup_name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Enter your name"
            />
            {formik.touched.signup_name && formik.errors.signup_name ? (
              <div className="flex justify-start items-start -mt-3">
                <p className="text-red-500 font-medium ">
                  {formik.errors.signup_name}
                </p>
              </div>
            ) : null}
          </div>

          {/* Email */}
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 md:flex w-full justify-start text-sm font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Email
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border-blue-500"
              onChange={formik.handleChange}
              value={formik.values.signup_email}
              id="signup_email"
              type="email"
              name="signup_email"
              onBlur={formik.handleBlur}
              placeholder="doe@email.com"
            />
            {formik.touched.signup_email && formik.errors.signup_email ? (
              <div className="flex justify-start items-start -mt-3 font-bold">
                <p className="text-red-500 font-medium ">
                  {formik.errors.signup_email}
                </p>
              </div>
            ) : null}
          </div>
        </div>

        {/* Password */}
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 md:flex w-full justify-start text-sm font-bold mb-2">
              Password
            </label>

            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="password"
              name="signup_password"
              id="signup_password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="******************"
            />
            {formik.touched.signup_password && formik.errors.signup_password ? (
              <div className="flex justify-start items-start -mt-3">
                <p className="text-red-500 font-medium ">
                  {formik.errors.signup_password}
                </p>
              </div>
            ) : null}
          </div>
        </div>

        {/* Confirm Password */}
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 md:flex w-full justify-start text-sm font-bold mb-2">
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
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="flex justify-start items-start -mt-3">
                <p className="text-red-500 font-medium ">
                  {formik.errors.confirmPassword}
                </p>
              </div>
            ) : null}
          </div>
        </div>

        {/* CITY  */}
        <div class="flex flex-wrap -mx-3 mb-2">
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
              // value={formik.initialValues.city}
              placeholder="Albuquerque"
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="flex justify-start items-start ">
                <p className="text-red-500 font-medium ">
                  {formik.errors.city}
                </p>
              </div>
            ) : null}
          </div>

          {/* State */}
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
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
                // value={formik.initialValues.state}
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
          </div>

          {/* ZIP Code */}
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
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
          </div>
        </div>

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
  );
};

export default JobseekerSignup;
