import React from "react";
// import './App.css';

import "../src/assets/tailwind.css";

import Login from "../src/pages/login.page";
import PostJob from "../src/pages/postjob";
import Admin from "../src/pages/profile";
import Home from "../src/pages/home.page";
import JobseekerLogin from "../src/pages/jobseekerlogin.page";
import JobReponses from "../src/pages/recruiterjobresponses.page";
import UserProfile from "../src/components/UserProfile/UserProfile.page";
import Signup from "../src/pages/signup.page";

import Landing from "./components/Landing.page.js";
import { Switch, Route } from "react-router-dom";

import Cookie from "js-cookie";

const App = () => {
  return (
    <div>
      <div className="fixed  w-full "></div>
      <div className="App dark:bg-gray-900 ">
        <Switch>
          <Route path="/profile" component={Admin} />
          <Route
            path="/post-job"
            component={() => (
              <PostJob authorized={Cookie.get("access_token")} />
            )}
          />
          <Route
            path="/job-responses"
            component={() => (
              <JobReponses authorized={Cookie.get("access_token")} />
            )}
          />
          <Route path="/user-profile" component={UserProfile} />
          <Route exact path="/login" component={Login} />
          <Route path="/jobseeker-login" component={JobseekerLogin} />

          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home} />

          <Route path="/" component={Landing} />
          {/* <Route path="/home" component={Home} /> */}
        </Switch>
      </div>
    </div>
  );
};

export default App;
