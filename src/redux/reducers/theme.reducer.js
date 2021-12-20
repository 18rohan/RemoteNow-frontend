import { TOGGLE_DARK_MODE } from "../actions/theme.actions.js";

var INITIAL_STATE = false;
const ThemeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return !state;
    default:
      return state;
  }
};
export default ThemeReducer;
