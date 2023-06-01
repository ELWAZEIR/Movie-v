import React, { useContext } from "react";
import { MediaContext } from "../../context/MediaContext";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
function Home() {
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  let { trendingMovies, trendingTV, persons } = useContext(MediaContext);

  return (
    <div className="row continuer py-4 ">
      <div className={`w-100 ${styles.border} mb-3`}></div>
      <h2 className="d-flex justify-content-center">All Trending This Week</h2>
      <div className={`w-100 ${styles.border} mb-3`}></div>
      <div className="d-flex flex-wrap">
      {trendingTV.map((tv, index) => (
        <div className="col-md-2 my-3 " key={index}>
          <div>
            <Link to={`/Details/${tv.id}/tv`}>
              <img
                className="mb-2"
                width={100}
                src={baseUrl + tv.poster_path}
                alt="error hossam in file Home"
              />
            </Link>
            <h5>{tv.name}</h5>
          </div>
        </div>
      ))}
      {trendingMovies.map((movie, index) => (
        <div className="col-md-2 my-3 " key={index}>
          <div>
            <Link to={`/Details/${movie.id}/movie`}>
              <img
                className="mb-2"
                width={100}
                src={baseUrl + movie.poster_path}
                alt="error hossam in file Home"
              />
            </Link>
            <h5>{movie.title}</h5>
          </div>
        </div>
      ))}
      {persons.map((person, index) => (
        <div className="col-md-2 my-3 " key={index}>
          <div>
            <Link to={`/Details/${person.id}/person`}>
              <img
                className="mb-2"
                width={100}
                src={baseUrl + person.profile_path}
                alt="error  in file Home hossam"
              />
            </Link>
            <h5>{person.name}</h5>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Home;
