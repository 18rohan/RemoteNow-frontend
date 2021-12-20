import React from "react";

const UserInfo = (props) => {
  return (
    <div className="shadow-lg w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-900 shadow-xl rounded-2xl  py-8 px-2">
      {/* Profile Image */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col w-32 h-32 justify-center items-center   mt-8 mb-4">
          <img src="./default_user2.png" alt="user profile " className=" " />
        </div>
        {/* User Name */}
        <p className="font-bold dark:text-gray-100 text-gray-800 text-lg">
          {props.jobseeker_name}
        </p>
        {/* User Title */}
        <p className="font-medium dark:text-gray-100 text-gray-800 text-md">
          Senior Software Engineer
        </p>
        {/* Sklls Tags */}
        <div className="flex w-full flex-row flex-wrap justify-start items-center mt-12 px-2">
          <div className="p-1 dark:bg-gray-500 bg-gray-50 border dark:border-gray-600 border-gray-300 rounded-xl m-1">
            <p className="text-sm font-medium dark:text-gray-100 font-bold text-blue-800">
              MongoDB
            </p>
          </div>
          <div className="p-1 dark:bg-gray-500 bg-gray-50 border dark:border-gray-600 border-gray-300 rounded-xl m-1">
            <p className="text-sm font-medium dark:text-gray-100 font-bold text-blue-800">
              MongoDB
            </p>
          </div>
          <div className="p-1 dark:bg-gray-500 bg-gray-50 border dark:border-gray-600 border-gray-300 rounded-xl m-1">
            <p className="text-sm font-medium dark:text-gray-100 font-bold text-blue-800">
              MongoDB
            </p>
          </div>
          <div className="p-1 dark:bg-gray-500 bg-gray-50 border dark:border-gray-600 border-gray-300 rounded-xl m-1">
            <p className="text-sm font-medium dark:text-gray-100 font-bold text-blue-800">
              MongoDB
            </p>
          </div>
          <div className="p-1 dark:bg-gray-500 bg-gray-50 border dark:border-gray-600 border-gray-300 rounded-xl m-1">
            <p className="text-sm font-medium dark:text-gray-100 font-bold text-blue-800">
              MongoDB
            </p>
          </div>
        </div>
        <p></p>
      </div>

      {/* Summary */}
    </div>
  );
};

export default UserInfo;
