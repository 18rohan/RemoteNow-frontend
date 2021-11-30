import "../assets/tailwind.css";
import { useSelector } from "react-redux";
const AdminJobCard = (props) => {
  const userData = useSelector((state) => state.user);
  // Job title
  // Organisation name
  // Locations Allowed
  // Tags
  // Company Logo

  return (
    <div>
      <div className="md:grid grid-cols-4 mt-12 pt-3 shadow-lg bg-gray-50">
        <div className="md:col-span-1">
          <img
            className=" w-full md:w-full h-full  object-contain  "
            src="https://pngimg.com/uploads/uber/uber_PNG18.png"
            alt="logo"
          />
        </div>
        <div className="md:col-span-3 flex flex-col justify-start items-start">
          <div className="uppercase tracking-wide text-lg text-gray-700 font-semibold">
            {props.jobtitle}
          </div>
          <div className=" tracking-wide text-lg text-blue-700 flex flex-row font-semibold py-1 ">
            <p className="font-semibold text-sm text-blue-700 pr-3 ">
              Organisation:
            </p>
            <p className="text-sm">{userData.recruiter_name}</p>
          </div>
          <div className="tracking-wide text-lg  font-semibold flex flex-row">
            <p className="font-semibold text-sm text-blue-700 pr-3 ">
              Locations Allowed:
            </p>
            <p className="text-sm">{props.locations}</p>
          </div>
          <div className="flex flex-row w-full md:flex flex-row pt-1 pb-2">
            <p className="font-semibold text-sm text-blue-700 pr-3 pt-1">
              Tags:
            </p>
            <button className=" bg-indigo-500  rounded-lg text-white font-semibold text-xs  my-1  py-1  w-full md:w-40">
              {props.tag1}
            </button>
            <button className=" bg-indigo-500  rounded-lg text-white  font-bold  text-xs my-1 mx-1 py-1 w-full md:w-40">
              {props.tag2}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminJobCard;
