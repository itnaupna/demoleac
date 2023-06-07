import React from "react";
import "./Room.css";
import { useParams } from "react-router-dom";

const Room = () => {
  const { roomName } = useParams();
  return (
    <div>
      <h1>{roomName}</h1>
      <div id="chats"></div>
      <div id="toolbox">
        <input placeholder="대화명"></input>
        <input placeholder="보낼메세지"></input>
        <button>전송</button>
      </div>
    </div>
  );
};

export default Room;
