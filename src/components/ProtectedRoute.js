import React from "react";
import { Redirect, Route } from "react-router-dom";
import Cookie from "js-cookie";
import { useDispatch, useSelector } from "react-redux";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = Cookie.get("access_token");
  const userAuth = useSelector((state) => state.user.is_authenticated);
  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default ProtectedRoute;
