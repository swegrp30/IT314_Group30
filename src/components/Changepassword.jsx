import React, { useState } from "react";
import Tour from "../Images/Tour.jpg";
// import "../style/Profile.css";
import { ToastContainer, toast } from "react-toastify";
import axios
 from "axios";
function Changepassword() {
  const [password, setPassword] = useState({
    oldPass: "",
    newPass: "",
  });

  const handleChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
    console.log(password);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if(!password?.oldPass){
        toast.error('Old Password  is required')
    }
    else if(password?.oldPass.length<4){
        toast.error('Password  of atleast 4 characters is required')
    }
    else if(password?.oldPass.length>10){
        toast.error('Password  of atmost 10 characters is required')
    }
    else if(!password?.newPass){
        toast.error('New Password  is required')
    }
    else if(password?.newPass.length<4){
        toast.error('Password  of atleast 4 characters is required')
    }
    else if(!password?.newPass.length>10){
        toast.error('Password of atmost 10 characters is required')
    }
    else if(password.newPass!=password.confirmPass){
        toast.error('New password and confirm password should be same')
    }
    else{
        delete password.confirmPass
        const token = localStorage.getItem('authToken')
        console.log(token)

      const headers = {
        'Content-Type': 'application/json',
        'auth-token': token,
        
      }
      console.log(headers)
      const res = await axios
          .post("http://localhost:7000/changePassword",{oldPass:password.oldPass,newPass:password.newPass}, {headers:headers})
       console.log(res.status)   
      


    }
  };
  return (
    <div className="container-box">
      <div className="left-box">
        <img src={Tour} className="photo" />
        <div className="left_name">Bhavya Shah</div>
        <div className="left_email">202101426@daiict.ac.in</div>
        <div className="left_bdate">12-12-2001</div>
        <div className="left_member">Member since: November 2023</div>
      </div>

      <div className="right-box container mx-auto">
        <div className="r_cp">Change Password</div>
        <div className="rc">
          <form className="form-edit row g-3 mt-3">
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
            <div className="col-md-6">
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
