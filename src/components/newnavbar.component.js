import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Toggle } from "../components/ToggleTheme.js";
import Cookie from "js-cookie";

const Nav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const userData = useSelector((state) => state.user);

  // console.log("USER DATA:::: ", userData.recruiter_name);

  const onLogout = () => {
    Cookie.remove("access_token");
    localStorage.clear();
    window.location.reload(false);
  };

  return (
    <div>
      <nav className="dark:bg-gray-900 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {Cookie.get("access_token") ? (
                  <Link to="/home">
                    <div className="flex-shrink-0 flex  px-2 ">
                      <p className="dark:text-white text-gray-800 font-bold font-sans text-2xl leading-10">
                        remote-now
                      </p>
                      <div className="text-gray-800 ">
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
                ) : (
                  <Link to="/">
                    <div className="flex-shrink-0 flex  px-2 ">
                      <p className="dark:text-white text-gray-800 font-bold font-sans text-2xl leading-10">
                        remote-now
                      </p>
                      <div className="text-gray-800 ">
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
                )}
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#dashboard"
                    className="dark:text-white hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium text-gray-800"
                  >
                    Dashboard
                  </a>

                  {/* <a
                    href="#team"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Team
                  </a> */}

                  {/* <a
                    href="#projects"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Projects
                  </a> */}

                  {/* <a
                    href="#Calendar"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Calendar
                  </a> */}

                  {/* <a
                    href="#Reports"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Reports
                  </a> */}
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-row">
              {Cookie.get("access_token") ? (
                <button
                  onClick={onLogout}
                  type="submit"
                  className="text-gray-100 mx-5  bg-red-500 font-bold mx-l-2 px-7 min-w-md py-2 text-sm rounded-md"
                >
                  Logout
                </button>
              ) : (
                <a href="#seekingjob">
                  <Link to="/jobseeker-login">
                    <div className="text-white  bg-blue-700 border-2 border-blue-700 hover:border-blue-500  hover:bg-blue-500 hover:text-white font-bold mx-5 px-7 min-w-md py-2 text-sm rounded-md">
                      Seeking Job
                    </div>
                  </Link>
                </a>
              )}
              {Cookie.get("access_token") ? (
                <Link
                  to={
                    userData.user_data.jobseeker_name
                      ? "/user-profile"
                      : "/post-job"
                  }
                >
                  <button className="text-gray-700 border  bg-white font-bold mx-l-2 px-7 min-w-md py-2 text-sm rounded-md">
                    {userData.user_data.recruiter_name ||
                      userData.user_data.jobseeker_name}
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="dark:bg-red-700 dark:text-white text-red-700  bg-white font-bold border-2 border-red-700 hover:bg-red-600 border-red-600 hover:text-white border-0 mx-l-2 px-7 min-w-md py-2  text-sm rounded-md">
                    Hire a talent
                  </button>
                </Link>
              )}
              <div className="ml-8">
                <Toggle />
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#dashboard"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#team"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="#projects"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#calendar"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#reports"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Nav;
