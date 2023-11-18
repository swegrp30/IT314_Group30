import "../style/Login.css";
import hero from "../Images/hero.png";
import logo from "../Images/logo.png";
import google from "../Images/google.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {ToastContainer,toast} from 'react-toastify';
//import {FcGoogle} from 'react-icons/fc';

import React from "react";

const Signup = () => {
  const [form,setForm]= useState({
    firstname:'',
    lastname:'',
    email:'',
    dob:'',
    password:'',
    confirmpassword:''    
    
    
  })
  const navigate = useNavigate();
  const handleSubmit =(e)=>{
      e.preventDefault()
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if(!form?.firstname){
        toast.error('First Name is required')
      }
      else if(!form?.lastname){
        toast.error('Last Name is required')
      }
      else if(!form?.dob){
        toast.error('Date of Birth  is required')
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
      else if(!regex.test(form?.email)){
        toast.error('Invalid Email')
      }
      else if(form?.password!=form?.confirmpassword){
        toast.error('Password and confirm password should be same')
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
          <div className="text-medium  text-black">Create account</div>
          <div className="text-small  text-black">
            For Traders and Investors
          </div>
          <form className="form-edit row g-3 mt-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="firstname" className="form-label">
                First Name
              </label>
              <input type="text" className="form-control" name='firstname' onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastname" className="form-label">
                Last Name
              </label>
              <input type="text" className="form-control" name='lastname' onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" name="email" onChange={handleChange}/>
            </div>
            <div className="col-md-6">
              <label htmlFor="date" className="form-label">
                Date of Birth
              </label>
              <input type="date" className="form-control" name='dob' onChange={handleChange}/>
            </div>
            <div className="col-md-6">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" name="password" onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Confirm Password
              </label>
              <input type="password" className="form-control" name="confirmpassword" onChange={handleChange}/>
            </div>
            <div className="col-md-6">
            <button type="submit" className="btn btn-primary">Create Account</button>
            </div>
            <div className="col-md-6">
            <button  className="btn btn-secondary">Sign in with Google </button>
            </div>
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
