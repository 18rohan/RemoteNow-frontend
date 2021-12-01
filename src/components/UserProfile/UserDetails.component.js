import React from "react";

const UserDetails = (props) => {
  return (
    <div className="w-full bg-white border border-gray-200 shadow-md rounded-md  px-">
      {/* Basic information Grid */}
      <h1 className="font-bold text-black text-left mx-4 my-2 text-lg">
        Basic Information
      </h1>
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <ul>
            <div className="flex flex-col justify-center items-start m-6">
              <p className="font-bold text-gray-900">AGE</p>
              <p className="font-medium text-gray-600">28 Years</p>
            </div>
            <div className="flex flex-col justify-center items-start m-6">
              <p className="font-bold text-gray-900 uppercase">ctc</p>
              <p className="font-medium text-gray-600">20 LPA</p>
            </div>
          </ul>
        </div>
        <div className="col-span-1">
          <ul>
            <div className="flex flex-col justify-center items-start my-6 mx-2">
              <p className="font-bold text-gray-900 uppercase">
                years of experience
              </p>
              <p className="font-medium text-gray-800">4 Years</p>
            </div>
            <div className="flex flex-col justify-center items-start my-6 mx-2">
              <p className="font-bold text-gray-900 uppercase">location</p>
              <p className="font-medium text-gray-600">
                {props.city}, {props.province}
              </p>
            </div>
          </ul>
        </div>
        <div className="col-span-1">
          <ul>
            <div className="flex flex-col justify-center items-start m-6">
              <p className="font-bold text-gray-900 uppercase">phone number</p>
              {props.contact_number ? (
                <p className="font-medium text-gray-600">
                  {props.contact_number}
                </p>
              ) : (
                <p className="font-medium text-gray-400">
                  Complete your details
                </p>
              )}
            </div>
            <div className="flex flex-col justify-center items-start m-6">
              <p className="font-bold text-gray-900 uppercase">email</p>
              <p className="font-medium text-gray-600">{props.email}</p>
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

export default UserDetails;
