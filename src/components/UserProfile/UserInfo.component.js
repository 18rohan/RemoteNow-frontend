import React from "react";

const UserInfo = (props) => {
  return (
    <div className="w-full bg-white border border-gray-200 shadow-sm rounded-md  py-8 px-2">
      {/* Profile Image */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col w-32 h-32 justify-center items-center   mt-8 mb-4">
          <img
            src="./user1.jpeg"
            alt="user profile "
            className="rounded-full "
          />
        </div>
        {/* User Name */}
        <p className="font-bold text-gray-800 text-lg">
          {props.jobseeker_name}
        </p>
        {/* User Title */}
        <p className="font-medium text-gray-800 text-md">
          Senior Software Engineer
        </p>
        {/* Sklls Tags */}
        <div className="flex w-full flex-row flex-wrap justify-start items-center mt-12 px-2">
          <div className="p-1 bg-gray-50 border border-gray-300 rounded-xl m-1">
            <p className="text-sm font-medium text-blue-800">MongoDB</p>
          </div>
          <div className="p-1 bg-gray-50 border border-gray-300 rounded-xl m-1">
            <p className="text-sm font-medium text-blue-800">MongoDB</p>
          </div>
          <div className="p-1 bg-gray-50 border border-gray-300 rounded-xl m-1">
            <p className="text-sm font-medium text-blue-800">MongoDB</p>
          </div>
          <div className="p-1 bg-gray-50 border border-gray-300 rounded-xl m-1">
            <p className="text-sm font-medium text-blue-800">MongoDB</p>
          </div>
          <div className="p-1 bg-gray-50 border border-gray-300 rounded-xl m-1">
            <p className="text-sm font-medium text-blue-800">MongoDB</p>
          </div>
        </div>
        <p></p>
      </div>

      {/* Summary */}
    </div>
  );
};

export default UserInfo;
