import React from "react";
import { deletePost } from "../api";

const SinglePost = ({ post, posts, setPosts, userObj }) => {
  // console.log(post);
  const localStorageToken = localStorage.getItem("token");
  const handleDelete = async (token, postId) => {
    console.log(token, postId);
    const data = await deletePost(token, postId);
    const filteredPosts = posts.filter((post) => {
      return post._id !== postId;
    });
    setPosts(filteredPosts);
  };
  // console.log(userObj);
  // console.log(post);
  return (
    <div className="SinglePost">
      <h3>{post.title}</h3>
      <span>
        description: <p>{post.description}</p>
      </span>
      <p>{post.price}</p>
      {post.author._id === userObj._id ? (
        <button onClick={() => handleDelete(localStorageToken, post._id)}>
          Delete Post
        </button>
      ) : null}
    </div>
  );
};

export default SinglePost;
