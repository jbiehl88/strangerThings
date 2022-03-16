import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/index";
import SinglePost from "./SinglePost";

const Posts = ({ userObj }) => {
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
      <div>
        {posts.map((post, i) => {
          return (
            <SinglePost
              key={`singlePostidx: ${i}`}
              post={post}
              posts={posts}
              setPosts={setPosts}
              userObj={userObj}
            />
          );
        })}
      </div>
    </>
  );
};

export default Posts;
