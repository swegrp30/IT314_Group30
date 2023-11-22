import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { ToastContainer, toast } from 'react-toastify'
import image from "../Images/hero.png";
import axios from "axios";
import "../style/Profile.css";
const MyComments = () => {
  const val = secureLocalStorage.getItem("user");
  const token = localStorage.getItem("authToken");
  // console.log(token)
  const [data, setData] = useState([]);
  const getData = async (e) => {
    // e.preventDefault();

    const headers = {
      "Content-Type": "application/json",
      "auth-token": token,
    };
    const res = await axios.post(
      "http://localhost:7000/getComments",
      { company: "SBI" },
      { headers }
    );
    // console.log(res.data[0].comment);
    setData(res.data.reverse());
    // console.log(data[0].comment)
  };
  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 1000);
    return () => clearInterval(interval);
  }, [data]);
  //   window.addEventListener('load',getData())
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
            to="/"
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
      <div className="container mt-5 comments-container">
      
      {data.length > 0 &&
        data.map((dataItem, index) => {
          return (
            <div>
              <div className="card-body mt-3">
                <div className="d-flex flex-start align-items-center">
                  <div>
                    <h6 className="fw-bold  mb-1 usernameComment">
                      {data[index].username}
                    </h6>
                    <p className="text-muted small mb-0">
                      Shared on{" "}
                      <span className="datetime">
                        {data[index].created_at.slice(0, 10)}
                      </span>{" "}
                      at{" "}
                      <span className="datetime">
                        {data[index].created_at.slice(11, 19)}{" "}
                      </span>
                    </p>
                  </div>
                </div>

                <p className="comment mt-3 mb-2 pb-2">{data[index].comment}</p>
              </div>
            </div>
          );
        })}
      
        </div>  
    </div>
    </div>

);
       
};

export default MyComments;
