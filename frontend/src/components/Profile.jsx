import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { ToastContainer, toast } from "react-toastify";
import image from "../Images/hero.png";
import axios from "axios";
import "../style/Profile.css";


const Profile = () => {
  const [editable, setEditable] = useState(false);
  const handleEdit = (e) => {
    e.preventDefault();
    setEditable(true);
  };

  const val = secureLocalStorage.getItem("user");
  const token = localStorage.getItem("authToken");
  
  const headers = {
    "Content-Type": "application/json",
    "auth-token": token,
  };
  const [user, setUser] = useState(val);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEditable(false);
    try {
      console.log(user);
      const res = await axios.post("https://sharebb-production.up.railway.app/editProfile", user, {
        headers,
      });
      if (res.status === 200) {
        toast.success("Change Successfully ");
        localStorage.clear();
        localStorage.setItem("authToken", token);
        secureLocalStorage.setItem("user", user);
      } else {
        toast.success("Try Again");
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
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user.dob);
  };

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
          className="Right mt-5"
          
        >
          <ToastContainer />

          <form className="row g-5 w-75 mt-2">
            <div className="header fs-2 fw-bold">Profile</div>
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
                disabled={!editable}
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
                disabled={!editable}
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
                value={user.dob?user.dob.slice(0,10):null}
                disabled={!editable}
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
                disabled={!editable}
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
                disabled={!editable}
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
                disabled={!editable}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Gender
              </label>
              <select
                type="text"
                onChange={handleChange}
                className="form-control"
                id="inputEmail4"
                name="gender"
                value={user.gender}
                disabled={!editable}
              >
                <option value="">-Select Gender-</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
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
                disabled={!editable}
              />
            </div>
            <div className="row-md-6">
              {editable ? (
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Save and Update
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleEdit}
                >
                  Edit Profile
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
