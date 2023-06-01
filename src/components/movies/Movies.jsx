import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../Home/Home.module.css";
import { Link } from "react-router-dom";

function Movies() {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [trendingMovies, setTrendingMovies] = useState([]);
  async function gitTrendingItems(mediaType, coalBack) {
    let { data } = await axios.get(
      // `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=96236a4aa06f5d0af259ce2d6e42c67d`
      `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=96236a4aa06f5d0af259ce2d6e42c67d`
    
      );
    coalBack(data.results);
  }
  useEffect(() => {
    gitTrendingItems("movie", setTrendingMovies);
  }, []);
  return (
    
    <div className=" continuer py-4 ">
      <div className="row">
        <div className="col-md-4 col-sm-12  d-flex align-items-center">
          <div className="w-100">
            <div className={`w-25 ${styles.border} mb-3`}></div>
            <h2>trending </h2>
            <h2>Movies </h2>
            <h2>To Watched now </h2>
            <p>Most Watched movies by day</p>
            <div className={`w-100 ${styles.border} mb-3`}></div>
          </div>
        </div>
        {trendingMovies.map((movie, index) => (
          <div className="col-md-2 col-sm-12 my-3 " key={index}>
            <div className="col-md-2 col-sm-12 my-3 ">
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
      </div>
    </div>
  );
}

export default Movies;
