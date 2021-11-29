import React, { useState } from "react";
import "../assets/tailwind.css";

const NewLongCard = (jobs) => {
  const [expand, setExpand] = useState(false);
  const handleExpand = (expand) => {
    setExpand((prevState) => !prevState);
  };
  return (
    <div>
      {expand ? (
        <div>
          <button
            onClick={handleExpand}
            className="  w-full    flex flex-col justify-start items-start md:w-full flex flex-row mx-2 p-4    bg-white hover:shadow-2xl hover:  duration-300 hover:scale-100  rounded-lg m-3  border border-b-black  md:bg-opacity-50  overflow-hidden "
          >
            <div className="bg-white px-8">
              <div className="flex flex-row justify-between items-center">
                <h1 className="text-4xl font-extralight text-left mb-3 text-red-00">
                  Google is Hiring
                </h1>
                <img src="world-gradient.png" alt="logo" className="w-32" />
              </div>
              <h1 className="text-2xl font-bold text-left mb-6 capitalize">
                {jobs.jobs.position_title}
              </h1>
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-left font-bold my-2"> Required Skills</p>
              <ul className="text-left list-disc mb-6">
                <li>
                  8+ years experience as a Full-Stack Software Engineer,
                  experienced working in an Agile development environment
                </li>
                <li>
                  Experience leading a small dev team through the full
                  development life cycle, including requirements analysis,
                  architecture, design, coding, testing, and delivery of
                  solutions
                </li>
                <li>
                  Front-end development skills using modern JavaScript
                  frameworks, such as ReactJS/React Native, Angular/AngularJS,
                  or Vue
                </li>
                <li>
                  Backend development skills using server-side frameworks, such
                  as Django, Ruby on Rails, Flask, NodeJS/Express
                </li>
                <li>
                  Database skills (e.g., Elasticsearch, Postgres/PostGIS,
                  SQLite, MySQL, SQL Server, MongoDB, Redis, etc.)
                </li>
                <li>Cloud computing, especially using AWS services</li>
              </ul>
              <div className="flex flex-row justify-around">
                <div className="w-1/5 flex justify-center items-center tracking-wide text-md text-indigo-700 border-2 border-indigo-700 rounded-md px-2 py-2  font-semibold my-1">
                  <p className="text-sm">
                    Vacancies: {jobs.jobs.total_vacancy}
                  </p>
                </div>
                <div className="w-1/5 flex justify-center items-center tracking-wide text-md text-indigo-700 border-2 border-indigo-700  rounded-md px-2 py-2  font-semibold my-1">
                  <p className="text-sm">Industry: {jobs.jobs.industry_name}</p>
                </div>
                <div className="w-1/5 flex justify-center items-center tracking-wide text-md text-indigo-700  border-2 border-indigo-700 rounded-md px-2 py-2  font-semibold my-1">
                  <p className="text-sm">Category: {jobs.jobs.job_category}</p>
                </div>
                <div className="w-1/5 flex justify-center items-center tracking-wide text-md border-2 border-indigo-700 rounded-md px-2 py-2 text-indigo-700 font-semibold my-1">
                  <p className="text-sm">
                    Experience: {jobs.jobs.min_experience} -{" "}
                    {jobs.jobs.max_experience}yrs
                  </p>
                </div>
              </div>
              <div className="flex flex-row w-full justify-end my-4">
                <div className="w-1/2 my-4 -mr-16">
                  <button className="text-red-800 w-1/4  bg-white border-2 border-red-800 hover:border-red-800  hover:bg-red-800 hover:text-white font-bold mx-5 px-7 min-w-md py-2 text-sm rounded-md">
                    Save
                  </button>
                  <button className="text-white w-1/4  bg-blue-800 border-2 border-blue-800 hover:border-blue-500  hover:bg-blue-500 hover:text-white font-bold ml-5 px-7 min-w-md py-2 text-sm rounded-md">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </button>
        </div>
      ) : (
        <button
          onClick={handleExpand}
          className="  w-full   flex flex-row justify-start items-start md:w-full flex flex-row mx-2 p-4    bg-white hover:shadow-2xl hover:  duration-300 hover:scale-100  rounded-3xl m-3  border border-b-black  md:bg-opacity-50  overflow-hidden "
        >
          <div>
            <div className="w-full md:w-1/4 h-1/4 flex justify-start items-center  ">
              <img
                className=" w-full md:w-5/6 h-1/4  object-cover  "
                src={
                  jobs.jobs.company_logo
                    ? jobs.jobs.company_logo
                    : "world-gradient.png"
                }
                alt="brand logo"
              />
            </div>
            {/* <div className=" rounded-full h-12 w-16 mt-7 font-bold flex items-center justify-center bg-red-500 text-white text-xs">
              NEW
            </div> */}
            <div className="w-full flex justify-start md:flex flex-col justify-start items-start p-2">
              <div className="uppercase tracking-wide text-md text-gray-700 font-semibold">
                {jobs.jobs.position_title}
              </div>
              <div className=" tracking-wide text-md text-green-700 font-semibold my-1">
                {jobs.jobs.total_vacancy > 0 ? (
                  <p>Vacancies: {jobs.jobs.total_vacancy}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="tracking-wide text-md text-gray-700 font-semibold">
                {/*{jobs.locations_allowed[0]}*/}
              </div>
              {/* <div className="flex flex-row my-1">
        <div class="tracking-wide text-lg text-gray-400 mx-2 font-semibold">Product Design |</div>
        <div class="tracking-wide text-lg text-gray-400 font-semibold">2 years experience | </div>
        <div class="tracking-wide text-lg text-gray-400 font-semibold"> California</div>
        </div> */}
              <div className="flex flex-row w-full md:flex flex-row mb-1 mt-2">
                <div className=" bg-gray-900  rounded-lg text-white font-bold text-xs  mx-1 py-1  w-full md:w-20">
                  {jobs.jobs.timezone}
                </div>
                <div className=" bg-gray-900  rounded-lg text-white font-bold text-xs  mx-1 py-1  w-full md:w-20">
                  {jobs.jobs.industry_name}
                </div>
                <div className=" bg-gray-900  rounded-lg text-white font-bold text-xs  mx-1 py-1  w-full md:w-20">
                  {jobs.jobs.job_category}
                </div>
                <div className=" bg-gray-900  rounded-lg text-white font-bold text-xs  mx-1 py-1  w-full md:w-20">
                  {jobs.jobs.min_experience} - {jobs.jobs.max_experience}yrs
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full  h-full justify-center items-end ">
            <button className="text-white w-1/4 mt-4 bg-green-700 border-2 border-green-700 hover:border-green-500  hover:bg-green-500 hover:text-white font-bold mx-5 px-7 min-w-md py-2 text-sm rounded-md">
              Apply
            </button>
            <button className="text-white w-1/4  mt-4 bg-blue-700 border-2 border-blue-700 hover:border-blue-500  hover:bg-blue-500 hover:text-white font-bold mx-5 px-7 min-w-md py-2 text-sm rounded-md">
              Save
            </button>
          </div>
        </button>
      )}
    </div>
  );
};

export default NewLongCard;
