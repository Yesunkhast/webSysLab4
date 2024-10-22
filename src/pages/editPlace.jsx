import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../context/authContext";
import "../style/editplace.css";

const EditPlace = () => {
  const {uid} = useParams();
  const [Data, setData] = useState({
    id: "",
    title: "",
    description: "",
    coordinates: "",
    image: "",
  });
  const [placeData, setPlaceData] = useState([]);
  const navigate = useNavigate();

  const {user} = useContext(AuthContext);

  // useEffect(() => {
  //   const users = JSON.parse(localStorage.getItem("users")) || {};
  //   // const place = Object.values(users).flatMap((user) => user.places);
  //   const userPlaces = users[uid]?.places || [];
  //   setPlaceData(userPlaces);
  // }, [uid]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const userPlaces = users[uid]?.places || [];
    setPlaceData(userPlaces);
  }, []);

  console.log("old places:", placeData);

  const handleEditPlace = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || {};

    const userKey = Object.keys(users).find(
      (key) =>
        // users[key].places.some((place) => place.id === pid)
        null
    );

    if (userKey) {
      const updatedPlaces = users[userKey].places.map(
        (place) =>
          // place.id === pid ? placeData : place
          null
      );
      users[userKey].places = updatedPlaces;

      localStorage.setItem("users", JSON.stringify(users));

      navigate("/");
    }
  };

  const handleAddPlace = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (!users[uid]) {
      console.error(`User with ID ${uid} not found.`);
    } else {
      const userPlaces = users[uid]?.places || [];

      const mergedPlace = {
        ...placeData,
        Data,
      };

      users[uid].places = mergedPlace;

      localStorage.setItem("users", JSON.stringify(users));

      console.log("New place added:", mergedPlace);

      navigate(`/${uid}/places/new`);
    }
  };

  return (
    <div className="box">
      <div className="container">
        <h1>Edit Place</h1>
        <form onSubmit={handleEditPlace}>
          <input
            type="text"
            placeholder="Title"
            value={placeData.title}
            onChange={(e) =>
              setPlaceData({...placeData, title: e.target.value})
            }
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
          <input
            type="text"
            placeholder="Image URl"
            value={placeData.image}
            onChange={(e) =>
              setPlaceData({...placeData, image: e.target.value})
            }
          />
          <button type="submit">Save Changes</button>
        </form>
      </div>
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
    </div>
  );
};

export default EditPlace;
