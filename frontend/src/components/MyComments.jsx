import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { ToastContainer, toast } from "react-toastify";
import image from "../Images/hero.png";
import axios from "axios";
import "../style/Profile.css";
const MyComments = () => {
  const val = secureLocalStorage.getItem("user");
  const token = localStorage.getItem("authToken");
  const location = useLocation();
  const [isediting, setediting] = useState();
  const [comment, setComment] = useState();
  const [incomment, setincomment] = useState();
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setComment(e.target.value);
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
  const getData = async (e) => {
    // e.preventDefault();

    const headers = {
      "Content-Type": "application/json",
      "auth-token": token,
    };
    const res = await axios.get("https://sharebb-production.up.railway.app/myComments", {
      headers,
    });
    // console.log(res.data[0].comment);
    setData(res.data.reverse());
    // console.log(data[0].comment)
  };
  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleEdit = async (e) => {
    // console.log(e)
    setincomment(data[e].comment);
    setediting(e);
    setComment(data[e].comment);
  };
  const handleSubmitchange = async (e) => {
    setediting(-1);
    const headers = {
      "Content-Type": "application/json",
      "auth-token": token,
    };
    const res = await axios.post(
      "https://sharebb-production.up.railway.app/editComments",
      { comment_id: e, new_comment: comment },
      { headers }
    );
    if (res.status === 200) {
      toast.success("Comment Edited Successfully ");
      setComment("");
    } else {
      toast.error("Try Again");
    }
  };
  const handleCancel = async (e) => {
    setediting(-1);
    setComment("");
  };

  const handleDelete = async (e) => {
    const headers = {
      "Content-Type": "application/json",
      "auth-token": token,
    };
    const res = await axios.post(
      "https://sharebb-production.up.railway.app/dltComments",
      { id: e },
      { headers }
    );
    if (res.status === 200) {
      toast.success("Comment Deleted Successfully ");
    } else {
      toast.error("Try Again");
    }
  };
  //   window.addEventListener('load',getData())
  return (
    <div>
      <div className="page-container mx-4 justify-content-center mt-3 ">
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
        <div className="Right container mt-5 comments-container">
          {data.length > 0 &&
            data.map((dataItem, index) => {
              return (
                <div>
                  <div className="card-body mt-3">
                    <div className="card-head">
                      <div className="userInfo">
                        <div className="d-flex fw-bold  mb-1 usernameComment">
                          {data[index].username}
                        </div>
                        <div className="d-flex fw-bold  mb-1 usernameComment">
                        <span className="text-muted"> Commented on: &nbsp; </span>  {data[index].company}
                        </div>
                        <div className="text-muted small mb-0">
                          Shared on{" "}
                          <span className="datetime">
                            {data[index].created_at.slice(0, 10)}
                          </span>{" "}
                          at{" "}
                          <span className="datetime">
                            {data[index].created_at.slice(11, 19)}{" "}
                          </span>
                        </div>
                      </div>
                      <div className="commentModify">
                        {index !== isediting && (
                          <button
                            className="btn btn-primary btn-ead"
                            onClick={() => handleEdit(index)}
                          >
                            Edit
                          </button>
                        )}
                        {index === isediting && (
                          <button
                            className="btn btn-primary btn-ead"
                            onClick={() =>
                              handleSubmitchange(dataItem.comment_id)
                            }
                          >
                            Change
                          </button>
                        )}
                        <button
                          className="btn btn-primary btn-ead"
                          onClick={() => handleDelete(dataItem.comment_id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    {index != isediting && (
                      <p className="comment mt-3 mb-2 pb-2">
                        {data[index].comment}
                      </p>
                    )}
                    {index == isediting && (
                      <div className="editcomment">
                        <button
                          className="btn btn-primary btn-ead cancel"
                          onClick={() => handleCancel(index)}
                        >
                          Cancel
                        </button>
                        <textarea
                          className="form-control mt-3 mb-2 pb-2"
                          id="comments"
                          name="comments"
                          value={comment}
                          onChange={handleChange}
                          rows="3"
                        ></textarea>
                      </div>
                    )}
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
