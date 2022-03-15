import React, { useState } from "react";
import { loginUser } from "../api";

const Login = ({setIsLoggedIn}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // result.data.token
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          // console.log([ username, password])
          const result = await loginUser(username, password);
          console.log(result)
          localStorage.setItem("token", result.data.token);
          setIsLoggedIn(true)
        }}
      >
        <input
          value={username}
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          value={password}
          type="text"
          placeholder="username"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
