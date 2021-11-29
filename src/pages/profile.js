import React from "react";

// components

// views

import Sidebar from "../components/adminSidebar.component";
import PostJob from "../pages/postjob.js";

const Admin = () => {
  return (
    <div>
      <Sidebar />
      <div className="grid grid-cols-6">
        <div className="cols-span-1">
          <Sidebar />
        </div>
        <div>
          <PostJob />
        </div>
      </div>
    </div>
  );
};
export default Admin;
