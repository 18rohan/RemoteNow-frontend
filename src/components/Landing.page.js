import "../assets/tailwind.css";
import { Link } from "react-router-dom";

import React from "react";
import { Toggle } from "./ToggleTheme.js";
// import { useDispatch, useSelector } from "react-redux";

const Landing = () => {
  return (
    <div
      className=" h-full md:h-screen
      dark:bg-gray-900  bg-white   flex flex-col  pt-4 pb-8 md:py-0"
    >
      {/* Logo */}
      <div className=" flex flex-col w-full justify-center items-center">
        <div className="flex flex-row justify-between items-center w-full px-6">
          <Link to="/">
            <div className="w-full  flex md:w-full justify-start items-start px-2 py-2 ">
              <p className="dark:text-white text-gray-800 font-bold font-sans  text-xl md:text-4xl mx-1 leading-10">
                remote-now
              </p>
              <div className="text-white text-xl font-bold">
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
                {/* <img src="/logo.svg" alt="jobs" className="w-6" /> */}
              </div>
            </div>
          </Link>
          <Toggle />
        </div>
      </div>
      {/* Hero title Line */}
      <div className="w-full flex justify-center items-center">
        <div className="w-3/4  mt-8">
          <h1 className="dark:text-transparent bg-clip-text bg-gradient-to-br from-pink-400 from-red-500 text-4xl text-blue-900  font-thin md:font-bold to-indigo-400 md:font-medium md:text-7xl  font-sans ">
            Join the world’s biggest Remote Jobs community
          </h1>
        </div>
      </div>
      {/* Seconday title Line */}
      <div className="w-full flex w-full justify-center items-center">
        <div className="w-11/12 md:w-1/2 mt-6">
          <h1 className="text-lg dark:text-white md:text-2xl font-light">
            Experience the startup ecosystem — invest in startups, research the
            fastest-growing companies, and find a job you love!
          </h1>
        </div>
      </div>
      {/* Selection Button */}
      <div className="flex ml-16 flex-row mt-20 ">
        {/* Button1 */}
        <div className="  sm:flex-col md:flex flex-row md:ml-24 w-full ">
          {/* Icon & text */}
          <div className=" w-full  md:flex flex-row justify-center self-center items-center mt-5">
            {" "}
            <div className="relative group w-full my-6 ">
              <div className=" absolute  animate-pulse bg-gradient-to-r from-indigo-700 to-pink-800  inset-2  right-20   w-1/2 rounded-full  filter blur-xl   mix-blend multiply backdrop-opacity-40"></div>
              {/* <div className="dark:bg-gradient-to-t from-indigo-700 to-pink-600 absolute inset-0    inset-2 rounded-full     w-1/2  filter blur-xl  mix-blend multiply backdrop-opacity-40"></div> */}
              <div className="relative z-30 dark:bg-gray-900 shadow-lg relative dark:border-gray-600 flex flex-col w-3/4 h-72 rounded-md justify-center items-center bg-white border border-gray-200 p-4">
                <img
                  src="./job-search.png"
                  alt="Jobseeker"
                  className="w-1/3 md:w-24 mb-4"
                />
                <h1 className="dark:text-gray-100 font-medium">
                  Apply privately to 130,000+ tech & startup jobs with one
                  application. See salary and equity upfront.
                </h1>

                <Link to="/jobseeker-login">
                  <div className="text-xs px-3 my-2 text-white my-2 md:my-3 md:py-4 bg-blue-700 border-2 border-blue-700 hover:border-blue-500  hover:bg-blue-500 hover:text-white font-bold md:mx-5 md:px-7 min-w-md py-2 md:text-sm rounded-sm">
                    Find a remote job
                  </div>
                </Link>
              </div>
            </div>
            <div className="relative group w-full ">
              <div className=" absolute animate-pulse bg-gradient-to-r from-pink-700 to-indigo-800       inset-2  right-20  md:ml-40   w-1/2 rounded-full  filter blur-xl   mix-blend multiply backdrop-opacity-40"></div>
              <div className="relative z-10 dark:bg-gray-900 shadow-lg dark:border-gray-600 flex flex-col w-3/4 h-72  justify-center items-center rounded-md bg-white border border-gray-200 p-4">
                <img
                  src="./graph.png"
                  alt="Jobseeker"
                  className="w-1/3 -mt-1 md:w-24 mb-4"
                />
                <h1 className="dark:text-gray-100 font-medium">
                  Over $1 billion deployed alongside leading venture fund
                  managers with 36% of all top-tier U.S. VC deals funded.
                </h1>
                <Link to="/login">
                  <div className="text-xs py-2 px-3 my-2 text-white md:my-3 md:py-4 bg-blue-700 border-2 border-blue-700 hover:border-blue-500  hover:bg-blue-500 hover:text-white font-bold mx-5 md:px-7 min-w-md py-2 md:text-sm rounded-sm">
                    Hire New Talents
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Button2 */}
      </div>
    </div>
  );
};

export default Landing;
