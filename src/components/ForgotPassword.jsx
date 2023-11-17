import React from 'react';
import '../style/Profile.css';
import { useState } from 'react';
function Forgotpassword() {
    const [gotOTP,setGotOTP] = useState(false);
    const [gotEmail,setGotEmail] = useState(false);
    return (
        <div className="forgotPW">
            <div className='r_cp'>
                FORGOT PASSWORD
            </div>
            <div className='rc'>
                <div className='right_name1'>
                    { !gotEmail && <>
                        <div className='rmain1'>
                            <div className='r1'>Email ID</div>
                            <input className='input_box' />
                        </div>
                        <button className='r_profile_btn2' onClick={()=>setGotEmail(true)}>
                            Get OTP
                        </button>
                    </>}
                    
                    { gotEmail && !gotOTP && <>
                        <div className='rmain1'>
                            <div className='r1'>Enter OTP</div>
                            <input className='input_box' />
                        </div>
                        <button className='r_profile_btn2' onClick={()=>setGotOTP(true)}>
                            Submit
                        </button>
                    </>}


                    { gotOTP && <>
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
                    </>}
                    
                </div>
                
            </div>
        </div> 
        
    )
}

export default Forgotpassword;