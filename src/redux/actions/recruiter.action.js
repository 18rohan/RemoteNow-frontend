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

      // Storing the Access token and Refresh token in Local Storage
      var date = new Date();
      date.setTime(date.getTime() + 30 * 1000);

      Cookie.set("access_token", resData.data.access_token);
      // Cookie.set("refresh_token", resData.data.refresh_token);

      const userData = resData.data.CurrentRecruiter;

      dispatch({ type: LOGIN, payload: userData });
    } catch (err) {
      dispatch({ type: UPDATE_SIGNIN_ERRORS, data: err.response.data.message });
    }
  };
};

export const logout = () => {
  Cookie.remove("access_token");
  localStorage.clear();
};

export const CreateJob = (post) => {
  console.log("DATA OBJECT: ", post);
  return async (dispatch) => {
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
            position_title: post.position,
            company_name: post.company,
            tags: post.tags,
            timezone: post.timezone,
            industry_name: post.industry,
            locations_allowed: post.location,
            job_category: post.category,
            min_salary: post.minSalary,
            max_salary: post.maxSalary,
            total_vacancy: post.vacancy,
            min_experience: post.minExp,
            max_experience: post.maxExp,
            salary_interval: post.interval,
            job_description: post.desc,
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
