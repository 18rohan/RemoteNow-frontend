// import { Switch } from 'react-router';
import { LOGIN, UPDATE_SIGNIN_ERRORS } from "../actions/recruiter.action";

// importing ACTIONS
// import SET_CURRENT_USER from './userActions';

const INITIAL_STATE = {
  user_data: {},
  errors: {},
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      const currentUser = action.payload;
      console.log("REDUCER CURRENT USER", action.payload);
      return {
        ...state.user_data,
        user_data: currentUser,
      };
    case UPDATE_SIGNIN_ERRORS:
      const error_message = action.data;
      return {
        ...state.errors,
        message: error_message,
      };
    default:
      return state;
  }
};
export default AuthReducer;
