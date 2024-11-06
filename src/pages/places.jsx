import {useParams} from "react-router-dom";
import React from "react";
import Header from "./header";
import Place from "./place";
import "../style/home.css";

const Places = () => {
  const {uid} = useParams();

  const [places, setPlaces] = React.useState({});

  React.useEffect(() => {
    const places = JSON.parse(localStorage.getItem("places")) || {};
    setPlaces(places);
  }, [uid]);

  //delete hih api der
  function remove(key) {
    const updatedPlaces = places.filter((place) => place.key !== key);
    setPlaces(updatedPlaces);
  }

  // console.log("places", Object.values(places).map((e)=>{
  //   return e.users.includes(uid)
  // }));

  return (
    <div className="home">
      <Header
        name={uid + "'s places"}
        link={`/${uid}/places/new`}
        title={"Add place"}
      />
      {
        Object.values(places).map((place)=>{
          if(place.users.includes(uid))
          return (
          <Place
            image={place.image}
            id={place.id}
            title={place.title}
            description={place.description}
            cordinates={place.cordinates}
            delete={remove}
          />)
          else
          (
        <h1>Gazar oldsongue hu.</h1>
      )
        })
      }
    </div>
  );
};

export default Places;
