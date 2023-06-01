import React from "react";
import { useState } from "react";
import axios from "axios";
import Joi from "joi";
import { useNavigate } from "react-router-dom";
function Login(props) {
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const [errorList, setErrorList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  function getUser(e) {
    user[e.target.name] = e.target.value;
    setUser(user);
  }
  async function submitLogin(e) {
    e.preventDefault();
    setLoading(true);
    let validateResult = validateLoginForm(user);
    if (validateResult.error) {
      setLoading(false);
      setErrorList(validateResult.error.details);
    } else {
      let { data } = await axios.post(
        "https://route-movies-api.vercel.app/signin",
        user
      );

      if (data.message === "success") {
        localStorage.setItem("user-Token", data.token);
        setLoading(false);
        props.getUserData();
        navigate("/home");
      } else {
        setError(data.message);
        setLoading(false);
      }
    }
  }
  function validateLoginForm(user) {
    let schema = Joi.object({
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string().pattern(new RegExp("^[a-z][0-9]{3}$")),
    });
    return schema.validate(user, { abortEarly: false });
  }
  return (
    <div>
      <h2 className="my-3 ">Login Now</h2>
      {errorList.map((error, index) => {
        if (index === 2) {
          return (
            <div key={index} className="alert alert-danger">
              password invalid{" "}
            </div>
          );
        } else {
          return (
            <div key={index} className="alert alert-danger">
              {error.message}{" "}
            </div>
          );
        }
      })}
      {error ? <div className="alert alert-danger">{error}</div> : ""}

      <form onSubmit={submitLogin}>
        <label htmlFor="email">email</label>
        <input
          onChange={getUser}
          type="text"
          className="form-control my-3"
          name="email"
          id="email"
        />

        <label htmlFor="password">password</label>
        <input
          onChange={getUser}
          type="password"
          className="form-control my-3"
          name="password"
          id="password"
        />

        <button type="submit" className="btn btn-outline-info">
          {loading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
