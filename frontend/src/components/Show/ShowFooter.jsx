import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'

const ShowFooter = ({children}) => {
    const location = useLocation();
    const [noFooter, setNoFooter]= useState(false)

    const isAuthenticated = () => {
      const authToken = localStorage.getItem('authToken');
      return authToken !== null && authToken !== undefined;
    };

    useEffect(()=>{
      // console.log('This is a location ',location)
      if(location.pathname==='/login'||location.pathname==='/signup'||location.pathname==='/signupwithemail'){
          setNoFooter(false)
      }
       else if(!isAuthenticated()&&location.pathname!=='/'&&location.pathname!=='/tempnews'&&location.pathname!=='/aboutus'&&location.pathname!=='/faqs'){
          // console.log(isAuthenticated())
          setNoFooter(false)
        }
        else{
            setNoFooter(true)
        }
    },[location])
  return (
    <div>{noFooter && children}</div>
  )
}

export default ShowFooter