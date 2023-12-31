import "../style/Login.css";
import hero from "../Images/hero.png";
import logo from "../Images/loginLOGO.svg";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import secureLocalStorage from "react-secure-storage";
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { HStack } from "@chakra-ui/react"

import axios from "axios";

import React from "react";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({

    email: '',
    password: '',


  })
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text')
    } else {
      setIcon(eyeOff)
      setType('password')
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!regex.test(form?.email)) {
      toast.error('Invalid Email')
    }
    else if (!form?.password) {
      toast.error('Password  is required')
    }
    else if (form?.password.length < 4) {
      toast.error('Password  of atleast 4 characters is required')
    }
    else if (!form?.password.length > 10) {
      toast.error('Password of atmost 10 characters is required')
    }

    else {
      try {
        const res = await axios
          .post("https://sharebb-production.up.railway.app/login", {

            email: form.email,
            password: form.password
          })
        const token = res.data.token;
        // console.log(res.data);
        secureLocalStorage.setItem('user', res.data)



        if (token) {
          toast.success("You have logged in successfully")
          localStorage.setItem('authToken', token)
          localStorage.setItem('storageInitializedTime',new Date().getTime().toString())
          setTimeout(function () {
            navigate('/')
          }, 1000);


        }
        else {
          toast.error("Email or password incorrect ")
        }
      }
      catch (err) {
        toast.error("Email ID not registered")
        console.log(err.response.status);
        console.log(err.message);
        console.log(err.response.headers); // 👉️ {... response headers here}
        console.log(err.response.data); // 👉️ {... response data here}
      }
    }

  }
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)

  }
  return (
    <div className="signupform">
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
          <div className="text-medium  text-black">Sign In</div>
          <div className="text-small  text-black">
            Welcome back to the website
          </div>
          <form className="form-edit row g-3 mt-3" >
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control form-control-login"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <HStack>
              <input
                type={type}
                className="form-control form-control-login"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
                <Icon onClick={handleToggle} className="mt-2" icon={icon} size={25} />

              </HStack>
              
            </div>
            <div className="col-md-5">
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                Sign In
              </button>
            </div>

          </form>

          <div>
            <div className="mt-3">
              Don't have an account?
              <button className="colorChange" onClick={() => navigate("/signupwithemail")}>
                <span> &nbsp; Sign Up</span>
              </button>
            </div>
            <div className="mt-2">
              Go to
              <span className="colorChange" style={{ cursor: 'pointer' }} onClick={() => navigate("/")}>
                {" "}
                Home
              </span>
            </div>
            <div className="mt-2">
              <button className="colorChange" onClick={() => navigate("/Forgotpassword")}>
                <span>  Forgot Password?</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;

