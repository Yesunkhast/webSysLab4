import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Header from "./header";
import Place from "./place";
import "../style/home.css";

const Places = () => {
  const {uid} = useParams();

  const [places, setPlaces] = useState([]);
  const [keys, setKeys] = useState();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("users")) || {};

    const userPlaces = storedData[uid]?.places || {};
    const allPlaces = Object.keys(userPlaces).map((key) => ({
      key,
      ...userPlaces[key],
    }));

    setPlaces(allPlaces);
  }, []);

  function remove(key) {
    const updatedPlaces = places.filter((place) => place.key !== key);
    setPlaces(updatedPlaces);
  }

  console.log("places", places);

  return (
    <div className="home">
      <Header
        name={uid + "'s places"}
        link={`/${uid}/places/new`}
        title={"Add place"}
      />
      {places.length > 0 ? (
        places.map((place) => (
          <Place
            key={place.id}
            image={place.image}
            id={place.key}
            title={place.title}
            description={place.description}
            cordinates={place.cordinates}
            delete={remove}
          />
        ))
      ) : (
        <h1>Gazar oldsongue hu.</h1>
      )}
    </div>
  );
};

export default Places;
