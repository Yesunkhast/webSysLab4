import {useEffect, useState} from "react";
import Header from "./header";
import User from "./user";
import "../style/home.css";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users"));
    if (data) {
      setUsers(Object.entries(data));
    }
  }, []);

  const name = "Нүүр хуудас";

  // users.map((user) => {
  //   console.log(user[1].password);
  // });

  return (
    <>
      <Header name={name} link={"/authenticate"} title={"Login / Register"} />

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
