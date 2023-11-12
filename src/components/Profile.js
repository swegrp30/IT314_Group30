import React from 'react';
import Tour from "../Images/Tour.jpg"
import '../style/Profile.css';

function Profile() {
    return (
    <div className="container">
      <div className="left">
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


        <div className="right">
            <div className='r_profile'>
                MY PROFILE
            </div>
            <div className='r'>
                <div className='right_name1'>
                    <div className='rmain1'>
                        <div className='r1'>Name</div>
                        <input className='input_box' type="name" name="Name" />
                    </div>
                   
                    <div className='rmain1'>
                        <div className='r1'>DOB</div>
                        <input className='input_box' type="date" name="DOB"/>
                    </div>
                    <div className='rmain1'>
                        <div className='r1'>Mobile Number</div>
                        <input className='input_box' type="number" name="MobileNo" />
                    </div>

                    <div className='rmain1'>
                        <div className='r1'>State</div>
                        <input className='input_box' />
                    </div>

                    <div className='rmain1'>
                        <div className='r1'>Pin Code</div>
                        <input className='input_box' />
                    </div>

                </div>
                <div className='right_name1'>
                    <div className='rmain1'>
                        <div className='r1'>Email</div>
                        <input className='input_box' />
                    </div>
                   
                    <div className='rmain1'>
                        <div className='r1'>Gender</div>
                        <input className='input_box' />
                    </div>
                    <div className='rmain1'>
                        <div className='r1'>Country</div>
                        <input className='input_box' />
                    </div>

                    <div className='rmain1'>
                        <div className='r1'>City</div>
                        <input className='input_box' />
                    </div>

                    <div className='rmain1'>
                        <div className='r1'>Occupation</div>
                        <input className='input_box' />
                    </div>
                </div>
            </div>
        </div> 
        
    </div>
    )
}

export default Profile;