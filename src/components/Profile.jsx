import React, { useEffect } from "react";
import { getProfile } from "../api";

const Profile = () => {                    // create state variables
  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token)
    const getMe = async () => {
      const meFromAPI = await getProfile(token);
      console.log(meFromAPI);
    };
    getMe();
  }, []);
  return <div className="profile"></div>; // map through state variables
};

export default Profile;
