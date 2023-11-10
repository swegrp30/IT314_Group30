import "../style/Login.css";
import hero from "../Images/hero.png";
import logo from "../Images/logo.png";
import google from "../Images/google.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import {FcGoogle} from 'react-icons/fc';

import React from "react";

const Signup = () => {
  const navigate = useNavigate();
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
              <label htmlFor="inputEmail4" className="form-label">
                First Name
              </label>
              <input type="text" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Last Name
              </label>
              <input type="text" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Date of Birth
              </label>
              <input type="date" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Confirm Password
              </label>
              <input type="password" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-md-6">
            <button type="submit" className="btn btn-primary">Create Account</button>
            </div>
            <div className="col-md-6">
            <button type="submit" className="btn btn-secondary">Sign in with Google </button>
            </div>
          </form>
          <div className="pt-3">
            Already have account?
            <span className="colorChange" onClick={() => navigate("/login")}>
              {" "}
              Log in
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
