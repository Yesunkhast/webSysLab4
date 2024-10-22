import {Link, useParams} from "react-router-dom";
import "../style/user.css";
import {WiAlien, WiDayLightning} from "react-icons/wi";

const Place = (props) => {
  const {uid} = useParams();
  return (
    <div className="user">
      <img src={props.image} alt={props.title}></img>
      <h3>{props.title}</h3>

      <div>
        <Link to={`/${uid}/detail/${props.id}`}>
          <WiAlien size={80} />
        </Link>
      </div>

      <div>
        <WiDayLightning size={80} onClick={() => props.delete(props.id)} />
      </div>
    </div>
  );
};

export default Place;
