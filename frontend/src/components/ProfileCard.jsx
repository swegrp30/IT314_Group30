import React from "react";
import "../style/ProfileCard.css";
import bhavya from "../Images/Photos/Bhavya Shah.jpg";
import darshana from "../Images/Photos/Darshana.jpg";
import dhairya from "../Images/Photos/Dhairya.jpg";
import naman from "../Images/Photos/Naman.jpg";
import natvar from "../Images/Photos/Natvar.jpg";
import nisha from "../Images/Photos/Nisha.JPG";
import om from "../Images/Photos/om.jpg";
import priya from "../Images/Photos/Priya.jpg";
import varun from "../Images/Photos/varun.jpg";
import vasu from "../Images/Photos/Vasu.jpg";
import shubham from "../Images/Photos/shubham.JPG";
import aayush from "../Images/Photos/aayush.jpg";
const ProfileCard = ({ name, username, imageSrc, socialLinks, studentID }) => {
  const image = [];
  image[0] = natvar;
  image[1] = naman;
  image[2] = bhavya;
  image[3] = dhairya;
  image[4]=aayush
  image[5] = priya;
  image[6] = shubham;
  image[7] = darshana;
  image[8] = varun;
  image[9] = om;
  image[10] = nisha;
  image[11] = vasu;
  return (
    <div className="col-md-12 col-xl-4">
      <div className="profile-card shadow bg-white rounded">
        <div className="card-body text-center">
          <div className="mb-4 mt-4">
            <img
              src={image[imageSrc]}
              className="rounded mx-auto d-block"
              style={{height:"200px", width:"200px", aspectRatio:"1" }}
              alt="Profile Image"
              
            />
          </div>
          <h4 className="mb-2">{name}</h4>
          <h5 className="mb-2">{studentID}</h5>
          <p className="text-muted mb-4">@{username}</p>
          <div className=" links mb-4 pb-2">
            {socialLinks.map((link, index) => (
              
              <a key={index} href={link.url}>
              <button type="button" className="btn btn-outline-primary btn-floating w-75 mt-2 profile-card-button">
                  <i className={`fab ${link.icon} fa-lg`} />
              </button>
                </a>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
