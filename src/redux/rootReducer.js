// importing REDUX dependencies
import { combineReducers } from "redux";

// importing reducer slices
import jobseekerReducer from "../redux/reducers/user.reducer";
import { ThemeReducer } from "./reducers/theme.reducer.js";
// import CartReducer from './Cart/CartReducer';
// import WishListReducer from './WishList/wishListReducer';
// import userReducer from './Users/userReducer';

export default combineReducers({
  // cart:CartReducer,
  // wishlist:WishListReducer,
  user: jobseekerReducer,
  theme: ThemeReducer,
});
