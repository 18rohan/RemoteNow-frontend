import "../assets/tailwind.css";
import { Link } from "react-router-dom";

import React, { useState } from "react";

import JobseekerSignup from "../components/jobseekerSignup.component.js";
import JobseekerLoginComponent from "../components/JobseekerLogin.component.js";

const JobseekerLogin = ({ authorized }) => {
  const [signin, setSignIn] = useState("signin");

  // Toggle Signup and Signin Form
  const ToggleSignin = (event) => {
    event.preventDefault();
    setSignIn("signin");
  };
  const ToggleSignup = (event) => {
    event.preventDefault();
    setSignIn("signup");
  };

  return (
    <div className="grid grid-cols-1 md: grid-cols-1   ">
      <Link to="/">
        <div className="flex-shrink-0 flex  px-2  py-2 fixed">
          <p className="text-gray-800 font-bold font-sans mx-1 text-4xl leading-10">
            remote-now
          </p>
          <div className="text-gray-800 text-xl font-bold">
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
      <div className="w-full bg-white p-5  md:w-full h-screen overflow-hidden cols-span-1 flex flex-col justify-center items-center pt-32">
        <div className="w-1/3 flex flex-row justify-center ">
          {signin === "signin" ? (
            <button
              className="bg-blue-600 text-white  border border-gray-200  w-1/2   px-4 py-2 rounded-tl-lg focus:outline-none rounded-bl-lg hover:bg-blue-600 hover:text-white font-bold active:bg-green-700"
              onClick={ToggleSignin}
              type="button"
            >
              {" "}
              SignIn
            </button>
          ) : (
            <button
              className="bg-white text-gray-800  border border-gray-200  w-1/2   px-4 py-2 rounded-tl-lg focus:outline-none rounded-bl-lg hover:bg-blue-600 hover:text-white font-bold active:bg-green-700"
              onClick={ToggleSignin}
              type="button"
            >
              SignIn
            </button>
          )}

          {signin === "signup" ? (
            <button
              className="bg-blue-600 text-white  border border-gray-200  w-1/2   px-4 py-2 rounded-tr-lg focus:outline-none rounded-br-lg hover:bg-blue-600 hover:text-white font-bold active:bg-green-700"
              onClick={ToggleSignup}
              type="button"
            >
              {" "}
              SignUp
            </button>
          ) : (
            <button
              className="bg-white text-gray-800  border border-gray-200  w-1/2   px-4 py-2 rounded-tr-lg focus:outline-none rounded-br-lg hover:bg-blue-600 hover:text-white font-bold active:bg-green-700"
              onClick={ToggleSignup}
              type="button"
            >
              SignUp
            </button>
          )}
        </div>
        {signin === "signin" ? (
          <JobseekerLoginComponent />
        ) : (
          <JobseekerSignup />
        )}
      </div>
    </div>
  );
};

export default JobseekerLogin;
