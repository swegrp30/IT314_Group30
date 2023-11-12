import React from 'react';
import '../style/Profile.css';

function Forgotpassword() {
    return (
       
        <div className="forgotPW">
            <div className='r_cp'>
                FORGOT PASSWORD
            </div>
            <div className='rc'>
                <div className='right_name1'>
                    <div className='rmain1'>
                        <div className='r1'>Email ID</div>
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
                    <button className='r_profile_btn2'>
                        Confirm
                    </button>
                </div>
                
            </div>
        </div> 
        
    )
}

export default Forgotpassword;