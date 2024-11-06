import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {AuthProvider} from "./context/authContext";
import Home from "./pages/home";
import Places from "./pages/places";
import Authenticate from "./pages/authenticate";
import EditPlace from "./pages/editPlace.jsx";
import PrivateRoute from "./pages/privateRoute";
import NoPage from "./pages/noPage.jsx";
import Detail from "./pages/detail.jsx";
import NewPlace from "./pages/newPlace.jsx";
import React from "react";

function App() {

  // const [data, setData] = React.useState({});
 
  // React.useEffect(()=> {
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:4000", {
  //       method: "GET"
  //     });
  //     const json = await response.json();
  //     setData(json)
  //   }

  //   fetchData().catch((e) => console.log(e))

  // },[])

  const places = {
    place1:{
          id: "place1",
          title: "place1",
          users: ["user1","user2","user3"],
          image:
            "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "A scenic view of the mountains.",
          cordinates: "45.4215, -75.6972",
    },
    place2:{
          id: "place2",
          title: "place2",
          users: ["user1", "user2"],
          image:
            "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "A scenic view of the mountains.",
          cordinates: "45.4215, -75.6972",
    },
    place3:{
          id: "place3",
          title: "place3",
          users: ["user1"],
          image:
            "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "A scenic view of the mountains.",
          cordinates: "45.4215, -75.6972",
    },
  }
  const userPlaces = {
        userPlace1: {
          user: "user1",
          place: ["place1, place2, place3"]
    },
        userPlace2: {
          user: "user2",
          place: ["place1, place2 "]
    },
        userPlace3: {
          user: "user3",
          place: ["place1"]
    },
  }

  const users = {
    user1:{
      id: "user1",
      name: "user1",
      mail: "user1@gmail.com",
      password: "user1",
      isLogin: false,
      image:
        "https://images.unsplash.com/photo-1616540389399-3033c4ba7072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    user2:{
      id: "user2",
      name: "user2",
      mail: "user2@gmail.com",
      password: "user1",
      isLogin: false,
      image:
        "https://images.unsplash.com/photo-1616540389399-3033c4ba7072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    user3:{
      id: "user3",
      name: "user3",
      mail: "user3@gmail.com",
      password: "user1",
      isLogin: false,
      image:
        "https://images.unsplash.com/photo-1616540389399-3033c4ba7072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  }

  localStorage.setItem("places", JSON.stringify(places));
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("userPlaces", JSON.stringify(userPlaces));

  // console.log("data",data)

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authenticate" element={<Authenticate />} />
          <Route path="/:uid/places" element={<Places />} />
          <Route path="/:pid/detail/:id" element={<Detail />} />
          <Route
            path="/:uid/places/new"
            element={
              <PrivateRoute>
                <NewPlace />
              </PrivateRoute>
            }
          />
          <Route
            path="/:pid/detail/:id/edit"
            element={
              <PrivateRoute>
                <EditPlace />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
