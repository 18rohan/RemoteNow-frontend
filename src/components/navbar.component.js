// // import logo from './logo.svg';
// // import './App.css';
//
// import "../assets/tailwind.css";
//
// import { useSelector } from "react-redux";
// import { Link, useHistory } from "react-router-dom";
// import Cookie from "js-cookie";
//
// const Navbar = () => {
//   const userData = useSelector((state) => state.user);
//   const history = useHistory();
//
//   const onLogout = () => {
//     Cookie.remove("access_token");
//     if (!Cookie.get("access_token")) {
//       history.push("/login");
//     }
//   };
//
//   return (
//     <div class="bg-gray-900 ">
//       <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//         <div class="relative flex items-center justify-between h-16">
//           <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* <button
//               type="button"
//               class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span class="sr-only">Open main menu</span>
//
//               <svg
//                 class="block h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//
//               <svg
//                 class="hidden h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button> */}
//           </div>
//           <Link to="/">
//             <div class="flex-shrink-0 flex  px-2 ">
//               <p className="text-white font-bold font-sans mx-1 text-2xl leading-10">
//                 remote-now
//               </p>
//               <div className="text-white text-xl font-bold">✈️</div>
//             </div>
//           </Link>
//           <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//             <div class="hidden sm:block sm:ml-6">
//               <div class="flex space-x-4">
//                 <a
//                   href="#dashboard"
//                   class=" text-white hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   aria-current="page"
//                 >
//                   Dashboard
//                 </a>
//
//                 <a
//                   href="#team"
//                   class="text-white hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Team
//                 </a>
//
//                 <a
//                   href="#Projects"
//                   class="text-white hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Projects
//                 </a>
//
//                 <a
//                   href="#Calendar"
//                   class="text-white hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Calendar
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             {Cookie.get("access_token") ? (
//               <button
//                 onClick={onLogout}
//                 className="text-gray-100 mx-5  bg-red-500 font-bold mx-l-2 px-7 min-w-md py-2 text-sm rounded-md"
//               >
//                 Logout
//               </button>
//             ) : (
//               <a href="#login">
//                 <Link to="/jobseeker-login">
//                   <div className="text-gray-700 bg-white hover:bg-red-500 hover:text-white font-bold mx-5 px-7 min-w-md py-2 text-sm rounded-md">
//                     Seeking Job
//                   </div>
//                 </Link>
//               </a>
//             )}
//             {Cookie.get("access_token") ? (
//               <Link to="/login">
//                 <button className="text-gray-700 border  bg-white font-bold mx-l-2 px-7 min-w-md py-2 text-sm rounded-md">
//                   {userData.recruiter_name}
//                 </button>
//               </Link>
//             ) : (
//               <Link to="/login">
//                 <button className="text-gray-700  bg-white font-bold hover:bg-red-500 hover:text-white border-0 mx-l-2 px-7 min-w-md py-2 text-sm rounded-md">
//                   Hire a talent
//                 </button>
//               </Link>
//             )}
//
//             <div class="ml-3 relative">
//               <div></div>
//             </div>
//           </div>
//         </div>
//       </div>
//
//       <div class="sm:hidden" id="mobile-menu">
//         <div class="px-2 pt-2 pb-3 space-y-1">
//           <a
//             href="#dashboard"
//             class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
//             aria-current="page"
//           >
//             Dashboard
//           </a>
//
//           <a
//             href="#team"
//             class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Team
//           </a>
//
//           <a
//             href="#projects"
//             class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Projects
//           </a>
//
//           <a
//             href="#Calendar"
//             class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Calendar
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// // const mapDispatchToProps = dispatch =>({
// //   currentUser: dispatch(Logout)
// // });
//
// export default Navbar;
