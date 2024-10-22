import {useContext, useState} from "react";
import AuthContext from "../context/authContext";
import {useNavigate} from "react-router-dom";
import "../style/editplace.css";

const Authenticate = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [credentials, setCredentials] = useState({mail: "", password: ""});
  const [newuser, setNewuser] = useState({
    mail: "",
    password: "",
    image: "",
    name: "",
    id: "",
    isLogin: false,
    places: [],
  });
  const {login, register} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user4 = {mail: credentials.mail, password: credentials.password};
    login(user4);
    navigate("/");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const user4 = {
      mail: newuser.mail,
      password: newuser.password,
      image: newuser.image,
      name: newuser.name,
      id: newuser.name,
      isLogin: false,
      places: [],
    };
    register(user4);
    navigate("/");
  };

  return (
    <div className="box">
      <div className="container">
        <div className="form">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={credentials.mail}
              onChange={(e) =>
                setCredentials({...credentials, mail: e.target.value})
              }
            />
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({...credentials, password: e.target.value})
              }
            />
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="form">
          <h1>Register</h1>
          <form onSubmit={handleRegister}>
            <input
              type="email"
              placeholder="Email"
              value={newuser.mail}
              onChange={(e) => setNewuser({...newuser, mail: e.target.value})}
            />
            <input
              type="text"
              placeholder="Name"
              value={newuser.name}
              onChange={(e) => setNewuser({...newuser, name: e.target.value})}
            />
            <input
              type="password"
              placeholder="Password"
              value={newuser.password}
              onChange={(e) =>
                setNewuser({...newuser, password: e.target.value})
              }
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newuser.image}
              onChange={(e) => setNewuser({...newuser, image: e.target.value})}
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Authenticate;
