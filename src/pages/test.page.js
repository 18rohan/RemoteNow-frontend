import React from "react";
import "../assets/tailwind.css";
// import "../src/assets/tailwind.css";
import Navbar from "../components/navbar.component";
import Card from "../components/card.component";
import Searchbar from "../components/searchbar.component";
import Sidebar from "../components/sidebar.component";
import BigCard from "../components/bigCard.component";
import LongCard from "../components/longJobData.component";
import ImageCard from "../components/imageLabelCard.component.js";
import NewCard from "../components/newCard.component";
import NewNav from "../components/newnavbar.component";
// import Login from '../src/pages/login.page';

const Test = () =>{



    return (
      <div>
        <div className="fixed w-full ">
          <NewNav />
        </div>
        <div className="px-0 md:px-10 py-5" style={{ background: "#ffffff" }}>
          <div className="w-full md:flex flex-col justify-content my-14  w-full md:w-full ">
            <Searchbar />
          </div>
          <div className="flex flex-col w-full md:grid grid-cols-5 ">
            <div className="invisible md:visible col-span-1 ">
              <Sidebar />
            </div>
            <div className="w-full md:col-span-3  ">
              <p className="text-blue-900  font-semibold w-full flex flex-row justify-start pl-5 text-md md:text-3xl ">
                Featured Jobs
              </p>
              <div className="flex flex-col md:w-full my-2 pr-6 pl-4">
                <LongCard />
              </div>
            </div>
            {/*<div className="invisible md:visible col-span-1">
              <Sidebar />
            </div>*/}
          </div>
          <div className="w-6xl my-24 border-gray-800"></div>
          <p className="text-blue-900 font-semibold  max-w-full text-md md:text-3xl flex justify-center items-center ">
            New Technical Jobs
          </p>
          <div className="  grid grid-cols-1 md:grid-cols-3 p-2">
            {this.state.jobs.map((job) => (
              <NewCard jobs={job}/>
            ))}
            
          </div>
          <div className="w-6xl my-24 border-gray-800"></div>
          <p className="text-blue-900 font-semibold  max-w-full text-md md:text-3xl flex justify-center items-center ">
            Our Recruiters
          </p>

          <div className="  grid grid-cols-1 md:grid-cols-6 gap-10 p-2">
            <ImageCard imageurl="https://www.logotaglines.com/wp-content/uploads/2021/02/tesla_logo_tagline-slogan-customer-care.png" />
            <ImageCard imageurl="https://cdn.vox-cdn.com/thumbor/QuS2QKQys3HhosKiV-2IuKhphbo=/39x0:3111x2048/1400x1050/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" />
            <ImageCard imageurl="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" />
            <ImageCard imageurl="https://www.alphr.com/wp-content/uploads/2021/03/How-to-See-Who-Is-Watching-in-Twitch.jpg" />
            <ImageCard imageurl="https://www.paypalobjects.com/webstatic/icon/pp258.png" />
            <ImageCard imageurl="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" />

          </div>

        </div>
      </div>
    );
}


export default Home;
