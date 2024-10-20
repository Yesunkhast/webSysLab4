import {createContext, useState, useEffect} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [isLogin, setIslogin] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("users"));
    if (storedUser) setUser(storedUser);
  }, []);

  const register = (userData) => {
    setIslogin(true);
    localStorage.setItem("users", JSON.stringify(userData));
    console.log(userData);
  };

  const login = (login) => {
    const users = JSON.parse(localStorage.getItem("users"));
    Object.entries(users).map((user) => {
      if (
        user[1].password.includes(login.password) &&
        user[1].mail.includes(login.mail)
      ) {
        setIslogin(true);
        console.log("nervterle", login + user[1]);
        return true;
      } else {
        console.log("failed", login + user[1]);
        return false;
      }
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{isLogin, login, logout, register}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
