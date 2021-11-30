import axios from "axios";
import Cookie from "js-cookie";

export const SIGNUP = "SIGN_UP";
export const IS_AUTHENTICATED = "IS_AUTHENTICATED";
export const LOGIN = "LOGIN";
export const UPDATE_SIGNIN_ERRORS = "UPDATE_SIGNIN_ERRORS";

export const signup = (email, password, name) => {
  console.log(name);
  const json_data = JSON.stringify({
    email_id: email,
    password: password,
    recruiter_name: name,
  });
  console.log("json_data: ", json_data);
  return async (dispatch) => {
    const response = await fetch(
      "https://remotenow.herokuapp.com/recruiter/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_id: email,
          password: password,
          recruiter_name: name,
        }),
      }
    );
    if (!response.ok) {
      throw new Error("Something went wrong", 500);
    }
    const resData = await response.json();
    console.log("resData", resData);
    // dispatch({type:SIGNUP});
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const url = "https://remotenow.herokuapp.com/login";
      const response = await axios.post(url, {
        email_id: email,
        password: password,
      });

      const resData = await response;

      console.log("ACTION RESPONSE: =-->", response);

      // Storing the Access token and Refresh token in Local Storage
      var date = new Date();
      date.setTime(date.getTime() + 30 * 1000);

      Cookie.set("access_token", resData.data.access_token);
      // Cookie.set("refresh_token", resData.data.refresh_token);

      const userData = resData.data.CurrentRecruiter;

      dispatch({ type: LOGIN, payload: userData });
    } catch (err) {
      dispatch({ type: UPDATE_SIGNIN_ERRORS, data: err });
    }
  };
};

export const logout = () => {
  Cookie.remove("access_token");
  localStorage.clear();
};

export const CreateJob = (
  position,
  locations_allowed,
  timezone,
  industry_name,
  job_category,
  industry_job_tags,
  max_salary,
  min_salary,
  currency,
  salary_interval,
  max_experience,
  min_experience,
  total_vacancy,
  job_description
) => {
  const data_object = {
    position,
    locations_allowed,
    timezone,
    industry_name,
    job_category,
    industry_job_tags,
    max_salary,
    min_salary,
    currency,
    salary_interval,
    max_experience,
    min_experience,
    total_vacancy,
    job_description,
  };
  console.log("DATA OBJECT: ", data_object);
  return async (dispatch) => {
    console.log("ACTIONS FIELD: ", job_description);
    try {
      const response = await fetch(
        "https://remotenow.herokuapp.com/jobs/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            auth_token: Cookie.get("access_token"),
          },
          body: JSON.stringify({
            position_title: position,
            timezone: timezone,
            industry_name: industry_name,
            locations_allowed: locations_allowed,
            job_category: job_category,
            min_salary: min_salary,
            max_salary: max_salary,
            total_vacancy: total_vacancy,
            min_experience: min_experience,
            max_experience: max_experience,
            salary_interval: salary_interval,
            job_description: job_description,
          }),
        }
      );
      console.log("RESPONSE: ", response);
      if (!response.ok) {
        throw new Error("Something went wrong", 500);
      }
      const resData = await response.json();
      console.log("resData", resData);
    } catch (err) {
      console.log(err);
    }
  };
};
