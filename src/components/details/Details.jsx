import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const params = useParams();
  const [details, setDetails] = useState({});

  async function getDetails() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${params.dataType}/${params.id}?api_key=96236a4aa06f5d0af259ce2d6e42c67d&language=en-US`
    );
    setDetails(data);
   
  }

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
   
      {params.dataType === "movie" ? (
        <div className="row">
          <h1 className="col-12  col-2 d-flex justify-content-center align-items-center mb-3">
            {details.title} 
            
          </h1>
          <div className="row">
            <img
              height={500}
              className="col-6"
              alt="h"
              src={baseUrl + details.poster_path}
            />
            <p className="col-6 fs-4 mt-5">
              <span className="d-flex justify-content-center align-items-center mb-5">
                Rate : {details.vote_average}
              </span>
              {details.overview}
            </p>
          </div>
        </div>
      ) : params.dataType === "tv" ? (
        <div className="row">
          <h1 className="col-12  col-2 d-flex justify-content-center align-items-center mb-3">
            {details.name}
          </h1>
          <div className="row">
            <img
              height={500}
              className="col-6"
              alt="h"
              src={baseUrl + details.backdrop_path}
            />
            <p className="col-6 fs-4 mt-5">
              <span className="d-flex justify-content-center align-items-center mb-5">
                Rate : {details.vote_average}
              </span>
              {details.overview}
            </p>
          </div>
        </div>
      ) : params.dataType === "person" ? (
        <div className="row">
          <h1 className="col-12  col-2 d-flex justify-content-center align-items-center mb-5">
            {details.name}
          </h1>
          <div className="row">
            <img
              height={500}
              className="col-6 mb-4"
              alt="h"
              src={baseUrl + details.profile_path}
            />
            <div className="col-6 fs-4 mt-5">
            <h1 className="col-12  col-2 d-flex justify-content-center align-items-center mb-5"> Place Of Birth </h1>  
            <span className="d-flex justify-content-center align-items-center  mb-5">
            {details.place_of_birth}
              </span>
              <h1 className="col-12  col-2 d-flex justify-content-center align-items-center mb-5"> Birthay </h1>  
              <span className="d-flex justify-content-center align-items-center  mb-5">
              {details.birthday}
              </span>
              </div>
           
              </div>
              <span className="me-1">  {details.biography}</span>
        </div>
      ) : (
        "something is wrong"
      )}
    </div>
  );
};

export default Details;
