import "../assets/tailwind.css";
import { Link, Redirect } from "react-router-dom";

import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as AuthActions from "../redux/actions/recruiter.action";
// import axios from "axios";
import Cookie from "js-cookie";
import InputComponent from "../components/inputComponent";

const Login = ({ authorized }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const [isFormValid, setIsFormValid] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  if (!authorized) {
    return <Redirect to="/post-job" />;
  }

  // Handle Input Change
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    let currentError = false;
    if (!event.target.value.length > 0) {
      setError({ ...error, [event.target.name]: currentError });
    } else {
      setError({ ...error, [event.target.name]: !currentError });
    }
    let formIsValid = true;
    formIsValid = formIsValid && error.email_id && error.password;
    setIsFormValid(formIsValid);
  };
  const handleloginSubmit = () => {
    if (!isFormValid) {
      return;
    } else if (isFormValid) {
      dispatch(AuthActions.login(user.email_id, user.password));
    }
    if (Cookie.get("access_token")) {
      history.push("/profile");
    }
  };

  return (
    <div className="grid grid-cols-1  ">
      <div className="w-full bg-white    md:w-full h-screen  cols-span-1 flex flex-col ">
        <Link to="/">
          <div class="w-full  flex md:w-full justify-start items-start px-2 my-3 ">
            <p className="text-gray-800 font-bold font-sans mx-1 text-4xl leading-10">
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

        <div className="w-full flex flex-col md:w-full h-full justify-center items-center">
          <div className="md:w-1/2 flex flex-col justify-center items-center ">
            <div className="w-full mb-5 md:w-full flex justify-start mb-2">
              <div className=" w-full md:w-full  flex flex-col justify-center items-center mb-4">
                <p className="text-3xl text-gray-800 ">
                  Lets log you in help you find the{" "}
                  <p className="text-4xl text-blue-700 font-bold">
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
              type="text"
              placeholder="john@doe.com"
              Label="Email Id"
              label_color="black"
              size="half"
              onChange={handleChange}
            />
            <InputComponent
              name="password"
              type="password"
              placeholder="Enter password"
              Label="Password"
              label_color="black"
              size="half"
              onChange={handleChange}
            />
          </div>
          <div class="md:flex md:items-end w-1/2 flex-col justify-center mt-4">
            <button
              class="shadow text-white bg-blue-500 w-full hover:bg-white hover:border hover:border-gray-500 hover:text-gray-800 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded-lg"
              type="button"
              onClick={handleloginSubmit}
            >
              Sign In
            </button>

            <p className="text-md font-light text-blue-800 ">
              Do not have an account?{" "}
              <Link to="/signup">
                <span className="font-bold">Sign up here</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
