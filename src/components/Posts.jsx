import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/index";
import SinglePost from "./SinglePost";

// import { getPosts } from "../api"

const Posts = ({ token }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const result = await fetchPosts();
      // console.log(result)
      setPosts(result);
    };
    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post, i) => {
        console.log(post)
        return (
          <SinglePost
            key={`singlePostidx: ${i}`}
            post={post}
          />
        );
      })}
    </div>
  );
};

export default Posts;
