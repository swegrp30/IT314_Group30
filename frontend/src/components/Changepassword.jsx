import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import image from "../Images/hero.png";
import axios from "axios";
import "../style/Profile.css";
import { ToastContainer, toast } from "react-toastify";
import secureLocalStorage from "react-secure-storage";
function Changepassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const val = secureLocalStorage.getItem("user");
  const [password, setPassword] = useState({
    oldPass: "",
    newPass: "",
  });

  const handleChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
    console.log(password);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password?.oldPass) {
      toast.error("Old Password  is required");
    } else if (password?.oldPass.length < 4) {
      toast.error("Password  of atleast 4 characters is required");
    } else if (password?.oldPass.length > 10) {
      toast.error("Password  of atmost 10 characters is required");
    } else if (!password?.newPass) {
      toast.error("New Password  is required");
    } else if (password?.newPass.length < 4) {
      toast.error("Password  of atleast 4 characters is required");
    } else if (!password?.newPass.length > 10) {
      toast.error("Password of atmost 10 characters is required");
    } else if (password.newPass != password.confirmPass) {
      toast.error("New password and confirm password should be same");
    } 
    else  if (password?.newPass===password?.oldPass) {
      toast.error("New password can not be same as old password");
    }
    else {
      delete password.confirmPass;
      const token = localStorage.getItem("authToken");
      console.log(token);

      const headers = {
        "Content-Type": "application/json",
        "auth-token": token,
      };
      console.log(headers);
      const res = await axios.post(
        "http://localhost:7000/changePassword",
        { oldPass: password.oldPass, newPass: password.newPass },
        { headers: headers }
      );
      console.log(res.status);
      var inputs = document.querySelectorAll('input');
      inputs.forEach((input) => (input.value = ""));
      if(res.status === 200){
      toast.success("Password changed sucessfully");
      navigate('/Profile')
      }
      else if(res.status === 202){
        toast.error("Enter correct current password")
      }
    }
    
  };

  useEffect(() => {
    const active_links = document.querySelectorAll(".active-link");
    active_links.forEach((active_link) => {
      active_link.classList.remove("specialClass");
      active_link.classList.remove("activeClass");
    });

    const currentLink = document.querySelector(
      `.active-link[href="${location.pathname}"]`
    );
    if (currentLink) {
      currentLink.classList.add("specialClass");
      currentLink.classList.add("activeClass");
    }
  }, [location.pathname]);

  return (
    <div>
      <div className="page-container mx-4 mt-3 ">
      <div className="Left d-flex flex-column ">
          <div className=" left d-flex flex-column align-items-center   h-75 w-100">
            <img className=" avatar mt-5 rounded-circle" src={image} />
            <div className="d-flex flex-column h-100 justify-content-around ">
              <div className="d-flex flex-column align-items-center mt-3 ">
                <div className="fs-2 fw-bold" style={{ color: "white" }}>
                  {val.username}
                </div>
                <div
                  className="fs-6 mt-2"
                  style={{ color: "white", maxWidth: "300px" }}
                >
                  {val.email}
                </div>
                <div className="fs-6" style={{ color: "white" }}>
                  {val.phone}
                </div>
              </div>
              <div style={{ color: "white", textAlign: "center" }}>
                Member since :{" "}
                <span className="fw-bold">{val.created_at.slice(0, 10)}</span>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column h-25 align-items-center">
            <Link
              className="active-link hoverClass  text-center p-3 fs-5 w-100"
              to="/Profile"
            >
              Profile
            </Link>

            <Link
              className="active-link text-center hoverClass p-3 fs-5 w-100"
              to="/mycomments"
            >
              My Comments
            </Link>
            <Link
              className="active-link  text-center hoverClass  p-3 fs-5 w-100 "
              to="/changePassword"
            >
              Change Password
            </Link>
          </div>
        </div>
        <div
          className="d-flex w-75 flex-column justify-content-start mt-5 align-items-center"
          style={{ height: "100vh" }}
        >
          <ToastContainer />
          <div className="fs-2 fw-bold">Change Password</div>
          <form className="form-edit row justify-content-center g-3 mt-3">
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Old Password
              </label>
              <input
                type="password"
                className="form-control"
                name="oldPass"
                placeholder="Old Password"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="newpassword" className="form-label">
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
            <div className="mb-3">
              <label htmlFor="newpassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                name="confirmPass"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            </div>
            <div className="row-md-6">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Changepassword;
