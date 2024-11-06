import React from "react";

const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = React.useState({});
  const [users, setUsers] = React.useState({});
  const [isLogin, setIslogin] = React.useState(false);

  // React.useEffect(()=> {
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:4000", {
  //       method: "GET"
  //     });
  //     const json = await response.json();
  //     setUsers(Object.entries(json))
  //   }

  //   fetchData().catch((e) => console.log(e))

  // },[])

  const register = (user4) => {
    setIslogin(true);
    const newUser = JSON.stringify(user4);
    setUser(newUser);
    localStorage.setItem("users", JSON.stringify({...users, user4}));
    console.log(user4);
  };

  const login = (login) => {
    const users = JSON.parse(localStorage.getItem("users"));
    Object.values(users).map((user) => {
      if (
        user.password.includes(login.password) &&
        user.mail.includes(login.mail)
      ) {
        setIslogin(true);
        setUser(user);
        console.log("nervterle", login + user);
      }
    });
    return true;
  };

  return (
    <AuthContext.Provider value={{isLogin, user, login, register}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
