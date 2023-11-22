import UserContext from "./UserContext";

import { useState } from "react";
const UserState = (props) => {
  
  

  const [user,setUser]= useState(null)
  
  const setValueEmail=(email)=>{
    user.email= email
  }

  
  
  
  return (
    <UserContext.Provider
      value={{user,setValueEmail}}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;