import "../assets/tailwind.css";

const SidebarNew = () => {
  return (
    <div className="w-20 h-full bg-grey-100  shadow-sm fixed  ">
      {/* Icon */}
      <div className="w-full  bg-white p-6 hover:bg-gray-100 active:bg-blue-200">
        <img src="/user.png" alt="user" />
        {/* <FaUserTie size={30} color="#04009A" /> */}
      </div>
      <div className="w-full bg-white p-6 hover:bg-gray-100 active:bg-blue-200">
        <img src="/employment.png" alt="jobs" />
        {/* <FaBriefcase size={30} color="#04009A" /> */}
      </div>
      <div className="w-full bg-white p-6 hover:bg-gray-100 active:bg-blue-200">
        <img src="/folder.png" alt="applied" />
        {/* <FaFolderOpen size={30} color="#04009A" /> */}
      </div>
      <div className="w-full bg-white p-6 hover:bg-gray-100 active:bg-blue-200">
        <img src="/message.png" alt="jobs" />
        {/* <FaFolderOpen size={30} color="#04009A" /> */}
      </div>
    </div>
  );
};

export default SidebarNew;
