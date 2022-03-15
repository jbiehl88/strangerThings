import React, { useState, useEffect } from "react";
import { getProfile } from "../api";

const Profile = () => {
  const [userObj, setuserObj] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    const getMe = async () => {
      const meFromAPI = await getProfile(token);
      console.log(meFromAPI.data);
      setuserObj(meFromAPI.data);
    };
    getMe();
  }, []);
  console.log(userObj);
  return (
    <div className="profile">
      <h2>{`User: ${userObj.username}`}</h2>
      <h3>Add messages here</h3>
    </div>
  ); // add messages -- map through state variables && make form for message
};

export default Profile;
