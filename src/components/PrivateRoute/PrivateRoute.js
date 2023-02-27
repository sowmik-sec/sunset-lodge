import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  if (user) {
    return children;
  } else {
    navigate("/login");
  }
};

export default PrivateRoute;
