import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [roomName, setRoomName] = React.useState("");
  const [senderName, setSenderName] = React.useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const handleSenderNameChange = (event) => {
    setSenderName(event.target.value);
  };

  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
        style={{"marginBottom" : "10px"}}
      />
      <input
        type="text"
        placeholder="Your Name"
        value={senderName}
        onChange={handleSenderNameChange}
        className="text-input-field"
      />
      <Link to={`/${roomName}/${senderName}`} className="enter-room-button">
        Join room
      </Link>
    </div>
  );
};

export default Home;