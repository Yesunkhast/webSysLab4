import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import AuthContext from "../context/authContext";

const NewPlace = () => {
  const {user} = useContext(AuthContext);
  const [placeData, setPlaceData] = useState({
    title: "",
    description: "",
    coordinates: "",
  });
  const navigate = useNavigate();

  const handleAddPlace = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const userPlaces = users[user.id]?.places || [];
    const newPlace = {...placeData, id: Math.random().toString()};
    users[user.id] = {...users[user.id], places: [...userPlaces, newPlace]};
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/");
  };

  return (
    <div>
      <h1>Add New Place</h1>
      <form onSubmit={handleAddPlace}>
        <input
          type="text"
          placeholder="Title"
          value={placeData.title}
          onChange={(e) => setPlaceData({...placeData, title: e.target.value})}
        />
        <textarea
          placeholder="Description"
          value={placeData.description}
          onChange={(e) =>
            setPlaceData({...placeData, description: e.target.value})
          }
        />
        <input
          type="text"
          placeholder="Coordinates"
          value={placeData.coordinates}
          onChange={(e) =>
            setPlaceData({...placeData, coordinates: e.target.value})
          }
        />
        <button type="submit">Add Place</button>
      </form>
    </div>
  );
};

export default NewPlace;
