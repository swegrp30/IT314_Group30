import React , {useEffect} from "react";
import { Link, useLocation } from 'react-router-dom';

import image from '../Images/hero.png'
import axios from 'axios'
import '../style/Profile.css'


const Profile = () => {
    const token = localStorage.getItem('authToken')
    const location = useLocation();
  const headers = {
    'Content-Type': 'application/json',
    'auth-token': token,
    
  }
  
  useEffect(() => {
    const active_links = document.querySelectorAll('.active-link');
    active_links.forEach((active_link) => {
        active_link.classList.remove('specialClass');
        active_link.classList.remove('activeClass');
    });

    const currentLink = document.querySelector(`.active-link[href="${location.pathname}"]`);
    if (currentLink) {
        currentLink.classList.add('specialClass');
        currentLink.classList.add('activeClass');
        
    }
}, [location.pathname]);
  const handleUser=async (e)=>{
    try{
    
      const res = await axios.get('http://localhost:7000/getuser',{headers})
    console.log(res)
     
    
    
  }
  catch(error){
    console.log(error)
  }
  }
  return (
    <div>
      <div className="d-flex mx-4 flex-row justify-content-center mt-3 ">
        <div className="d-flex flex-column w-25 " style={{ height:"100vh"}}>
            <div className=" left d-flex flex-column align-items-center   h-75 w-100">
                    <img className=" avatar mt-5 rounded-circle" src={image}   />
                    <div className="d-flex flex-column h-100 justify-content-around ">

                    <div className="d-flex flex-column align-items-center mt-3 ">
                        <div className="fs-2 fw-bold" style={{ color:"white"}}>
                           Bhavya Shah  
                        </div>
                        <div className="fs-5 mt-2" style={{ color:"white"}}>
                           202101426@daiict.ac.in  
                        </div>
                        <div className="fs-5" style={{ color:"white"}}>
                           8200090380 
                        </div>
                    </div>
                    <div style={{ color:"white"}} >Member since : 23 November, 2023</div>
                    </div>
            </div>
            <div className="d-flex flex-column h-25 align-items-center" style={{}}>
                
                    
                    <Link className="active-link hoverClass  text-center p-3 fs-5 w-100" to='/Profile'>Profile</Link>
                
                <Link className="active-link text-center hoverClass p-3 fs-5 w-100" to='/changePassword'>My Comments</Link>
                <Link className="active-link  text-center hoverClass  p-3 fs-5 w-100 " to='/changePassword'>Change Password</Link>
            </div>
        </div>
        <div  className="d-flex w-75 " style={{ height:"100vh"}}>

        </div>
      </div>
    </div>
  );
};

export default Profile;
