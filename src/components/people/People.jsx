import styles from "../Home/Home.module.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { MediaContext } from "../../context/MediaContext";

function People() {
 let {persons}=useContext(MediaContext)
  const baseUrl = "https://image.tmdb.org/t/p/original/";
 
  return (
    <div className=" continuer py-4 ">
      <div className="row">
        <div className="col-md-4 d-flex align-items-center">
          <div className="w-100">
            <div className={`w-25 ${styles.border} mb-3`}></div>
            <h2>trending </h2>
            <h2>person </h2>
            <h2>To Watched now </h2>
            <p>Most Watched person by day</p>
            <div className={`w-100 ${styles.border} mb-3`}></div>
          </div>
        </div>
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

export default People;
