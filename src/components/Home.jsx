import React, { useState, useEffect } from "react";
import { getProfile } from "../api";
import { welcomeMessageCheck } from "../api";

const Home = () => {
  const [userObj, setuserObj] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const getMe = async () => {
      const meFromAPI = await getProfile(token);
      setuserObj(meFromAPI.data);
    };
    getMe();
  }, []);

  return (
    <div>
      <h2>{welcomeMessageCheck(userObj)}</h2>
    </div>
  );
};

export default Home;
