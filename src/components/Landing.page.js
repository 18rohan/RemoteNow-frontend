import "../assets/tailwind.css";
import { Link } from "react-router-dom";

import React from "react";

const Landing = () => {
  return (
    <div className="flex flex-col p-6">
      {/* Logo */}
      <div className="flex flex-col w-full justify-center items-center">
        <Link to="/">
          <div class="w-full  flex md:w-full justify-start items-start px-2 ">
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
              {/* <img src="/logo.svg" alt="jobs" className="w-6" /> */}
            </div>
          </div>
        </Link>
      </div>
      {/* Hero title Line */}
      <div className="w-full flex justify-center items-center">
        <div className="w-3/4  mt-8">
          <h1 className="font-extralight text-7xl text-blue-900 font-sans ">
            Join the world’s Remote Jobs community
          </h1>
        </div>
      </div>
      {/* Seconday title Line */}
      <div className="w-full flex w-full justify-center items-center">
        <div className="w-1/2 mt-6">
          <h1 className="text-2xl font-light">
            Experience the startup ecosystem — invest in startups, research the
            fastest-growing companies, and find a job you love!
          </h1>
        </div>
      </div>
      {/* Selection Button */}
      <div className="flex flex-row mt-12">
        {/* Button1 */}
        <div className="flex flex-col w-full justify-center items-center">
          {/* Icon & text */}
          <div className="w-3/5  flex flex-row justify-between mt-12">
            <div className="flex flex-col w-5/12 justify-center items-center bg-white border border-gray-200 p-4">
              <img
                src="./job-search.png"
                alt="Jobseeker"
                className="w-24 mb-4"
              />
              <h1 className="font-medium">
                Apply privately to 130,000+ tech & startup jobs with one
                application. See salary and equity upfront.
              </h1>

              <Link to="/jobseeker-login">
                <div className="text-white my-6 py-4 bg-blue-700 border-2 border-blue-700 hover:border-blue-500  hover:bg-blue-500 hover:text-white font-bold mx-5 px-7 min-w-md py-2 text-sm rounded-sm">
                  Find a remote job
                </div>
              </Link>
            </div>
            <div className="flex flex-col w-5/12 justify-center items-center bg-white border border-gray-200 p-4">
              <img src="./graph.png" alt="Jobseeker" className="w-24 mb-4" />
              <h1 className="font-medium">
                Over $1 billion deployed alongside leading venture fund managers
                with 36% of all top-tier U.S. VC deals funded on AngelList.
              </h1>
              <Link to="/login">
                <div className="text-white my-6 py-4 bg-blue-700 border-2 border-blue-700 hover:border-blue-500  hover:bg-blue-500 hover:text-white font-bold mx-5 px-7 min-w-md py-2 text-sm rounded-sm">
                  Hire New Talents
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* Button2 */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default Landing;
