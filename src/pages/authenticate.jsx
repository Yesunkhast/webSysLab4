import {useContext, useState} from "react";
import AuthContext from "../context/authContext";
import {useNavigate} from "react-router-dom";

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
    const userData = {mail: credentials.mail, password: credentials.password};
    login(userData);
    navigate("/");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const userData = {
      mail: newuser.mail,
      password: newuser.password,
      image: newuser.image,
      name: newuser.name,
      id: newuser.name,
      isLogin: false,
      places: [],
    };
    register(userData);
    navigate("/");
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={credentials.email}
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
      <div>
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            value={newuser.mail}
            onChange={(e) => setNewuser({...newuser, mail: e.target.value})}
          />
          <input
            type="name"
            placeholder="Name"
            value={newuser.name}
            onChange={(e) => setNewuser({...newuser, name: e.target.value})}
          />
          <input
            type="password"
            placeholder="Password"
            value={newuser.password}
            onChange={(e) => setNewuser({...newuser, password: e.target.value})}
          />
          <input
            type="img"
            placeholder="Image URL"
            value={newuser.image}
            onChange={(e) => setNewuser({...newuser, image: e.target.value})}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Authenticate;
