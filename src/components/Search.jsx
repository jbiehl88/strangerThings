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
      className="searchbar"
      onSubmit={(e) => {
        e.preventDefault();
        const filteredPosts = posts.filter((post) =>
          postMatches(post, searchTerm)
        );
        setFilteredPosts(filteredPosts);
      }}
    >
      <label className="searchpost" htmlFor="header-search"></label>
      <input
        className="searchpost"
        type="text"
        value={searchTerm}
        placeholder="Search Posts"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button className="searchpostbutton" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
