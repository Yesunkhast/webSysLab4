import {useContext} from "react";
import {Navigate} from "react-router-dom";
import AuthContext from "../context/authContext";
// import Authenticate from "./pages/authenticate";

const PrivateRoute = ({children}) => {
  const {isLogin} = useContext(AuthContext);

  return isLogin === false ? <Navigate to="/authenticate" /> : <div>{children}</div>;
};

export default PrivateRoute;
