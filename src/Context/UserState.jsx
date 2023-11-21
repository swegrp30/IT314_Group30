import UserContext from "./UserContext";

import { useState } from "react";
const UserState = (props) => {
  
  

  const [user,setUser]= useState(null)
  const [token,setToken] = useState(null)
  const setValueToken=(token)=>{
    setToken(token)
  }
  const setValueEmail=(email)=>{
    user.email= email
  }

  const setValueUser=(user)=>{
    setUser(user)
  }
  
  
  return (
    <UserContext.Provider
      value={{user,setValueEmail,token,setValueToken,setValueUser}}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;