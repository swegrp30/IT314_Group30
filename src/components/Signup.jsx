import "../style/Login.css";
import hero from "../Images/hero.png";
import logo from "../Images/logo.png";
import google from "../Images/google.png";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import UserContext from "../Context/UserContext";
import axios from "axios";

import React from "react";

const Signup = (props) => {
  const context = useContext(UserContext);
  const { user } = context;

  const [data, setData] = useState({
    name: "",
    username: "",
    email: user.email,
    password: "",
    phone: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!data?.name) {
      toast.error("Name is required");
    } else if (!data?.username) {
      toast.error("User Name is required");
    } else if (!data?.phone) {
      toast.error("Phone Number is required");
    } else if (data?.phone.length != 10) {
      toast.error("Phone Number not valid");
    } else if (!data?.password) {
      toast.error("Password  is required");
    } else if (data?.password.length < 4) {
      toast.error("Password  of atleast 4 characters is required");
    } else if (!data?.password.length > 10) {
      toast.error("Password of atmost 10 characters is required");
    } else {
      // console.log(data)
      try {
        const res = await axios
          .post("http://localhost:7000/signup", {
            name: data.name,
            username: data.username,
            email: data.email,
            password: data.password,
            phone: data.phone,
          })
          const data1 = res.data.token
          localStorage.setItem("authToken", data1);
          navigate('/')
      } catch (err) {
        if (err.response) {
          // ✅ log status code here
          console.log(err.response.status);
          console.log(err.message);
          console.log(err.response.headers); // 👉️ {... response headers here}
          console.log(err.response.data); // 👉️ {... response data here}
        }
      }
    }
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  return (
    <div className="signupform d-flex flex-row">
      <div className="left d-flex flex-column">
        <div className="text-header text-center mx-auto  text-white p-5">
          Predict and Visualize the stock price daily
        </div>
        <div className="hero mx-auto my-auto">
          <img className="image-hero" src={hero} />
        </div>
      </div>
      <div className="right d-flex flex-column align-items-start">
        <ToastContainer />
        <div className="detailform my-5 mx-5 w-100">
          <div className="logo">
            <img src={logo} className="logo-main" alt="" />
          </div>
          <div className="text-medium  text-black">Create account</div>
          <div className="text-small  text-black">
            For Traders and Investors
          </div>
          <form className="form-edit row g-3 mt-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastname" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={handleChange}
              />
            </div>

            {/* <div className="col-md-6">
              <label htmlFor="date" className="form-label">
                Date of Birth
              </label>
              <input type="date" className="form-control" name='dob' onChange={handleChange}/>
            </div> */}
            <div className="col-md-6">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="firstname" className="form-label">
                Phone
              </label>
              <input
                type="number"
                className="form-control"
                name="phone"
                onChange={handleChange}
              />
            </div>
            {/* <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Confirm Password
              </label>
              <input type="password" className="form-control" name="confirmpassword" onChange={handleChange}/>
            </div> */}
            <div className="col-md-6">
              <button
                type="submit"
                className="btn btn-primary mt-3"
                onClick={handleSubmit}
              >
                Create Account
              </button>
            </div>
            {/* <div className="col-md-6">
            <button  className="btn btn-secondary">Sign in with Google </button>
            </div> */}
          </form>
          <div className="pt-3">
            Already have account?
            <button className="colorChange" onClick={() => navigate("/login")}>
              <p> &nbsp; Log in</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
