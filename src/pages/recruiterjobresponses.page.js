import "../assets/tailwind.css";

import React from "react";

import Cookie from "js-cookie";
import "../App.css";

// Importing ACTIONS

// Importing  Components

import NewNav from "../components/newnavbar.component";
import AdminJobCard from "../components/adminJobCard.component";
// import Sidebar from '../components/Sidebar.js';
import Sidebar from "../components/adminSidebar.component";

class JobReponses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
  }
  componentDidMount() {
    fetch("https://remotenow.herokuapp.com/jobs/fetch/jobs", {
      headers: { auth_token: Cookie.get("access_token") },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ jobs: data });
      })
      .catch(console.log);
  }
  render() {
    return (
      <div>
        <div className="fixed w-full">
          <NewNav />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className=" invisible md:visible cols-span-1 mt-20  ">
            <Sidebar />
          </div>

          <div className="col-span-5 flex flex-col items-left  w-full pt-2 md:flex flex-col w-full mt-8 flex-col justify-center p-8  ">
            {this.state.jobs ? (
              this.state.jobs.map((job) => (
                <AdminJobCard
                  jobtitle={job.position_title}
                  locations={job.locations_allowed}
                  tag1={job.industry_name}
                  tag2={job.job_category}
                />
              ))
            ) : (
              <div className="justify-center">
                <p>No jobs exist</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default JobReponses;
