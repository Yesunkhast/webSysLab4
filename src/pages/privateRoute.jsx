import {useContext} from "react";
import {Navigate} from "react-router-dom";
import AuthContext from "../context/authContext";

const PrivateRoute = ({children}) => {
  const {isLogin} = useContext(AuthContext);

  return isLogin === false ? <Navigate to="/authenticate" /> : <>{children}</>;
};

export default PrivateRoute;
