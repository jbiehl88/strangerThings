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



//   return (
//     <div id='container'>
//       <div id='navbar'>
//         Form.js
//       </div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor='username'>Username:</label>
//         <input type='text' name='username' value={username} onChange={handleChange} />
//         <label htmlFor='password'>Password:</label>
//         <input type='password' name='password' value={password} onChange={(event) => setPassword(event.target.value)} />
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   )
// }


// ReactDOM.render(
//   <Form />,
//   document.getElementById('app')
// )