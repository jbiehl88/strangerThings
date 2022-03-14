import React, {useState} from "react";

const Home = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const onPasswordChange = (e) => {
      setPassword(e.target.value)
  }

  return (
    <div className="home">
      <form onSubmit={handleSubmit}>
        <input
          value={user}
          type="text"
          placeholder="username"
          onChange={(e) => setUser(e.target.value)}
        />
        <input value={password} type="text" placeholder="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
