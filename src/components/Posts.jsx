import React, { useState, useEffect } from "react";
import { fetchPosts, createPost } from "../api/index";
import SinglePost from "./SinglePost";

const Posts = ({ token }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsFromAPI = await fetchPosts();
      setPosts(postsFromAPI);
    };

    getPosts();
  }, []);

  return (
    <>
      <div></div>
      <div>
        {posts.map((post, i) => {
          return <SinglePost key={`singlePostidx: ${i}`} post={post} />;
        })}
      </div>
    </>
  );
};

export default Posts;
