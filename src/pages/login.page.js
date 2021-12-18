import "../assets/tailwind.css";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useFormik, form } from "formik";
import { useHistory } from "react-router-dom";
import * as AuthActions from "../redux/actions/recruiter.action";
// import axios from "axios";

import InputComponent from "../components/inputComponent";

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

const Login = ({ authorized }) => {
  const [signinErrors, setSigninErrors] = useState(null);
  const userData = useSelector((state) => state.user);
  const SigninErrors = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email_id: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      dispatch(
        AuthActions.login(formik.values.email_id, formik.values.password)
      );
    },
  });
  const history = useHistory();

  const handleLoginSubmit = (event) => {
    dispatch(AuthActions.login(formik.values.email_id, formik.values.password));
  };
  useEffect(() => {
    if (SigninErrors !== null) {
      setSigninErrors(SigninErrors);
    }
  }, [SigninErrors]);
  if (userData.is_authenticated) {
    history.push("/post-job");
  }
  return (
    <div className="grid grid-cols-1  ">
      <div className="dark:bg-gray-900 w-full bg-white    md:w-full h-screen  cols-span-1 flex flex-col ">
        <Link to="/">
          <div class="w-full  flex md:w-full justify-start items-start px-2 my-3 ">
            <p className="dark:text-gray-100 text-gray-800 font-bold font-sans mx-1 text-4xl leading-10">
              remote-now
            </p>
            <div className="text-gray-200 text-xl font-bold">
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

        <form>
          <div className="w-full flex flex-col md:w-full h-full justify-center items-center">
            <div className="md:w-1/2 flex flex-col justify-center items-center ">
              <div className="w-full mb-5 md:w-full flex justify-start mb-2">
                <div className=" w-full mt-4 md:w-full  flex flex-col justify-center items-center mb-4">
                  <p className="dark:text-gray-100 text-2xl md:text-3xl text-gray-800 ">
                    Lets log you in help you find the{" "}
                    <p className="dark:text-blue-500 text-2xl md:text-4xl text-blue-700 font-bold">
                      Right Talents!
                    </p>
                  </p>
                </div>
                {/* <p className="text-gray-800 font-bold text-2xl">
                Login with your email id!
              </p> */}
              </div>

              <InputComponent
                name="email_id"
                id="email_id"
                type="text"
                placeholder="john@doe.com"
                Label="Email Id"
                label_color="blue"
                size="half"
                onChange={formik.handleChange}
              />
              {!formik.touched.email_id && formik.errors.email_id ? (
                <div className="flex w-full justify-start items-start -mt-1">
                  <p className="text-red-500 font-medium ">
                    {formik.errors.email_id}
                  </p>
                </div>
              ) : null}
              <InputComponent
                name="password"
                id="password"
                type="password"
                placeholder="Enter password"
                Label="Password"
                label_color="blue"
                size="half"
                onChange={formik.handleChange}
              />
              {!formik.touched.password && formik.errors.password ? (
                <div className="flex justify-start items-start  w-full -mt-1">
                  <p className="text-red-500 font-medium text-left ">
                    {formik.errors.password}
                  </p>
                </div>
              ) : null}
            </div>
            <div class="w-full md:flex flex-col md:w-full  flex-col items-center justify-center mt-4">
              <button
                class="shadow text-white bg-blue-500 w-1/2 hover:bg-white hover:border hover:border-gray-500 hover:text-gray-800 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded-lg"
                type="button"
                onClick={handleLoginSubmit}
              >
                Sign In
              </button>

              <p className="text-md dark:text-gray-100 md:text-md font-light text-blue-800 ">
                Do not have an account?{" "}
                <Link to="/signup">
                  <span className="font-bold">Sign up here</span>
                </Link>
              </p>
              {signinErrors && (
                <div className="w-full flex justify-start mt-2">
                  <p className="font-medium text-red-500 text-left">
                    *{signinErrors}
                  </p>
                </div>
              )}
            </div>
            <div className="w-full flex flex-col justify-center mt-2 ">
              <p className="font-bold text-red-500 ">
                Email id: recruiter@default
              </p>
              <p className="font-bold text-red-500 ">password:user123456</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
