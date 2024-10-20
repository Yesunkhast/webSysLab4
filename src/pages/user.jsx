import "../style/user.css";
import {WiAlien} from "react-icons/wi";
import {Link} from "react-router-dom";
const User = (props) => {
  return (
    <div className="user" onClick={() => {}}>
      <img src={props.image} alt=""></img>
      <h3>{props.name}</h3>
      <h3>{props.mail}</h3>
      <h3>{props.place}</h3>
      <div>
        <Link to={`/${props.name}/places`}>
          <WiAlien size={80} />
        </Link>
      </div>
    </div>
  );
};

export default User;
