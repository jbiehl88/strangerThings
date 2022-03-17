import React, { useState, useEffect } from "react";
import { getProfile } from "../api";

const Profile = () => {
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
    <div className="profile">
      <h2>{`Messages for: ${userObj.username}`}</h2>
      {userObj && userObj.messages && userObj.messages.length
        ? userObj.messages.map((message) => {
            console.log(message);
            return (
              <div className="Messages" key={message._id}>
                <h3>User ID: {message.fromUser.username}</h3>
                <h4>Title: {message.post.title}</h4>
                <p>Message: {message.content}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Profile;
