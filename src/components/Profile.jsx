import React from 'react';
import Tour from "../Images/Tour.jpg"
import '../style/Profile.css';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
function Profile() {
    const navigate = useNavigate();
    return (
        <>
        <Nav/>
    <div className="container-box">
      <div className="left-box">
        <img src={Tour} className="photo"/>
        <div className='left_name'>
            Bhavya Shah
        </div>
      <div className='left_email'>
            202101426@daiict.ac.in
      </div>
      <div className='left_bdate'>
           12-12-2001
      </div>
      <div className='left_member'>
           Member since: November 2023
      </div>
      </div>


        <div className="right-box">
            <div className='r_profile'>
                    <button className='r_profile_btn1' style={{ textDecoration: 'underline' }}> My Profile </button>
                    <button className='r_profile_btn1' onClick={()=>navigate('/changePassword')}> Change Password </button>
            </div>

            <div className='r'>
            <form className="form-edit row g-3 mt-3">
                <div className='right_name1'>
                    <div class="col-md-5"><label class="labels">Name</label><input type="text" class="form-control" placeholder="Name" value=""/></div>
                    <div class="col-md-5"><label class="labels">Email</label><input type="email" class="form-control" value="" placeholder="Email"/></div>
               </div>
                <div className='right_name1'>
                    <div class="col-md-5"><label class="labels">DOB</label><input type="date" class="form-control" placeholder="DOB" value=""/></div>
                    <div class="col-md-5"><label class="labels">Gender</label><input type="gender" class="form-control" value="" placeholder="Gender"/></div>
               </div>

                <div className='right_name1'>
                    <div class="col-md-5"><label class="labels">Mobile Number</label><input type="number" class="form-control" placeholder="Mobile Number" value=""/></div>
                    <div class="col-md-5"><label class="labels">Country</label><input type="text" class="form-control" value="" placeholder="Country"/></div>
               </div>

                <div className='right_name1'>
                    <div class="col-md-5"><label class="labels">State</label><input type="text" class="form-control" placeholder="State" value=""/></div>
                    <div class="col-md-5"><label class="labels">City</label><input type="text" class="form-control" value="" placeholder="City"/></div>
               </div>

                <div className='right_name1'>
                    <div class="col-md-5"><label class="labels">Pin Code</label><input type="text" class="form-control" placeholder="first name" value=""/></div>
                    <div class="col-md-5"><label class="labels">Occupation</label><input type="text" class="form-control" value="" placeholder="Occupation"/></div>
               </div>
            </form>
            </div>

        </div> 
        
    </div>
    <Footer/>
    </>
    )
}

export default Profile;