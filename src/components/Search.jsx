import React, { useState } from "react";

const Search = ({ posts, setFilteredPosts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  function postMatches(post, text) {
    if (post.title.includes(text)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(searchTerm);
        const filteredPosts = posts.filter((post) =>
          postMatches(post, searchTerm)
        );
        setFilteredPosts(filteredPosts);
      }}
    >
      <label htmlFor="header-search">
        <span>Search posts</span>
      </label>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search posts"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
