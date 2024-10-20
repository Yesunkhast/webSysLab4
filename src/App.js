import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {AuthProvider} from "./context/authContext";
import Home from "./pages/home";
import Places from "./pages/places";
import Authenticate from "./pages/authenticate";
import NewPlace from "./pages/newPlace";
import EditPlace from "./pages/editPlace";
import PrivateRoute from "./pages/privateRoute";
import NoPage from "./pages/noPage.jsx";
import Detail from "./pages/detail.jsx";

function App() {
  const sampleUsers = {
    user1: {
      id: "user1",
      name: "user1",
      mail: "user1@gmail.com",
      password: "user1",
      isLogin: false,
      image:
        "https://images.unsplash.com/photo-1616540389399-3033c4ba7072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      places: [
        {
          id: 0,
          title: "place1",
          image:
            "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "A scenic view of the mountains.",
          cordinates: "45.4215, -75.6972",
        },
        {
          id: 1,
          title: "place2",
          image:
            "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

          description: "A peaceful park in the city.",
          cordinates: "40.7128, -74.0060",
        },
        {
          id: 2,
          title: "place3",
          image:
            "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

          description: "A historic monument by the sea.",
          cordinates: "51.5074, -0.1278",
        },
      ],
    },

    user2: {
      id: "user2",
      name: "user2",
      mail: "user2@gmail.com",
      password: "user2",
      isLogin: false,
      image:
        "https://images.unsplash.com/photo-1616540389399-3033c4ba7072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      places: [
        {
          id: 0,
          title: "place1",
          image:
            "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

          description: "description",
          cordinates: "cordinates",
        },
        {
          id: 2,
          title: "place2",
          image:
            "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

          description: "description",
          cordinates: "cordinates",
        },
      ],
    },
    user3: {
      id: "user3",
      name: "user3",
      mail: "user3@gmail.com",
      password: "user3",
      isLogin: false,
      image:
        "https://images.unsplash.com/photo-1616540389399-3033c4ba7072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      places: [
        {
          id: 0,
          title: "place1",
          image:
            "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

          description: "description",
          cordinates: "cordinates",
        },
        {
          id: 1,
          title: "place3",
          image:
            "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

          description: "description",
          cordinates: "cordinates",
        },
      ],
    },
  };

  const user4 = {
    id: "user3",
    name: "user3",
    mail: "user3@gmail.com",
    password: "user3",
    isLogin: false,
    image:
      "https://images.unsplash.com/photo-1616540389399-3033c4ba7072?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    places: [
      {
        id: 0,
        title: "place1",
        image:
          "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description: "description",
        cordinates: "cordinates",
      },
      {
        id: 2,
        title: "place3",
        image:
          "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        description: "description",
        cordinates: "cordinates",
      },
    ],
  };

  localStorage.setItem("users", [JSON.stringify(sampleUsers)]);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authenticate" element={<Authenticate />} />
          <Route path="/:uid/places" element={<Places />} />
          <Route path="/:pid/detail/:id" element={<Detail />} />
          <Route
            path="/places/new"
            element={
              <PrivateRoute>
                <NewPlace />
              </PrivateRoute>
            }
          />
          <Route
            path="/places/:pid"
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
