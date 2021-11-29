import "../assets/tailwind.css";

import { Redirect } from "react-router-dom";

import React, { useState } from "react";

import { useDispatch } from "react-redux";
import "../App.css";

// Importing ACTIONS
import * as RecruiterActions from "../redux/actions/recruiter.action";

// Importing  Components
import Navbar from "../components/navbar.component";
import InputComponent from "../components/inputComponent";
// import Sidebar from '../components/Sidebar.js';
import Sidebar from "../components/adminSidebar.component";

const PostJob = ({ authorized }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [error, setError] = useState({});
  // const [isFormValid, setIsFormValid] = useState(true);
  // check if user is authorized to access this component/page
  if (!authorized) {
    return <Redirect to="/login" />;
  }
  // Declaring states

  // Input Change Handler
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    let currentError = false;
    if (!event.target.value.length > 0) {
      setError({ ...error, [event.target.name]: currentError });
    } else {
      setError({ ...error, [event.target.name]: !currentError });
    }
    // let formIsValid = true;
    // formIsValid = formIsValid && error.email_id && error.password;
    // setIsFormValid(formIsValid)
    console.log("FORM: ", form);
  };

  // Form Submit Handler
  const formSubmitHandler = () => {
    console.log("POSITION FIELD: ", form.position);

    dispatch(
      RecruiterActions.CreateJob(
        form.position,
        form.locations_allowed,
        form.timezone,
        form.industry_name,
        form.job_category,
        form.industry_job_tags,
        form.max_salary,
        form.min_salary,
        form.currency,
        form.salary_interval,
        form.max_experience,
        form.min_experience,
        form.total_vacancy,
        form.job_description
      )
    );
  };
  return (
    <div>
      <div className="fixed w-full">
        <Navbar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6">
        <div className=" invisible md:visible cols-span-1 mt-20  ">
          <Sidebar />
        </div>

        <div className="col-span-5 flex flex-col items-left   w-full pt-2 md:w-full mt-16 flex-col justify-center  p-5 m-250 ">
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
            type="button"
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
