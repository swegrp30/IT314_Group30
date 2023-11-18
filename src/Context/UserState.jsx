import UserContext from "./UserContext";

import { useState } from "react";
const UserState = (props) => {
  
  ;

  const [user,setUser]= useState({
    name:'',
    username:'',
    email:'',
    password:'',
    phone:''
  })
  const setValueEmail=(email)=>{
    user.email= email
  }
  //Get all notes

  
  return (
    <UserContext.Provider
      value={{user,setValueEmail}}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
