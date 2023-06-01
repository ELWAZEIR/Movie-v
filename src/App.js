import Navbar from "./components/navbar/Navbar";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Movies from "./components/movies/Movies";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import NotFound from "./components/notFound/NotFound";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Details from "./components/details/Details";
import TvShows from "./components/tv/TvShows";
import People from "./components/people/People";
import { MediaContextProvider } from "./context/MediaContext";
function App() {
  const [userData, setUserData] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-Token")) {
      getUserData();
    }
  }, []);

  function getUserData() {
    let decodedToken = jwtDecode(localStorage.getItem("user-Token"));
    setUserData(decodedToken);
  }

  function logOut() {
    localStorage.removeItem("userToken");
    setUserData(null);
    navigate("/login");
  }

  // function ProtectedRoute({ children }) {
  //   if (!localStorage.getItem("userToken")) {
  //     return <Navigate to={"/login"} />;
  //   } else {
  //     return children;
  //   }
  // }

  // useEffect(() => {}, userData);
  return (
    <div>
      <Navbar userData={userData} logOut={logOut} />
      <div className="container">
        <MediaContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="people" element={<People />} />
            <Route path="tv" element={<TvShows />} />
            <Route path="movies" element={<Movies />} />
            <Route path="Details/:id/:dataType" element={<Details />} />
            <Route path="login" element={<Login getUserData={getUserData} />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MediaContextProvider>
      </div>
    </div>
  );
}

export default App;
