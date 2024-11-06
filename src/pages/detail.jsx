import React from "react";
import {useParams} from "react-router-dom";
import Header from "./header";
import "../style/detail.css";
// import "../style/home.css";

const Detail = () => {
  const {id, pid} = useParams();
  const [place, setPlaces] = React.useState({});
  React.useEffect(() => {
    const place = JSON.parse(localStorage.getItem("places")) || {};
    console.log(place)
    setPlaces(place[id]);
  }, [pid,id]);

  return (
    <div className="detail-container">
      <Header name={place.title} link={`/${pid}/detail/${place.id}/edit`} title={"Edit"}/>
      <div className="detail-content">
        <img src={place.image} alt={place.title} className="detail-image" />
        <div className="detail-info">
          <h2>{place.description}</h2>
          {place.cordinates === undefined ? (
            <h2>150</h2>
          ) : (
            <h2>{place.cordinates}</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
