import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  let history = useHistory();
  return (
    <div className="navBar">
      <Link className="navSpacing" to="/home">Home</Link>
      <Link className="navSpacing" to="/posts">Posts</Link>
      {isLoggedIn ? (
        <div className="profilecreate">
          <Link className="navSpacing" idName="profileId" to="/profile">Profile</Link>
          <Link className="navSpacing" idName="createId" to="/createpost">Create Post</Link>
          <button className="logbutton"
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
