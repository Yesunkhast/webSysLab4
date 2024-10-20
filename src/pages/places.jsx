import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Header from "./header";
import Place from "./place";
import "../style/home.css";

const Places = () => {
  const {uid} = useParams();
  const [places, setPlaces] = useState({});

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    setPlaces(users[uid]?.places);
  }, [uid]);

  return (
    <div className="home">
      <Header
        name={uid + "'s places"}
        link={"/places/new"}
        title={"Add place"}
      />
      {places.length > 0 ? (
        places.map((place, index) => (
          <Place
            key={place.id}
            image={place.image}
            id={place.id}
            title={place.title}
            description={place.description}
            cordinates={place.cordinates}
          />
        ))
      ) : (
        <p>No places available.</p>
      )}
    </div>
  );
};

export default Places;
