import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivetRouter = ({children}) => {
  const { user, loading} = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <h1>LOading</h1>
    }
  if (user) {
    return children
  }
  return <div>
        <Navigate to={'/login'} state={location?.pathname}></Navigate>
  </div>;
};

export default PrivetRouter;
