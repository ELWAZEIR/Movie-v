import React from "react";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bolder" to="home">
            Night
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {props.userData ? (
                <>
                 
                  <li className="nav-item">
                  <Link className="nav-link" to="Home">
                    Home
                  </Link>
                </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="movies">
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="tv">
                 TV Shows
                </Link>
              </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="people">
                      People
                    </Link>
                  </li>
                 
                 
                </>
              ) : (
                ""
              )}
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item me-3 d-flex align-items-center">
                <i className="fab fa-instagram mx-2" style={{ cursor: "pointer" }}></i>
                <i className="fab fa-facebook mx-2" style={{ cursor: "pointer" }}></i>
                <i className="fab fa-youtube mx-2" style={{ cursor: "pointer" }}></i>
                <i className="fab fa-spotify mx-2" style={{ cursor: "pointer" }}></i>
              </li>
              {props.userData ? (
                <>
                  <li className="nav-item " style={{ cursor: "pointer" }}>
                    <span onClick={props.logOut} className="nav-link ">
                      logOut
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="register">
                      register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="login">
                      login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
