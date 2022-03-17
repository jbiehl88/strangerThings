import React, { useState } from "react";
import { loginUser } from "../api";
import { useHistory } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const result = await loginUser(username, password);
          console.log(result);
          localStorage.setItem("token", result.data.token);
          setIsLoggedIn(true);
          history.push("/profile");
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
