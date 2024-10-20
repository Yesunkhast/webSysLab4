import {Link} from "react-router-dom";
import "../style/header.css";
const Header = (props) => {
  return (
    <header className="header">
      <h2>{props.name}</h2>
      <div>
        <Link to={props.link}>{props.title}</Link>
      </div>
    </header>
  );
};

export default Header;
