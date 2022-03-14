import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navBar">
      <Link to="/home">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/Login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default Navbar;
