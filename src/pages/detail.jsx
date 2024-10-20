import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Header from "./header";
import "../style/detail.css";
// import "../style/home.css";

const Detail = () => {
  const {id, pid} = useParams();
  const [place, setPlaces] = useState({});
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    setPlaces(users[pid]?.places[id]);
  }, [id]);

  return (
    <div className="detail-container">
      <Header name={place.title} />
      <div className="detail-content">
        <img src={place.image} alt={place.title} className="detail-image" />
        <div className="detail-info">
          <h2>{place.description}</h2>
          <h2>{place.cordinates}</h2>
        </div>
      </div>
    </div>
  );
};

export default Detail;
