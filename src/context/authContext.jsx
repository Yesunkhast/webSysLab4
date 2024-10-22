import {createContext, useState, useEffect} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState({});
  const [isLogin, setIslogin] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("users"));
    const data = JSON.parse(localStorage.getItem("users"));
    setUsers(data);
    if (storedUser) setUser(storedUser);
  }, []);

  const register = (user4) => {
    setIslogin(true);
    const newUser = JSON.stringify(user4);
    setUser(newUser);
    localStorage.setItem("users", JSON.stringify({...users, user4}));
    console.log(user4);
  };

  const login = (login) => {
    const users = JSON.parse(localStorage.getItem("users"));
    Object.entries(users).map((user) => {
      if (
        user[1].password.includes(login.password) &&
        user[1].mail.includes(login.mail)
      ) {
        setIslogin(true);
        setUser(user);
        console.log("nervterle", login + user[1]);
        return true;
      }
    });
    // console.log("failed", login + user[1]);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{isLogin, user, login, logout, register}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
