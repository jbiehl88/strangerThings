import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Posts from "./components/Posts";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div id="container">
      <Navbar />
      <Switch>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        {/* <Route path="/home">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/login">
          <Login />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
