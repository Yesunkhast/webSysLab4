import {useEffect, useState, useContext} from "react";
import AuthContext from "../context/authContext";
import Header from "./header";
import User from "./user";
import "../style/home.css";

const Home = () => {
  const [users, setUsers] = useState([]);
  const {isLogin, user} = useContext(AuthContext);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users"));
    if (data) {
      setUsers(Object.entries(data));
    }
  }, []);

  const name = "Нүүр хуудас";

  var title = "Login / Register";
  if (isLogin === true) {
    // title = user[1].name;
  }
  // console.log(users);
  return (
    <>
      <Header name={name} link={"/authenticate"} title={title} />

      <div className="home">
        {users.map(([key, user]) => {
          return (
            <User
              key={key}
              name={user.name}
              image={user.image}
              mail={user.mail}
              place={user.place}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
