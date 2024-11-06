import React from "react";
import {Navigate} from "react-router-dom";
import AuthContext from "../context/authContext";
// import Authenticate from "./pages/authenticate";

const PrivateRoute = ({children}) => {
  const {isLogin} = React.useContext(AuthContext);

  return isLogin === false ? <Navigate to="/authenticate" /> : <>{children}</>;
  // return isLogin === false ? <Navigate to="/authenticate" /> : <div>{children}</div>;
};

export default PrivateRoute;
