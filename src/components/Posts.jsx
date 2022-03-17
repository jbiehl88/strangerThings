import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/index";
import SinglePost from "./SinglePost";
import Search from "./Search";

const Posts = ({ userObj }) => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsFromAPI = await fetchPosts();
      setPosts(postsFromAPI);
    };

    getPosts();
  }, []);

  const postsToDisplay = filteredPosts.length ? filteredPosts : posts;

  return (
    <>
      <div>
        <Search posts={posts} setFilteredPosts={setFilteredPosts} />
        {postsToDisplay.map((post, i) => {
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
