import React from "react";
import { Redirect, Route } from "react-router-dom";
import Cookie from "js-cookie";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = Cookie.get("access_token");

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
