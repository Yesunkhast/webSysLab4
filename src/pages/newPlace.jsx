import React from "react";
import {useNavigate} from "react-router-dom";
// import AuthContext from "../context/authContext";
import {useParams} from "react-router-dom";

const NewPlace = () => {
  // const {user} = React.useContext(AuthContext);

  const [Data, setData] = React.useState({
    id: "",
    title: "",
    description: "",
    coordinates: "",
    image: "",
  });
  const [placeData, setPlaceData] = React.useState([]);

  const {uid} = useParams();

  const navigate = useNavigate();

  React.useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const userPlaces = users[uid]?.places || [];
    setPlaceData(userPlaces);
  }, [uid]);

  const handleAddPlace = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (!users[uid]) {
      console.error(`User with ID ${uid} not found.`);
    } else {

      const mergedPlace = {
        ...placeData,
        Data,
      };

      users[uid].places = mergedPlace;

      localStorage.setItem("users", JSON.stringify(users));

      console.log("New place added:", mergedPlace);

      navigate(`/${uid}/places`);
    }
  };

  return (
<div className="container">
        <h1>Add New Place</h1>
        <form onSubmit={handleAddPlace}>
          <input
            type="text"
            placeholder="Title"
            value={Data.title}
            onChange={(e) => setData({...Data, title: e.target.value})}
          />
          <input
            type="number"
            placeholder="ID"
            value={Data.id}
            onChange={(e) => setData({...Data, id: e.target.value})}
          />
          <textarea
            placeholder="Description"
            value={Data.description}
            onChange={(e) => setData({...Data, description: e.target.value})}
          />
          <input
            type="text"
            placeholder="Coordinates"
            value={Data.coordinates}
            onChange={(e) => setData({...Data, coordinates: e.target.value})}
          />{" "}
          <input
            type="text"
            placeholder="Image URl"
            value={Data.image}
            onChange={(e) => setData({...Data, image: e.target.value})}
          />
          <button type="submit">Add Place</button>
        </form>
      </div>
  );
};

export default NewPlace;
