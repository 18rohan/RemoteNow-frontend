import { UPDATE_SIGNIN_ERRORS } from "../actions/jobseeker.actions.js";

const INITIAL_STATE = {
  error: null,
};

const ErrorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SIGNIN_ERRORS:
      return {
        ...state,
        user_data: null,
        is_authenticated: false,
        error: action.data,
      };
    default:
      return state;
  }
};
export default ErrorReducer;
