import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik, form } from "formik";

import InputComponent from "../components/inputComponent";
import * as AuthActions from "../redux/actions/jobseeker.actions.js";

const validate = (values) => {
  const errors = {};

  if (!values.email_id) {
    errors.email_id = "*Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email_id)
  ) {
    errors.email_id = "Invalid Email address";
  }

  if (!values.password) {
    errors.password = "*Required";
  }
  return errors;
};

const JobseekerLoginComponent = () => {
  const formik = useFormik({
    initialValues: {
      email_id: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const dispatch = useDispatch();
  const [signinErrors, setSigninErrors] = useState(null);
  const SigninErrors = useSelector((state) => state.user.error);
  const handleLoginSubmit = (event) => {
    dispatch(AuthActions.login(formik.values.email_id, formik.values.password));
  };

  useEffect(() => {
    if (SigninErrors !== null) {
      setSigninErrors(SigninErrors);
    }
  }, [SigninErrors]);
  return (
    <div className="w-full flex flex-col md:w-full  h-full justify-start items-center mt-2">
      <form
        className="w-full max-w-lg  rounded-lg p-5"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-row justify-right ">
          <p className="dark:text-gray-200 text-2xl mb-2 font-light text-gray-800 ">
            Sign In with the your email id.
          </p>
        </div>

        <div className="md:flex md:items-center w-full mb-2 overflow-scroll">
          <div className="md:w-full">
            <InputComponent
              name="email_id"
              id="email_id"
              type="text"
              value={formik.values.email_id}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="john@doe.com"
              Label="Email Id"
              label_color="blue"
              size="half"
            />
          </div>
        </div>
        {!formik.touched.email_id && formik.errors.email_id ? (
          <div className="flex justify-start items-start -mt-2">
            <p className="text-red-500 font-medium ">
              {formik.errors.email_id}
            </p>
          </div>
        ) : null}
        <div className="flex flex-col md: w-full mb-2">
          <div className="md:w-full">
            <InputComponent
              name="password"
              type="password"
              id="password"
              placeholder="*********"
              Label="Password"
              label_color="blue"
              size="half"
              onBlur={formik.handleBlur}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          {!formik.touched.password && formik.errors.password ? (
            <div className="flex justify-start items-start -mt-1">
              <p className="text-red-500 font-medium ">
                {formik.errors.password}
              </p>
            </div>
          ) : null}
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2"></div>
        </div>

        <div className="md:flex md:items-center flex-col justify-center">
          <button
            className="text-white bg-blue-600 w-full border border-blue-600 hover:bg-blue-500 border border-blue-500 hover:text-white focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded-lg"
            type="button"
            onClick={handleLoginSubmit}
          >
            Sign In
          </button>
          {signinErrors && (
            <div className="w-full flex justify-start mt-2">
              <p className="font-medium text-red-500 text-left">
                *{signinErrors}
              </p>
            </div>
          )}

          <div className=" dark:bg-gray-900  w-full bg-white md:w-full  my-16 flex flex-col justify-start items-center">
            <p className="text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-500 font-bold ">
              Lets connect you with the
              <span className="text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-500 font-bold">
                Recruiters, Worlwide!
              </span>
            </p>

            <p className="text-4xl">🌎</p>
          </div>
          <div className="w-full flex flex-col justify-center mt-2 ">
            <p className="font-bold text-red-400 ">
              Email id: jobseeker@default.com
            </p>
            <p className="font-bold text-red-400 ">password:user123456</p>
          </div>
        </div>
      </form>
    </div>
  );
};
export default JobseekerLoginComponent;
