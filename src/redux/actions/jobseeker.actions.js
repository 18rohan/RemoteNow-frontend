import Cookie from "js-cookie";
import axios from "axios";
export const SIGNUP = "SIGN_UP";
export const LOGIN = "LOGIN";
export const UPDATE_SIGNIN_ERRORS = "UPDATE_SIGNIN_ERRORS";

export const signup = (name, email, password, city, state, zip) => {
  console.log(name);
  const json_data = JSON.stringify({
    jobseeker_name: name,
    email_id: email,
    password: password,

    current_city: city,
    current_province: state,
    zip_code: zip,
  });
  console.log("json_data: ", json_data);
  return async (dispatch) => {
    const response = await fetch(
      "https://remotenow.herokuapp.com/jobseeker/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobseeker_name: name,
          email_id: email,
          password: password,
          current_city: city,
          current_province: state,
          zip_code: zip,
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
      const url = "https://remotenow.herokuapp.com/jobseeker/jobseeker-login";
      const response = await axios.post(url, {
        email_id: email,
        password: password,
      });

      const resData = await response;

      console.log("Jobseeker Response: ", response);

      // Storing the Access token and Refresh token in Local Storage
      var date = new Date();
      date.setTime(date.getTime() + 30 * 1000);

      Cookie.set("access_token", resData.data.access_token);
      // Cookie.set("refresh_token", resData.data.refresh_token);

      const userData = resData.data.CurrentJobseeker;
      console.log("USERDATA: ", userData);
      dispatch({ type: LOGIN, payload: userData });
    } catch (err) {
      console.log("ERROR RESPONSE: ", err.response);
      dispatch({ type: UPDATE_SIGNIN_ERRORS, data: err.response.data.message });
    }
  };
};

export const logout = () => {
  Cookie.remove("access_token");
};
