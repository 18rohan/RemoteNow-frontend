// import { Switch } from 'react-router';
import {
  LOGIN,
  UPDATE_SIGNIN_ERRORS,
  IS_AUTHENTICATED,
} from "../actions/recruiter.action";

// importing ACTIONS
// import SET_CURRENT_USER from './userActions';

const INITIAL_STATE = {
  user_data: {},
  is_authenticated: null,
  error: {},
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      const currentUser = action.payload;
      console.log("REDUCER CURRENT USER", action.payload);
      return {
        ...state.user_data,
        user_data: currentUser,
        is_authenticated: true,
      };

    default:
      return state;
  }
};
export default AuthReducer;
