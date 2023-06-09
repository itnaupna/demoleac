import React, { useEffect, useRef, useState } from "react";
import "./Room.css";
import { json, useParams } from "react-router-dom";
import * as StompJS from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
const Room = () => {
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState('');
  const client = useRef();
  const userNameRef = useRef();
  const msgRef = useRef();
  const [msg,setMsg] = useState([]);
  // const chatsRef
  useEffect(() => {
    fetch("/room/info/" + roomId)
      .then(res => res.json())
      .then(res => {
        setRoomName(res.roomName);
        connect();
      })
      .catch((e) => {
        alert("입장실패");
        console.log(e);
        return;
      });
  }, [roomId]);



  const connect = ()=>{
    let sock = new SockJS("http://localhost:8080/ws");
    
    client.current = StompJS.Stomp.over(sock);
    let ws = client.current;
    ws.debug = ()=>{};
    ws.connect({},(e)=>{
      ws.subscribe("/sub/room/"+roomId,data=>{
        // console.log(JSON.parse(data.body));
        AddChat(data.body);
        // console.log();
      });
    });
  };

  const AddChat=(data)=>{
    setMsg(msg=>[
      ...msg,
      data
    ]);

  }

  const publish = (type,userName,msg)=>{
    client.current.send("/pub/msg",{},JSON.stringify({
      type,
      roomId,
      userName,
      msg
    }));
  };

  return (
    <div>
      <h1>{roomName ? roomName : null}</h1>
      <div id="chats">{
        msg.map((item,i)=>{
          return (
            <div>
              <b>{JSON.parse(item).userName} </b>{JSON.parse(item).msg}
            </div>
          );
        })
      }</div>
      <div id="toolbox">
        <input placeholder="대화명" ref={userNameRef}></input>
        <input placeholder="보낼메세지" ref={msgRef}></input>
        <button onClick={(e) => {
          publish("CHAT", userNameRef.current.value, msgRef.current.value);
        }}>전송</button>
      </div>
    </div>
  );
};

export default Room;
