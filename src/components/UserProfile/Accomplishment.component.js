import React from "react";

const Accomplishments = () => {
  return (
    <div className=" flex flex-col justify-center items-start p-6 w-full dark:bg-gray-900 bg-white border border-gray-200 dark:border-gray-900 shadow-md rounded-md  my-6">
      <div className="w-full flex flex-row justify-between items-center">
        <h1 className="font-bold dark:text-gray-100 text-black text-lg">
          Accomplishments{" "}
        </h1>
        <h1 className="font-bold dark:text-gray-100  text-3xl text-gray-800">
          &#187;
        </h1>
      </div>
    </div>
  );
};

export default Accomplishments;
