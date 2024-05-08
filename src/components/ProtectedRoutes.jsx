import React from "react";
import { Navigate } from "react-router-dom";
import SignUp from "../pages/SignUp";

function ProtectedRoutes({ children, user }) {
  if (user) {
    return children;
  } else {
    return <Navigate to="/signup" />;
  }
}

export default ProtectedRoutes;
