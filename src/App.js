import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Posts from "./components/Posts";
import Login from "./components/Login"

function App() {
  return (
    <div id="container">
      <h2>Hello World</h2>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
