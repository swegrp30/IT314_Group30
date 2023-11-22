import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { ToastContainer, toast } from 'react-toastify'

import image from "../Images/hero.png";
import axios from "axios";
import "../style/Profile.css";
// import valContext from "../Context/valContext";

const Profile = () => {
  const val = secureLocalStorage.getItem("user");
  const token = localStorage.getItem('authToken');
  
  const headers = {
    "Content-Type": "application/json",
    "auth-token": token,
  };
  const [user, setUser] = useState(val);

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        console.log(user)
      const res = await axios.post(
        "http://localhost:7000/editProfile",
         user,
        { headers }
      );
      if(res.status===200){
      toast.success('Change Successfully ')
      localStorage.clear()
      localStorage.setItem('authToken',token)
      secureLocalStorage.setItem('user',user)
    }
    else{
        toast.success('Try Again')
    }


    } catch (error) {
      console.log(error);
    }
  };

  // console.log(user)
  const location = useLocation();

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
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  return (
    <div>
      <div className="d-flex mx-4 flex-row justify-content-center mt-3 ">
        <div className="d-flex flex-column w-25 " style={{ height: "100vh" }}>
          <div className=" left d-flex flex-column align-items-center   h-75 w-100">
            <img className=" avatar mt-5 rounded-circle" src={image} />
            <div className="d-flex flex-column h-100 justify-content-around ">
              <div className="d-flex flex-column align-items-center mt-3 ">
                <div className="fs-2 fw-bold" style={{ color: "white" }}>
                  {val.username}
                </div>
                <div className="fs-5 mt-2" style={{ color: "white" }}>
                  {val.email}
                </div>
                <div className="fs-5" style={{ color: "white" }}>
                  {val.phone}
                </div>
              </div>
              <div style={{ color: "white" }}>
                Member since :{" "}
                <span className="fw-bold">{val.created_at.slice(0, 10)}</span>
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-column h-25 align-items-center"
            
          >
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
          <div className="fs-2 fw-bold">Profile</div>
          <form className="row g-5 w-75 mt-2">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Name
              </label>
              <input
                type="text"
                onChange={handleChange}
                name="name"
                className="form-control"
                id="inputEmail4"
                value={user.name}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Occupation
              </label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                id="inputPassword4"
                name="occupation"
                value={user.occupation}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                DOB
              </label>
              <input
                type="date"
                onChange={handleChange}
                className="form-control"
                id="inputEmail4"
                name="dob"
                value={val.date}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                City
              </label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="inputPassword4"
                name="city"
                value={user.city}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                State
              </label>
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                id="inputEmail4"
                name="state"
                value={user.state}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Pin Code
              </label>
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                id="inputPassword4"
                name="pincode"
                value={user.pincode}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Gender
              </label>
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                id="inputEmail4"
                name="gender"
                value={user.gender}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Country
              </label>
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                id="inputPassword4"
                name="country"
                value={user.country}
              />
            </div>
            <div className="col-md-6">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Save and Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
