import "../style/Login.css";
import hero from "../Images/hero.png";
import logo from "../Images/logo.png";
import google from "../Images/google.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify'
//import {FcGoogle} from 'react-icons/fc';

import React from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [form,setForm]= useState({
    
    email:'',
    password:'',
    
    
  })
  const handleSubmit =(e)=>{
    e.preventDefault()
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if(!regex.test(form?.email)){
      toast.error('Invalid Email')
    }
    else if(!form?.password){
      toast.error('Password  is required')
    }
    else if(form?.password.length<4){
      toast.error('Password  of atleast 4 characters is required')
    }
    else if(!form?.password.length>10){
      toast.error('Password of atmost 10 characters is required')
    }
    
    else{
      console.log(form)
      toast.success("You have logged in successfully")
      sessionStorage.setItem('user',JSON.stringify(form))
      setInterval(()=>{
        navigate('/PriceAndAnalysis')
      })
    }

}
const handleChange =(e)=>{
  setForm({...form,[e.target.name]:e.target.value})
  console.log(form)
    
}
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
        <ToastContainer/>
        <div className="detailform my-5 mx-5 w-100">
          <div className="logo">
            <img src={logo} className="logo-main" alt="" />
          </div>
          <div className="text-medium  text-black">Sign In</div>
          <div className="text-small  text-black">
            Welcome back to the website
          </div>
          <form className="form-edit row g-3 mt-3" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </div>
            <div className="col-md-6">
              <button  className="btn btn-secondary">
                Sign in with Google{" "}
              </button>
            </div>
          </form>
          <div className="pt-3">
            Don't have an account?
            <span className="colorChange" onClick={() => navigate("/signup")}>
              {" "}
              Sign Up
            </span>
          </div>

          <div className="pt-4">
            
            <span className="colorChange" onClick={() => navigate("/Forgotpassword")}>
              {" "}
              Forgot Password?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
