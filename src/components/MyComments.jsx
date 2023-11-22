import React, { useState, useEffect } from "react";
import "../style/showComments.css";
import axios from "axios";
const MyComments = () => {
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
      {/* <div className="card-body mt-3">
        <div className="d-flex flex-start align-items-center">
          <div>
            <h6 className="fw-bold text-primary mb-1">Lily Coleman</h6>
            <p className="text-muted small mb-0">Shared publicly - Jan 2020</p>
          </div>
        </div>

        <p className="mt-3 mb-4 pb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip consequat.
        </p>

        <div className="small d-flex justify-content-start">
          <button className="btn btn-delete btn-primary btn-sm">Delete</button>
        </div>
      </div> */}
    </div>
  );
};

export default MyComments;
