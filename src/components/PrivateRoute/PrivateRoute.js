import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log("inside private route");
  console.log("loading ", loading, "user ", user);
  if (loading) {
    return <div>Loading....</div>;
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ form: location }} replace />;
};

export default PrivateRoute;
