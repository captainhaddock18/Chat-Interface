import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleLogin = (username) => {
    sessionStorage.setItem("userName", username);
    socket.emit("newUser", { userName: username, socketID: socket.id }); // Update to use the provided username
    navigate("/chat");
    // other login logic
  };

  return (
    <form
      className="home__container"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(userName);
      }}
    >
      <h2 className="home__header">Enter Name to Open Chat Interface </h2>
      <label htmlFor="username">Name</label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        className="username__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="home__cta" type="submit">
        Open Chat
      </button>
    </form>
  );
};

export default Home;
