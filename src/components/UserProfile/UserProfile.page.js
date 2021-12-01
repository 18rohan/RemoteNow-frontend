import React from "react";
import JobseekerNav from "../JobseekerDashboardNavbar.component.js";
// components

// views

// import Sidebar from "../components/adminSidebar.component";
import SidebarNew from "../../components/SidebarNew.component";
import UserInfo from "./UserInfo.component";
import Nav from "../newnavbar.component";
import UserDetails from "./UserDetails.component";
import Experience from "./Experience.component";
import Education from "./Education.component";
import Accomplishments from "./Accomplishment.component";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const UserProfile = () => {
  const userData = useSelector((state) => state.user);

  const History = useHistory();
  if (!userData.is_authenticated) {
    History.push("/jobseeker-login");
  }
  return (
    <div>
      <div className="fixed w-full z-40">
        <JobseekerNav />
      </div>

      <div className="w-full flex flex-row br-gray-100">
        <div className="invisible md:visible z-40 br-red-100">
          <SidebarNew />
        </div>
        <div className="w-full flex flex-row br-gray-100 my-12">
          <div className="w-1/4 ml-32 my-8 ">
            <UserInfo
              jobseeker_name={userData.user_data.jobseeker_name}
              country={userData.user_data.current_country}
              contact_number={userData.user_data.contact_number}
            />
          </div>
          <div className="w-3/4 my-8 mx-8  ">
            <UserDetails
              city={userData.user_data.current_city}
              contact_number={userData.user_data.contact_number}
              province={userData.user_data.current_province}
              email={userData.user_data.email_id}
            />
            <Experience />
            <Education />
            <Accomplishments />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
