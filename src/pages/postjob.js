import "../assets/tailwind.css";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../App.css";

// Importing ACTIONS
import * as RecruiterActions from "../redux/actions/recruiter.action";

// Importing  Components

import NewNav from "../components/newnavbar.component";
import InputComponent from "../components/inputComponent";
import { useHistory } from "react-router-dom";
// import Sidebar from '../components/Sidebar.js';
import Sidebar from "../components/adminSidebar.component";

const PostJob = ({ authorized }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const userData = useSelector((state) => state.user);
  const history = useHistory();
  const [error, setError] = useState({});
  console.log("User Data: ", userData);
  console.log("POST JOB::: IS_AUTHENTICATED: ", userData.is_authenticated);
  // console.log("POST JOB PAGE AUTHORIZED: ", authorized);

  // Input Change Handler
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    let currentError = false;
    if (!event.target.value.length > 0) {
      setError({ ...error, [event.target.name]: currentError });
    } else {
      setError({ ...error, [event.target.name]: !currentError });
    }

    console.log("FORM: ", form);
  };

  // Form Submit Handler
  const formSubmitHandler = () => {
    console.log("POSITION FIELD: ", form.position);

    dispatch(
      RecruiterActions.CreateJob({
        position: form.position,
        company: userData.user_data.recruiter_name,
        location: form.locations_allowed,
        timezone: form.timezone,
        industry: form.industry_name,
        category: form.job_category,
        tags: form.industry_job_tags,
        maxSalary: form.max_salary,
        minSalary: form.min_salary,
        currency: form.currency,
        interval: form.salary_interval,
        maxExp: form.max_experience,
        minExp: form.min_experience,
        vacancy: form.total_vacancy,
        desc: form.job_description,
      })
    );
  };

  if (!userData.is_authenticated) {
    history.push("/login");
  }

  return (
    <div>
      <div className="fixed w-full shadow-md">
        <NewNav recruiter_name={userData.user_data.recruiter_name} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 bg-white ">
        <div className=" invisible md:visible cols-span-1 mt-20  ">
          <Sidebar />
        </div>

        <div className="bg-white dark:bg-gray-800 col-span-5 flex flex-col items-left   w-full pt-2 md:w-full mt-16 flex-col justify-center  p-5 m-250 ">
          <InputComponent
            name="position"
            type="text"
            placeholder="Enter job position"
            Label="Job Position Title"
            size="full"
            onChange={handleChange}
            styles="column"
          />
          <InputComponent
            name="locations_allowed"
            type="text"
            placeholder="Enter locations"
            Label="Locations Allowed"
            size="full"
            onChange={handleChange}
            styles="column"
          />
          <InputComponent
            name="timezone"
            type="text"
            placeholder="Enter locations"
            Label="Timezones"
            size="full"
            onChange={handleChange}
            styles="column"
          />
          <InputComponent
            name="industry_name"
            type="text"
            placeholder="Enter company name"
            Label="Industry Name"
            size="full"
            onChange={handleChange}
            styles="column"
          />
          <InputComponent
            name="job_category"
            type="text"
            placeholder="Enter job category"
            Label="Job Category"
            size="full"
            onChange={handleChange}
            styles="column"
          />
          <InputComponent
            name="industry_job_tags"
            type="text"
            placeholder="Enter job tags"
            Label="Industry/Job Tags"
            size="full"
            onChange={handleChange}
            styles="column"
          />

          <div className="flex flex-col md:flex-row">
            <InputComponent
              name="max_salary"
              type="text"
              placeholder="Enter max salary"
              Label="Maximum Salary"
              size="quarter"
              styles="column"
              onChange={handleChange}
            />
            <InputComponent
              name="min_salary"
              type="text"
              placeholder="Enter min salary"
              Label="Minimum Salary"
              size="quarter"
              leftmargin="4"
              styles="column"
              onChange={handleChange}
            />
            <InputComponent
              name="currency"
              type="text"
              placeholder="Enter currency"
              Label="Currency"
              size="quarter"
              leftmargin="4"
              styles="column"
              onChange={handleChange}
            />
            <InputComponent
              name="salary_interval"
              type="text"
              placeholder="Enter salary interval"
              Label="Salary Interval"
              size="quarter"
              leftmargin="4"
              styles="column"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col md:flex-row">
            <InputComponent
              name="max_experience"
              type="text"
              placeholder="Enter max salary"
              Label="Max. Experience required"
              size="quarter"
              styles="column"
              onChange={handleChange}
            />
            <InputComponent
              name="min_experience"
              type="text"
              placeholder="Enter min salary"
              Label="Min. Experience required"
              size="quarter"
              leftmargin="4"
              styles="column"
              onChange={handleChange}
            />
            <InputComponent
              name="total_vacancy"
              type="text"
              placeholder="Job vacancies"
              Label="Job vacancies"
              size="quarter"
              leftmargin="4"
              styles="column"
              onChange={handleChange}
            />
          </div>
          <InputComponent
            name="job_description"
            type="text"
            placeholder="Job description"
            Label="Job Description"
            size="almostfull"
            styles="column"
            onChange={handleChange}
          />

          <button
            className="shadow text-white bg-red-500  mx-3 w-11/12 md:w-1/4 hover:bg-white mt-8 hover:shadow-lg hover:text-gray-800 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded-lg"
            type="submit"
            onClick={formSubmitHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
