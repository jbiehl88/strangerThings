import React, { useState, useEffect } from "react";
import { getProfile } from "../api";
import { fetchMessage } from "../api";

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
  // console.log(userObj.messages);
  return (
    <div className="profile">
      <h2>{`User: ${userObj.username}`}</h2>
      <h3>Add messages here</h3>
      {userObj && userObj.messages && userObj.messages.length
        ? userObj.messages.map((message) => {
            console.log(message);
            return (
              <div key={message._id}>
                <h3>User: {message.fromUser.username}</h3>
                <h4> Post: {message.post.title}</h4>
                <p>Message: {message.content}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Profile;

// filter messages to make a new array of your messages
// set username to localStorage
//compare localStorage's username to message username (((messages.)))
