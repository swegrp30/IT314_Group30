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
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                First Name
              </label>
              <input type="text" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Last Name
              </label>
              <input type="text" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Date of Birth
              </label>
              <input type="date" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Password
              </label>
              <input type="password" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Confirm Password
              </label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-md-6">
            <button type="submit" class="btn btn-primary">Create Account</button>
            </div>
            <div class="col-md-6">
            <button type="submit" class="btn btn-primary">Sign in with Google </button>
            </div>
          </form>
          <div className="pt-3">
            Don't have an account?
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
