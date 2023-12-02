import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'

const ShowNavbar = ({children}) => {
  const isAuthenticated = () => {
    const authToken = localStorage.getItem('authToken');
    return authToken !== null && authToken !== undefined;
  };
    const location = useLocation();
    const [noNavbar, setNoNavbar]= useState(false)
    useEffect(()=>{
        // console.log('This is a location ',location)
        if(location.pathname==='/login'||location.pathname==='/signupwithemail'||location.pathname==='/signup'){
            setNoNavbar(false)
        }
        else if(!isAuthenticated() && location.pathname!=='/'&& location.pathname!=='/tempnews'&&location.pathname!=='/aboutus'&&location.pathname!=='/faqs'){
          setNoNavbar(false)
        }
        else{
            setNoNavbar(true)
        }
    },[location.pathname])
  return (
    <div>{noNavbar && children}</div>
  )
}

export default ShowNavbar