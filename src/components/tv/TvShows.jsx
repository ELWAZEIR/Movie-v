import React, { useContext} from "react";
import styles from "../Home/Home.module.css";
import { Link } from "react-router-dom";
import { MediaContext } from "../../context/MediaContext";
export default function TvShows () {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
let {trendingTV}=useContext(MediaContext)


  return (
    <div className=" continuer py-4 ">
    <div className="row">
    <div className="col-md-4 d-flex align-items-center">
      <div className="w-100">
        <div className={`w-25 ${styles.border} mb-3`}></div>
        <h2>trending </h2>
        <h2>tv show </h2>
        <h2>To Watched now </h2>
        <p>Most Watched tv shows by day</p>
        <div className={`w-100 ${styles.border} mb-3`}></div>
      </div>
    </div>
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
  </div>
  </div>
  )
}
