import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/index";
import SinglePost from "./SinglePost";

// import { getPosts } from "../api"

const Posts = ({ token }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log('in useEffect()')
    const getPosts = async () => {
      const postsFromAPI = await fetchPosts();
      setPosts(postsFromAPI);
    };

    getPosts();
  }, []);

  console.log("Hi Im the compoenent I have mounted on the page");
  console.log("Posts: ", posts)

  return (
    <div>
      Hello, I'm the Posts component
      {posts.map((post, i) => {
        return <SinglePost key={`singlePostidx: ${i}`} post={post} />;
      })}
    </div>
  );
};

export default Posts;
