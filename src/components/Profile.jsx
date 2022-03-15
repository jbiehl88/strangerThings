import React, { useState, useEffect } from "react";
import { getProfile } from "../api";

const Profile = () => {

  const [userObj, setuserObj] = useState([])
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    const getMe = async () => {
      const meFromAPI = await getProfile(token);
      console.log(meFromAPI.data)
      setuserObj(meFromAPI.data);
    };
    getMe();
  }, []);
  return <div className="profile">
    <h2>{`User: ${userObj.username}`}</h2>
    {/* <h3></h3> */}


  </div>; // add messages -- map through state variables && make form for message
};

export default Profile;
