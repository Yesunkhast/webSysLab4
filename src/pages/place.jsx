import {Link} from "react-router-dom";
import "../style/user.css";
import {WiAlien} from "react-icons/wi";

const Place = (props) => {
  return (
    <div className="user" onClick={() => {}}>
      <img src={props.image} alt=""></img>
      <h3>{props.title}</h3>

      <div>
        <Link to={`/user1/detail/${props.id}`}>
          <WiAlien size={80} />
        </Link>
      </div>
    </div>
  );
};

export default Place;
