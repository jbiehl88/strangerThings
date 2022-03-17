import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  let history = useHistory();
  return (
    <div className="navBar">
      <Link to="/home">Home</Link>
      <Link to="/posts">Posts</Link>
      {isLoggedIn ? (
        <div>
          <Link to="/profile">Profile</Link>
          <Link to="/createpost">Create Post</Link>
          <button
            onClick={() => {
              setIsLoggedIn(false);
              localStorage.removeItem("token");
              history.push("/home");
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
