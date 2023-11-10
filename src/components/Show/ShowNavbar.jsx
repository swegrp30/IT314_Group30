import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'

const ShowNavbar = ({children}) => {
    const location = useLocation();
    const [noNavbar, setNoNavbar]= useState(false)
    useEffect(()=>{
        console.log('This is a location ',location)
        if(location.pathname==='/login'||location.pathname==='/signup'){
            setNoNavbar(false)
        }
        else{
            setNoNavbar(true)
        }
    },[location])
  return (
    <div>{noNavbar && children}</div>
  )
}

export default ShowNavbar