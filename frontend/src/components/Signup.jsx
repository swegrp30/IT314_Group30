import "../style/Login.css";
import "../style/App.css";
import hero from "../Images/hero.png";
import logo from "../Images/loginLOGO.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import PasswordChecklist from "react-password-checklist";
import React from "react";

const Signup = (props) => {
  const email = localStorage.getItem('email')
  // var lowerCase = /[a-z]/g;
  // var upperCase = /[A-Z]/g;
  // var numbers = /[0-9]/g;
  // let bool = new_pass.match(regex)
  const [data, setData] = useState({
    name: "",
    username: "",
    email: email,
    password: "",
    phone: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
    if (!data?.name) {
      toast.error("Name is required");
    } else if (!data?.username) {
      toast.error("User Name is required");
    } else if (!data?.phone) {
      toast.error("Phone Number is required");
    } else if (data?.phone.length != 10) {
      toast.error("Phone Number not valid");
    } else if (!data?.password) {
      toast.error("Password is required");
    } else if (data?.password.length < 8) {
      toast.error('Password of atleast 8 characters is required')
    }
    else if (data?.password.length > 16) {
      toast.error('Password of atmost 16 characters is required')
    }
    else if (!regex.test(data?.password)) {
      toast.error("Password doesn't match the requirements");
    } else {
      // console.log(data)
      try {
        const res = await axios
          .post("https://sharebb-production.up.railway.app/signup", {
            name: data.name,
            username: data.username,
            email: data.email,
            password: data.password,
            phone: data.phone,
          })
        const token = res.data.token
        localStorage.clear()
        localStorage.setItem("authToken", token);
        toast.success("You have signed up successfully")
        setTimeout(() => {
          navigate('/login')
        }, 1000)

      } catch (err) {
        if (err.response) {

          if (err.response.status === 412) {
            toast.error("Username not available.");
          }
          else if (err.response.status === 411) {
            toast.error("Phone number already registered.");
          }

        }
      }
    }
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const backToSignup = () => {
    navigate('/signupwithemail')
  }
  return (
    <div className="signupform ">
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
                pattern
                onChange={handleChange}
              />

              <PasswordChecklist
                rules={["capital", "specialChar", "minLength", "number"]}
                minLength={8}
                value={data.password}
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
            <div className="col-md-6 mt-3">
              <button
                type="submit"
                className="btn btn-primary mt-3"
                onClick={handleSubmit}
              >
                Create Account
              </button>
              <button
                type="submit"
                className="btn btn-primary mt-3"
                onClick={backToSignup}
              >
                Back
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
