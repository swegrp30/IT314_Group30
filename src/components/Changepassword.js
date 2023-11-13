import React from 'react';
import Tour from "../Images/Tour.jpg"
import '../style/Profile.css';

function Changepassword() {
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
            <div className='r_cp'>
                CHANGE PASSWORD
            </div>
            <div className='rc'>
                <div className='right_name1'>
                    <div className='rmain1'>
                        <div className='r1'>Old Password</div>
                        <input className='input_box' />
                    </div>
                   
                    <div className='rmain1'>
                        <div className='r1'>New Password</div>
                        <input className='input_box' />
                    </div>
                    <div className='rmain1'>
                        <div className='r1'>Confirm Password</div>
                        <input className='input_box' />
                    </div>

                </div>
                
            </div>
        </div> 
        
    </div>
    )
}

export default Changepassword;