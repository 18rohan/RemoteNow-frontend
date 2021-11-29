import "../assets/tailwind.css";
import { Link, useHistory } from "react-router-dom";
const Searchbar = () => {
  return (
    <div className="w-1/2 h-full md:w-full mt-7 py-24 px-20 flex flex-col justify-center my-8 items-start bg-gradient-to-r from-blue-200">
      <p className="text-gray-800 font-semibold max-w-full text-md md:text-3xl mx-8">
        Seeking new job oppurtunities?
      </p>
      <p className="text-gray-800 font-semibold max-w-full text-md md:text-sm mx-8">
        Browse thousands of job oppurtunities from startups to leading companies
      </p>
      <div className="z-10 w-full md:w-8xl md: h-14 my-2  rounded-xl grid grid-cols-3 md:grid-cols-3 bg-white shadow-lg overflow-hidden ">
        <button className="bg-indigo-600 text-white  font-bold  flex flex-col justify-center items-center">
          Search
        </button>
        <div className="  cols-span-1 flex flex-col justify-center border-l  border-gray-200 text-gray-700 font-bold">
          <input
            type="text"
            placeholder="Enter Job type.."
            className="h-full w-full bg-gray-100 pl-1  font-semibold focus:outline-none focus:bg-white focus:border-blue-500"
          />
        </div>
        <div className="hidden md:flex flex-col text-gray-700 font-bold justify-center bg-gray-100  ">
          <input
            type="text"
            placeholder="Enter city name.."
            className="h-full w-full bg-gray-100 pl-1  font-semibold  focus:outline-none focus:bg-white focus:border-blue-500"
          />
        </div>

        {/*<div className=" hidden md:flex flex-col justify-center border-l  border-gray-200 text-red-900 font-bold">
        <input type="text" placeholder="Enter salary expectation.." className="h-full w-full bg-gray-100 font-semibold pl-1 focus:outline-none focus:bg-white focus:border-blue-500"/>
        </div>*/}
      </div>

      <div className="-z-10 flex flex-row justify-between items-center w-full -mt-32 -mb-48[] absoulute   ">
        <div className="flex flex-col justify-end">
          <h1 className="font-light text-3xl text-gray-800">
            Find your next dream job, here!
          </h1>
          {/* <img src="./mail.png" alt="background" className="w-16  " /> */}
          <a href="#seekingjob">
            <Link to="/jobseeker-login">
              <div className="animate-pulse ml-52 -mt-2 text-blue-700 text-xl w-64 mt-4 absolute bg-transparent   hover:text-indigo-900 font-bold mx-5 px-7 min-w-md py-2 text-sm rounded-md">
                Find a job &#187;
              </div>
            </Link>
          </a>
        </div>
        <img
          src="./bg2.png"
          alt="background"
          className="opacity-50 animate-pulse"
        />
        {/* <div className="bg-purple-400 absoulute top-0 -right-4 w-72 h-52 rounded- filter blur-md mix-blend multiply backgdrop-opacity-20"></div>
        <div className="bg-indigo-500 absoulute -mx-24 top-0 -right-4 w-52 h-72 rounded-50 filter blur-md backdrop-opacity-40"></div>
        <div className="bg-blue-700 absoulute -mx-64 my-24 w-72 h-72 rounded-50 filter blur-md opacity-25"></div> */}
      </div>
    </div>
  );
};

export default Searchbar;
