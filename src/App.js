import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Posts from "./components/Posts";

function App() {
  return (
    <BrowserRouter>
    <div id='container'>
      <Navbar />
      <Switch>
        <Route>
          <Home />
        </Route>
        <Route>
          <Posts />
        </Route>
        <Route>
          <Profile />
        </Route>
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
