import {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";

const EditPlace = () => {
  const {pid} = useParams();
  const [placeData, setPlaceData] = useState({
    title: "",
    description: "",
    coordinates: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const place = Object.values(users)
      .flatMap((user) => user.places)
      .find((place) => place.id === pid);
    if (place) setPlaceData(place);
  }, [pid]);

  const handleEditPlace = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const userKey = Object.keys(users).find((key) =>
      users[key].places.some((place) => place.id === pid)
    );
    const updatedPlaces = users[userKey].places.map((place) =>
      place.id === pid ? placeData : place
    );
    users[userKey].places = updatedPlaces;
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/");
  };

  return (
    <div>
      <h1>Edit Place</h1>
      <form onSubmit={handleEditPlace}>
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditPlace;
