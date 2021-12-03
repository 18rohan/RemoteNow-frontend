import React, { useState, useLayoutEffect } from "react";
import "../assets/tailwind.css";
// import "../src/assets/tailwind.css";
import axios from "axios";

import Searchbar from "../components/searchbar.component";

// import LongCard from "../components/longJobData.component";
import NewLongCard from "../components/newLongJobDataCard.component";

import NewCard from "../components/newCard.component";
import NewNav from "../components/newnavbar.component";
import SidebarNew from "../components/SidebarNew.component";
// import Login from '../src/pages/login.page';

const Home = () => {
  const [Alljobs, setJobs] = useState([]);
  async function fetchData() {
    let response = await axios(`https://arbeitnow.com/api/job-board-api`);
    let jobs = await response.data.data;
    setJobs(jobs);
    console.log(jobs);
  }
  useLayoutEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="fixed w-full z-40 ">
        <NewNav />
      </div>
      <div className="flex flex-row">
        <div className="invisible md:visible z-40  ">
          <SidebarNew />
        </div>
        <div className="px-0 md:px-0 py-5 w-full   ">
          <div className="w-full md:flex flex-col justify-end items-center  md:w-full bg-white pl-20 ">
            <Searchbar />
          </div>

          <div className="flex flex-col w-full md:grid grid-cols-10 ">
            <div className="w-full md:col-span-9 mx-24 ">
              <p className="text-black font-semibold w-full flex flex-row justify-start pl-5 text-md md:text-3xl ">
                Featured Jobs
              </p>
              <div className="flex flex-col md:w-11/12 col-span-4 my-2 pr-6 pl-4">
                {Alljobs.map((job) => (
                  <NewLongCard
                    company_name={job.company_name}
                    title={job.title}
                    location={job.location}
                    job_type={job.job_types}
                    remote={job.remote}
                    tags={job.tags}
                    description={job.description}
                  />
                ))}

                {/*<LongCard />
                <LongCard />
                <LongCard />
                <LongCard />*/}
              </div>
              <div className="w-11/12">
                <p className="text-black font-semibold  max-w-full text-md md:text-3xl flex justify-center items-center ">
                  New Technical Jobs
                </p>
                <div className="  grid grid-cols-1 md:grid-cols-3 p-2">
                  {/* {jobs.map((job) => (
                    <NewCard jobs={job} />
                  ))} */}
                </div>
              </div>
            </div>
            <div className="invisible md:visible col-span-2"></div>
          </div>
          <div className="w-6xl mb-24 mt-4 border-gray-800"></div>

          <div className="w-6xl my-24 border-gray-800"></div>
          {/* <p className="text-blue-900 font-semibold  max-w-full text-md md:text-3xl flex justify-center items-center ">
          Our Recruiters
        </p> */}

          {/* <div className="  grid grid-cols-1 md:grid-cols-6 gap-10 p-2">
          <ImageCard imageurl="https://www.logotaglines.com/wp-content/uploads/2021/02/tesla_logo_tagline-slogan-customer-care.png" />
          <ImageCard imageurl="https://cdn.vox-cdn.com/thumbor/QuS2QKQys3HhosKiV-2IuKhphbo=/39x0:3111x2048/1400x1050/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" />
          <ImageCard imageurl="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" />
          <ImageCard imageurl="https://www.alphr.com/wp-content/uploads/2021/03/How-to-See-Who-Is-Watching-in-Twitch.jpg" />
          <ImageCard imageurl="https://www.paypalobjects.com/webstatic/icon/pp258.png" />
          <ImageCard imageurl="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" />
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
