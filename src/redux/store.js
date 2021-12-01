import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import AuthReducer from "../redux/reducers/user.reducer";
import ErrorReducer from "../redux/reducers/errors.reducer.js";

// Original default Root Reducer - using combineReducers
const rootReducer = combineReducers({
  user: AuthReducer,
});

// Redux-Persist reducer configurations
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

// Finally,we will wrap the persistConfig, rootReducer in persistReducer to create the final rootReducer/combinedReducer
// which will be sent to the store.
const combinedReducers = persistReducer(persistConfig, rootReducer);
const middleware = [logger, thunk];
export const store = createStore(
  combinedReducers,
  applyMiddleware(...middleware)
);
export const persistor = persistStore(store);
// console.log(store.getState());
// export default {store,persistor};
