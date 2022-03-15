import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="navBar">
      <Link to="/home">Home</Link>
      <Link to="/posts">Posts</Link>
      {isLoggedIn ? (
        <div>
          <Link to="/profile">Profile</Link>
          <button
            onClick={() => {
              setIsLoggedIn(false);
              localStorage.removeItem("token");
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">Login/</Link>
          <Link to="/signup">Sign-Up</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
