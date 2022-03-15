import React, {useState} from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Posts from "./components/Posts";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div id="container">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Switch>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/signup">
          <SignUp setIsLoggedIn={setIsLoggedIn}/>
        </Route>
        <Route path="/login">
          <Login setIsLoggedIn={setIsLoggedIn}/>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
