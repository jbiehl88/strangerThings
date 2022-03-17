import React, { useState } from "react";
import { fetchMessage } from "../api";

const Message = ({ postId }) => {
  const [messageContent, setMessageContent] = useState("");
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const localStorageToken = localStorage.getItem("token");
          const response = await fetchMessage(
            localStorageToken,
            postId,
            messageContent
          );
        }}
      >
        <input
          class
          value={messageContent}
          type="text"
          placeholder="Type your message"
          onChange={(e) => {
            console.log(messageContent);
            setMessageContent(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Message;
