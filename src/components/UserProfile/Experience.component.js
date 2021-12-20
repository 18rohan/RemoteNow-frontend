import React from "react";

const Experience = () => {
  return (
    <div className="w-full dark:bg-gray-900 bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-900 shadow-md rounded-2xl  my-6 py-12 ">
      {/* Basic information Grid */}
      <h1 className="font-bold dark:text-gray-100 text-black text-left mx-4 my-2 text-lg">
        Basic Information
      </h1>
      <div className="flex flex-col">
        <div className="w-full">
          <ul>
            <div className="flex flex-row justify-start items-start m-3 p-4 border-b-2 border-gray-300">
              <div className="flex flex-col p-2 justify-center items-center">
                <img
                  src="tesla.svg"
                  alt="company logo"
                  className="w-32 -my-4"
                />
              </div>
              <div className="flex flex-col justify-start items-start mx-8">
                <p className="font-bold dark:text-blue-500 text-blue-600 text-left">
                  CBSD
                </p>
                <p className="font-medium dark:text-gray-200 text-gray-600 text-left">
                  UI/UX Developer
                </p>
                <p className="font-medium dark:text-gray-200 text-gray-600 text-left">
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
                <p className="font-bold dark:text-blue-500 text-blue-600 text-left">
                  CBSD
                </p>
                <p className="font-medium dark:text-gray-200 text-gray-600 text-left">
                  UI/UX Developer
                </p>
                <p className="font-medium dark:text-gray-200 text-gray-600 text-left">
                  Apr'20 - Oct'21
                </p>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
