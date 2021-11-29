import "../assets/tailwind.css";
import { Link, useHistory } from "react-router-dom";

import React, { useState } from "react";

import { useDispatch } from "react-redux";

import Cookie from "js-cookie";

// importing component
import InputComponent from "../components/inputComponent";

// Importing ACTIONS
import * as AuthActions from "../redux/actions/recruiter.action";

const Signup = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const [isFormValid, setIsFormValid] = useState(true);
  const history = useHistory();

  // Form Submit Handler
  const handleloginSubmit = () => {
    if (!isFormValid) {
      return;
    } else if (isFormValid) {
      dispatch(
        AuthActions.signup(user.email_id, user.password, user.recruiter_name)
      );
    }
    console.log(user);
    history.push("/login");
    if (Cookie.get("access_token")) {
      history.push("/login");
    }
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    let currentError = false;
    if (!event.target.value.length > 0) {
      setError({ ...error, [event.target.name]: currentError });
    } else {
      setError({ ...error, [event.target.name]: !currentError });
    }
    let formIsValid = true;
    formIsValid = formIsValid && error.email_id && error.password;
    setIsFormValid(formIsValid);
    console.log(user);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="w-full bg-green-700  md:w-full h-screen   cols-span-1 flex flex-col ">
        <Link to="/">
          <div class="w-full  flex md:w-full justify-start items-start px-2 ">
            <p className="text-white font-bold font-sans mx-1 text-4xl leading-10">
              remote-now
            </p>
            <div className="text-white text-xl font-bold">✈️</div>
          </div>
        </Link>
        <div className="w-full flex flex-col md:w-full h-full justify-center items-center">
          <div className="md:w-1/2 flex flex-col justify-center items-center ">
            <div className="w-full mb-5 md:w-full flex justify-start mb-2">
              <p className="text-white font-bold text-2xl">
                Register yourself with us!
              </p>
            </div>
            <InputComponent
              name="recruiter_name"
              type="text"
              placeholder="Enter Organisation's name"
              Label="Organisation's Name"
              label_color="white"
              size="half"
              styles="column"
              onChange={handleChange}
            />
            <InputComponent
              name="email_id"
              type="text"
              placeholder="john@doe.com"
              Label="Email Id"
              label_color="white"
              size="half"
              styles="column"
              onChange={handleChange}
            />
            <InputComponent
              name="password"
              type="password"
              placeholder="Enter password"
              Label="Password"
              label_color="white"
              size="half"
              styles="column"
              onChange={handleChange}
            />
            <InputComponent
              name="position"
              type="password"
              placeholder="Confirm Password"
              Label="Confirm Password"
              label_color="white"
              size="half"
              styles="column"
              onChange={handleChange}
            />
          </div>
          <div class="md:flex md:items-center flex-col justify-center mt-4">
            <button
              class="shadow text-white bg-red-500 w-full hover:bg-white hover:border hover:border-gray-500 hover:text-gray-800 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded-lg"
              type="button"
              onClick={handleloginSubmit}
            >
              Sign Up
            </button>

            <p className="text-md text-white">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="border border-l-gray-700  w-full md:w-full h-screen flex flex-col justify-center items-center">
        <p className="text-2xl md:text-4xl text-gray-800 ">
          Register yourself to connect with the{" "}
          <p className="text-4xl text-blue-700 font-bold">
            Industry's best talents!
          </p>
        </p>
      </div>
    </div>
  );
};

export default Signup;
