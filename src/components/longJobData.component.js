import React, { useState } from "react";
import "../assets/tailwind.css";

const LongCard = (jobs) => {
  return (
    <div>
      <div className="  w-full    flex flex-row justify-start items-start md:w-full flex flex-row mx-2 p-4    bg-white hover:shadow-2xl hover:  duration-300 hover:scale-100  rounded-lg m-3  border border-b-black  md:bg-opacity-50  overflow-hidden ">
        <div className="w-full md:w-1/4 h-1/4 flex justify-start items-center  ">
          <img
            className=" w-full md:w-1/2 h-1/4  object-cover  "
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
            Vacancies: {jobs.jobs.total_vacancy}
          </div>
          <div className="tracking-wide text-md text-gray-700 font-semibold">
            {/*{jobs.locations_allowed[0]}*/}
          </div>

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
    </div>
  );
};

export default LongCard;
