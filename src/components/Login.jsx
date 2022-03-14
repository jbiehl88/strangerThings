import React, { useState } from "react";
import { loginUser } from "../api";

const Login = () => {
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
