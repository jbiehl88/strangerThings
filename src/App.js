import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Posts from "./components/Posts";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CreatePost from "./components/CreatePost";
import { fetchMe } from "./api";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState({});
  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    async function getMe() {
      const data = await fetchMe(localStorageToken);
      setUserObj(data.data);
    }
    if (localStorageToken) {
      setIsLoggedIn(true);
      getMe();
    }
  }, []);
  console.log(userObj);
  return (
    <div id="container">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route path="/posts">
          <Posts userObj={userObj} />
        </Route>
        <Route path="/signup">
          <SignUp setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/createpost">
          <CreatePost />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
