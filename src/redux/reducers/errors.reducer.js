import { UPDATE_SIGNIN_ERRORS } from "../actions/jobseeker.actions.js";

const INITIAL_STATE = {
  error: null,
};

const ErrorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SIGNIN_ERRORS:
      return {
        ...state,
        error: action.data,
      };
  }
};

export default ErrorReducer;
