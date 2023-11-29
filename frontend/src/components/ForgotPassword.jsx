import React from "react";
import { useState } from "react";
import axios from "axios";
import logo from "../Images/loginLOGO.svg";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import hero from "../Images/hero.png";
import "../style/Login.css";
import PasswordChecklist from "react-password-checklist";
import Timer from "./Timer";

function Forgotpassword() {
  const navigate = useNavigate();
  const [showTimer, setShowTimer] = useState(false);
  const [showResend, setResend] = useState(false);
  const handleTimerComplete = () => {
    setShowTimer(false);
    setResend(true);
  };
  const backToForgotpw = () => {
    navigate("/Forgotpassword");
  };
  const [password, setPassword] = useState({
    confirmPass: "",
    newPass: "",
  });
  const [gotOTP, setGotOTP] = useState(false);
  const [gotEmail, setGotEmail] = useState(false);
  const [form, setEmail] = useState({
    email: "",
    otp: "",
  });
  const handleChange = (e) => {
    setEmail({ ...form, [e.target.name]: e.target.value });
    setPassword({ ...password, [e.target.name]: e.target.value });
    console.log(form);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!regex.test(form?.email)) {
      toast.error("Invalid Email");
    } else {
      const res = await axios.post(
        "https://sharebb-production.up.railway.app/forgotPassword",
        {
          email: form.email,
        }
      );
      toast.success("Otp sent");
      setGotEmail(true);
      setShowTimer(true)
    }
  };
  const handleOTP = async (e) => {
    e.preventDefault();
    if (!form.otp) {
      toast.error("OTP is required");
    } else {
      try {
        const res = await axios.post(
          "https://sharebb-production.up.railway.app/otp_verification",
          {
            email: form.email,
            otp: form.otp,
          }
        );
        const data = res.status;
        if (data === 200) {
          setGotOTP(true);
        } else if (data === 288) {
          toast.error("Incorrect OTP. Please enter again.");
        }
      } catch (err) {
        if (err.response) {
          toast.error("Something went wrong");
        }
      }
    }
  };
  const handleResubmit = async (e) => {
    e.preventDefault();
    setShowTimer(true);
    setResend(false)
    try {
      const res = await axios.post(
        "https://sharebb-production.up.railway.app/verifyEmail",
        {
          email: form.email,
        });
        toast.success("OTP resent");
        

  }
  catch (err) {
    if (err.response) {
      console.log("Something went wrong");
      
    }
  }
}
  const handlePass = async (e) => {
    e.preventDefault();
    const pass = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

    if (!password?.newPass) {
      toast.error("New Password  is required");
    } else if (!password?.confirmPass) {
      toast.error("Confirm Password  is required");
    } else if (password?.newPass.length < 8) {
      toast.error("New Password  of atleast 8 characters is required");
    } else if (password?.newPass.length > 16) {
      toast.error("New Password  of atmost 16 characters is required");
    } else if (password.newPass !== password.confirmPass) {
      toast.error("New password and confirm password should be same");
    } else if (!pass.test(password?.newPass)) {
      toast.error("Password doesn't match the requirements");
    } else {
      try {
        const res = await axios.post(
          "https://sharebb-production.up.railway.app/updatePassword",
          {
            email: form.email,
            newPass: password.newPass,
          }
        );

        if (res.status === 200) {
          toast.success("Password changed succesfully");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      } catch (err) {
        if (err.response) {
          toast.error("Something went wrong");
        }
      }
    }
  };
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
      <div className="right d-flex h-100 w-100  justify-content-start align-items-center">
        <ToastContainer />
        <div className="d-flex align-items-center mx-5 my-5 justify-content-center">
          <div className="d-flex align-items-center justify-content-center flex-column detailform">
            <div className="logo">
              <img src={logo} className="logo-main" alt="" />
            </div>
            <div className="text-medium text-black">Forgot Password</div>

            <form className="h-100 w-100 form-edit col justify-content-center align-items-center g-3 mt-5">
              {!gotEmail && (
                <>
                  <div className="col-md-12 text-center">
                    <label htmlFor="name" className="form-label">
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
                  <div className="col-md-6 mt-3 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary mt-3"
                      onClick={handleSubmit}
                    >
                      Send OTP
                    </button>
                  </div>
                </>
              )}

              {gotEmail && !gotOTP && (
                <>
                  <div className="col-md-12 text-center">
                    <label htmlFor="name" className="form-label">
                      OTP
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="otp"
                      placeholder="OTP"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="row-md-6 mt-3 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary mt-3"
                      style={{ width: 150, marginRight: 2 }}
                      onClick={handleOTP}
                    >
                      Submit
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary mt-3"
                      style={{ width: 150, marginLeft: 2 }}
                      onClick={backToForgotpw}
                    >
                      Change Email
                    </button>
                  </div>
                  {showTimer && <Timer onComplete={handleTimerComplete} />}
                  {
              showResend && <p className="colorChange" style={{ cursor: 'pointer'}} onClick={handleResubmit} >
              Resend OTP
            </p>
            }
                </>
              )}
              {gotOTP && (
                <>
                  <div className="col-md-12 text-center">
                    <label htmlFor="name" className="form-label text-lg">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="newPass"
                      placeholder="New Password"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12 text-center mt-3">
                    <label htmlFor="name" className="form-label text-lg">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="confirmPass"
                      placeholder="Confirm Password"
                      onChange={handleChange}
                    />
                    <div className="mt-4">
                      <PasswordChecklist
                        rules={[
                          "capital",
                          "specialChar",
                          "minLength",
                          "number",
                          "match",
                        ]}
                        minLength={8}
                        value={password.newPass}
                        valueAgain={password.confirmPass}
                      />
                    </div>
                  </div>
                  <div className="row-md-6 mt-3 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary mt-3"
                      style={{ width: 150, marginLeft: 2 }}
                      onClick={handlePass}
                    >
                      Confirm
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary mt-3"
                      style={{ width: 150, marginLeft: 2 }}
                      onClick={backToForgotpw}
                    >
                      Change Email
                    </button>
                  </div>
                  
                </>
              )}
              <div className="mt-2">
                Go to
                <span
                  className="colorChange"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/login")}
                >
                  {" "}
                  Login
                </span>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgotpassword;
