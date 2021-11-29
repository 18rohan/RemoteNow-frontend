import "../assets/tailwind.css";
import Cookie from "js-cookie";
import axios from "axios";

const NewCard = (jobs) => {
  const ApplyJob = async () => {
    // console.log("Clicked Apply")
    await axios.patch(`http://localhost:4000/apply-job/${jobs.jobs._id}`, {
      headers: { auth_token: Cookie.get("access_token") },
    });
  };
  return (
    <>
      <div className="md:w-xs flex flex-col rounded-lg m-2 bg-white shadow-lg ">
        <div className="grid grid-cols-4 pt-2 ">
          <div className="col-span-1  flex flex-col justify-center items-center">
            <img
              className="max-h-16"
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
              alt="google logo"
            />
          </div>
          <div className="col-span-2  flex justify-left items-center">
            <p className="font-bold text-gray-800 text-lg">
              {jobs.jobs.position_title}
            </p>
          </div>
        </div>
        <div className="mt-5 px-5">
          <div className="pb-4">
            <p className="font-md text-left text-gray-800">
              You will be responsible for visual design for multi-device.
              Understand basic design, user journey ideation and wireframing
              etc.
            </p>
          </div>
          <div className="flex flex-row justify-start w-full  ">
            <div className="col-span-2  flex justify-start items-center flex-wrap  ">
              <div className="bg-gray-100 border-2 border-gray-900 rounded-lg px-2 mx-1 my-1 ">
                <p className="font-medium text-gray-900">
                  {jobs.jobs.locations_allowed[0]}
                </p>
              </div>
              {/*<div className="bg-gray-900 rounded-lg px-2">
            <p className="font-light text-white">{jobs.jobs.locations_allowed[1]}</p>
            </div>*/}
              <div className="bg-gray-100 border-2 border-gray-900 rounded-lg px-2 mx-1 my-1">
                <p className="font-medium text-gray-900">
                  {jobs.jobs.timezone}
                </p>
              </div>
              <div className="bg-gray-100 border-2 border-gray-900 rounded-lg px-2 mx-1 my-1">
                <p className="font-medium text-gray-900">
                  {jobs.jobs.job_category}
                </p>
              </div>
              <div className="bg-gray-100 border-2 border-gray-900 rounded-lg px-2 mx-1 my-1">
                <p className="font-medium text-gray-900">
                  {jobs.jobs.min_experience}-{jobs.jobs.max_experience}yrs
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 pt-2  ">
            {/*<div className="col-span-1  flex justify-start  items-center">
            <p className="font-bold text-gray-800">Timezones:</p>
            </div>*/}
            <div className="col-span-2  flex justify-start items-center">
              {/*<div className="bg-gray-900 rounded-lg px-2 mx-1">
            <p className="font-light text-white">{jobs.jobs.timezone}</p>
            </div>*/}
            </div>
          </div>
          <div className="grid grid-cols-3 pt-2 ">
            {/*<div className="col-span-1  flex justify-start  items-center">
            <p className="font-bold text-gray-800">Job Type:</p>
            </div>*/}
            <div className="col-span-2  flex justify-start items-center">
              {/*<div className="bg-gray-900 rounded-lg px-2 mx-1">
            <p className="font-light text-white">{jobs.jobs.job_category}</p>
            </div>*/}
            </div>
          </div>
          <div className="grid grid-cols-3 pt-2 ">
            {/*<div className="col-span-1  flex justify-start  items-center">
            <p className="font-bold text-gray-800">Experience:</p>
            </div>*/}
            <div className="col-span-2  flex justify-start items-center">
              {/*<div className="bg-gray-900 rounded-lg px-2 mx-1">
            <p className="font-light text-white">{jobs.jobs.min_experience}-{jobs.jobs.max_experience}yrs</p>
            </div>*/}
            </div>
          </div>
          <div className="grid grid-cols-2 ">
            <div className="col-span-1  flex justify-center items-center">
              <button className=" bg-gray-300  rounded-lg text-gray-800 font-bold   text-md m-4 py-2 w-full md:w-36">
                View
              </button>
            </div>
            <div className="col-span-1  flex justify-center items-center">
              <button
                onClick={ApplyJob}
                className=" bg-green-700  rounded-lg text-white font-bold text-md   m-4 py-2  w-full md:w-36"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCard;
