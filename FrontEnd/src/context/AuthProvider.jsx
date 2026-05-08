import React, { useEffect, useState } from "react";
import { AuthContext } from "./context";
import axios from 'axios';

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [userRole, setUserRole] = useState(null);
  
  useEffect(() => {
    // Get user role from localStorage
    const loggedInUser = localStorage.getItem("loggedInUser");
    const loggedInAdmin = localStorage.getItem("loggedInAdmin");
    
    if (loggedInAdmin) {
      setUserRole("admin");
    } else if (loggedInUser) {
      setUserRole("employee");
    }
    
    axios.get('http://localhost:3000/user')
    .then((res) => {
      setUserData(res.data);
      console.log("User data from Database:", res.data);
    });
  }, []);
  
  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData, userRole]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export { AuthContext };
export default AuthProvider;
