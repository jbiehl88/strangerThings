import React, { useState } from "react";
import Message from "./Message";
import { deletePost } from "../api";

const SinglePost = ({ post, posts, setPosts, userObj }) => {
  const [toggleMessage, setToggleMessage] = useState(false);
  const localStorageToken = localStorage.getItem("token");
  const handleDelete = async (token, postId) => {
    // console.log(token, postId);
    const data = await deletePost(token, postId);
    const filteredPosts = posts.filter((post) => {
      return post._id !== postId;
    });
    setPosts(filteredPosts);
  };
  const handleMessage = async () => {};
  return (
    <div className="SinglePost">
      <h3>Title: {post.title}</h3>
      <span>
        <strong>description: </strong>{post.description}
      </span>
      <p>{post.price}</p>
      {post.author._id === userObj._id ? (
        <button onClick={() => handleDelete(localStorageToken, post._id)}>
          Delete Post
        </button>
      ) : (
        <button
          onClick={() =>
            toggleMessage ? setToggleMessage(false) : setToggleMessage(true)
          }
        >
          Message
        </button>
      )}
      {toggleMessage ? <Message postId={post._id} /> : null}
    </div>
  );
};

export default SinglePost;

// message button toggle a component and make the form visable
// pass the component localStorageToken and postId
// the component will need a form for message content
// form will need an on submit button
// submit will need to call fetchMessage and pass it token, postId, messageContent
