import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'

const ShowFooter = ({children}) => {
    const location = useLocation();
    const [noFooter, setNoFooter]= useState(false)
    useEffect(()=>{
        console.log('This is a location ',location)
        if(location.pathname==='/login'||location.pathname==='/signup'){
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