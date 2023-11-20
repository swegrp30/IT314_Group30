import "../style/Login.css";
import hero from "../Images/hero.png";
import logo from "../Images/logo.png";
import google from "../Images/google.png";
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import UserContext from "../Context/UserContext";
import Signup from "./Signup";
//import {FcGoogle} from 'react-icons/fc';
import axios from "axios";
import { HStack } from "@chakra-ui/layout";
import React from "react";
import Timer from "./Timer";

const Signupemail = () => {
    const context = useContext(UserContext);
    const {setValueEmail}=context;
    // console.log(context)  
  const [form, setForm] = useState({
    email: "",
    otp: "",
  });

  const [showTimer, setShowTimer] = useState(false);
  const [showResend, setResend] = useState(false);




  const handleTimerComplete = () => {
    setShowTimer(false);
    setResend(true);
    
  };

  const navigate = useNavigate();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    setShowTimer(true);
    if (!regex.test(form?.email)) {
      toast.error("Invalid Email");
    } else {
      try {
        const res = await axios.post("http://localhost:7000/verifyEmail", {
          email: form.email,
        });
        const data = res.status;
        if (data === 200) {
          const changeClass1 = document.querySelector(".send");
          const changeClass2 = document.querySelector(".verify");
          setValueEmail(form.email)  
          changeClass1.classList.add("d-none");
          changeClass2.classList.remove("d-none");
        }
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
  const handleResubmit = async(e)=>{
    e.preventDefault()
    setShowTimer(true);
    try {
        const res = await axios.post("http://localhost:7000/verifyEmail", {
          email: form.email,
        });
        console.log("OTP Resent")

  }
  catch (err) {
    if (err.response) {
      // ✅ log status code here
      console.log(err.response.status);
      console.log(err.message);
      console.log(err.response.headers); // 👉️ {... response headers here}
      console.log(err.response.data); // 👉️ {... response data here}
    }
  }
}
  const handleVerifyOTP = async(e) => {

    e.preventDefault();
    if (!form.otp) {
        toast.error("OTP is required");
      } else {
        try {
          const res = await axios.post("http://localhost:7000/otp_verification", {
            email: form.email,
            otp:form.otp
          });
          const data = res.status;
          if(data===200){
            
            navigate('/signup')
          }
          else if(data===288){
            toast.error("Incorrect OTP. Please enter again.")
          }
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
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const backToSignup = () => {
    navigate('/signupwithemail')
  }
  return (
    <div>
        <div className="d-none">
        <Signup email = {form.email}/>
        </div>
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
          <form className="form-edit  g-2 mt-3">
            <div className="send">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSendOTP}
                  
                >
                  Send OTP
                </button>
              </div>
            </div>
            <div className="verify d-none">
              <div className="col-md-6">
                <label htmlFor="OTP" className="form-label">
                  OTP
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="otp"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mt-3">
                <HStack>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleVerifyOTP}
                >
                  Verify OTP
                </button>

                <button
                  type="submit"
                  className="btn btn-primary"
                    onClick={backToSignup}
                >
                  Back
                </button>
                {showTimer && <Timer onComplete={handleTimerComplete} />}

                </HStack>

                
              </div>
              <div className="pt-3">
            {
              showResend && <span className="colorChange " style={{ cursor: 'pointer'}} onClick={handleResubmit} >
              Resend OTP
            </span>
            }
            
          </div>
            </div>
          </form>
          <div className="pt-3">
            Already have account?
            <span className="colorChange" style={{ cursor: 'pointer'}}  onClick={() => navigate("/login")}>
              {" "}
              Log in
            </span>
          </div>
          <div className="pt-3">
            Go to
            <span className="colorChange" style={{ cursor: 'pointer'}}  onClick={() => navigate("/")}>
              {" "}
              Home
            </span>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Signupemail;
