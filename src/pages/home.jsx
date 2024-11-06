import React from "react";
import AuthContext from "../context/authContext";
import Header from "./header";
import User from "./user";
import "../style/home.css";

const Home = () => {
  const [users, setUsers] = React.useState({});
  const {isLogin, user} = React.useContext(AuthContext);

    const [data, setData] = React.useState({});
 
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

  React.useEffect(()=> {
    const users = localStorage.getItem("users");
    setUsers(JSON.parse(users));
  },[])
  console.log(users)

  const name = "Нүүр хуудас";

  var title = "Login / Register";

  return (
    <>
      <Header name={name} link={"/authenticate"} title={title} />

      <div className="home">
        {Object.values(users).map((user) => {
          return (
            <User
              key={user.id}
              name={user.name}
              image={user.image}
              mail={user.mail}
            />
          );
        })}

      </div>
    </>
  );
};

export default Home;
