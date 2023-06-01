import React from "react";
import { useState } from "react";
import axios from "axios";
import Joi from "joi";
import { contains } from "jquery";
import { useNavigate } from "react-router-dom";
function Register() {
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const [errorList, setErrorList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: "",
    email: "",
    password: "",
  });
  function getUser(e) {
    user[e.target.name] = e.target.value;
    setUser(user);
  }
  async function submitRegister(e) {
    e.preventDefault();
    setLoading(true);
    let validateResult = validateRegisterForm(user);
    if (validateResult.error) {
      setLoading(false);
      setErrorList(validateResult.error.details);
    } else {
      let { data } = await axios.post(
        "https://route-movies-api.vercel.app/signup",
        user
      );

      if (data.message === "success") {
        setLoading(false);
        navigate("/login");
      } else {
        setError(data.message);
        setLoading(false);
      }
    }
  }
  function validateRegisterForm(user) {
    let schema = Joi.object({
      first_name: Joi.string().alphanum().min(3).max(8).required(),
      last_name: Joi.string().alphanum().min(3).max(8).required(),
      age: Joi.number().min(18).max(50).required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string().pattern(new RegExp("^[a-z][0-9]{3}$")).required(),
    });
    return schema.validate(user, { abortEarly: false });
  }
  return (
    <div>
      <h2 className="my-3 ">Register Now</h2>
      {errorList.map((error, index) => {
        if (index === 4) {
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

      <form onSubmit={submitRegister}>
        <label htmlFor="first_name">first_Name</label>
        <input
          onChange={getUser}
          type="text"
          className="form-control my-3 "
          name="first_name"
          id="first_name"
        />

        <label htmlFor="last_name">last_Name</label>
        <input
          onChange={getUser}
          type="text"
          className="form-control my-3"
          name="last_name"
          id="last_name"
        />

        <label htmlFor="age">age</label>
        <input
          onChange={getUser}
          type="number"
          className="form-control my-3"
          name="age"
          id="age"
        />

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
          {loading ? <i className="fas fa-spinner fa-spin"></i> : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Register;
