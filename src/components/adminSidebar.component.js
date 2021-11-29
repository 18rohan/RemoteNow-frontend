import "../assets/tailwind.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-xl h-full bg-gray-800  md:w-1/6 fixed  ">
      <div className="text-gray-800   flex flex-col   ">
        <div className="flex flex-row w-full bg-white justify-center ">
          <h3 className="text-blue-800  font-bold mb-5 mt-5 bg-white">
            Recruiter
          </h3>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-row p-2 mt-2 pl-7 text-white hover:bg-red-500 ">
            <h3 className="text-white font-bold">Profile</h3>
          </div>
          <div className="flex flex-row pl-7 hover:bg-red-500  p-2">
            <h3 className="text-white font-bold">Dashboard</h3>
          </div>
          <div className="flex flex-row pl-7 hover:bg-red-500  p-2 ">
            <Link to="/post-job">
              <h3 className="text-white font-bold">Post a Job</h3>
            </Link>
          </div>
          <div className="flex flex-row pl-7 hover:bg-red-500  p-2 ">
            <Link to="/job-responses">
              <h3 className="text-white font-bold">Posted Jobs</h3>
            </Link>
          </div>

          <div className="flex flex-row pl-7 hover:bg-red-500  p-2">
            <h3 className="text-white font-bold">All Applicants</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
