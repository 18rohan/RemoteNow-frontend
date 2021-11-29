import React, { useState } from "react";

const Experience = () => {
  return (
    <div className="w-full bg-white border border-gray-200 shadow-md rounded-md  my-6">
      {/* Basic information Grid */}
      <h1 className="font-bold text-black text-left mx-4 my-2 text-lg">
        Basic Information
      </h1>
      <div className="flex flex-col">
        <div className="w-full">
          <ul>
            <div className="flex flex-row justify-start items-start m-3 p-4 border-b-2 border-gray-300">
              <div className="flex flex-col p-2 justify-center items-center">
                <img src="cbsd.svg" alt="company logo" className="w-32 -my-4" />
              </div>
              <div className="flex flex-col justify-start items-start mx-8">
                <p className="font-bold text-blue-600 text-left">CBSD</p>
                <p className="font-medium text-gray-600 text-left">
                  UI/UX Developer
                </p>
                <p className="font-medium text-gray-600 text-left">
                  Apr'20 - Oct'21
                </p>
              </div>
            </div>
          </ul>
          <ul>
            <div className="flex flex-row justify-start items-start m-3 p-4 border-b-2 border-gray-300">
              <div className="flex flex-col w-1/6 h-full p-2 justify-end items-center">
                <img src="un.svg" alt="company logo" className="w-32 -my-4" />
              </div>
              <div className="flex flex-col justify-start items-start mx-8">
                <p className="font-bold text-blue-600 text-left">CBSD</p>
                <p className="font-medium text-gray-600 text-left">
                  UI/UX Developer
                </p>
                <p className="font-medium text-gray-600 text-left">
                  Apr'20 - Oct'21
                </p>
              </div>
            </div>
          </ul>
        </div>
      </div>
      {/* Buttons: Download Resume, Send Email */}
      <div className="flex flex-row w-full justify-start my-4">
        <div className="w-1/2 my-4 -mr-16">
          <button className="text-blue-600   bg-white border-2 border-blue-600 hover:border-blue-800  hover:bg-blue-800 hover:text-white font-bold mx-5 px-7 min-w-md py-2 text-sm rounded-md">
            Send Email
          </button>
          <button className="text-white   bg-blue-800 border-2 border-blue-800 hover:border-blue-500  hover:bg-blue-600 hover:text-white font-bold ml-5 px-7 min-w-md py-2 text-sm rounded-md">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
