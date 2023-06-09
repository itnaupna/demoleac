import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Lobby = () => {
  const [lst, setLst] = useState([]);

  useEffect(() => {
    fetch("/lobby/list")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setLst(res);
      });
  }, []);

  const RoomCreate = (e) => {
    let name = prompt('방제 입력').trim();
    if (name.length === 0) {
      alert('방제를 입력해주세요');
      return;
    } else {
      fetch("/lobby/create", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name
        })
      })
        .catch(e => {
          console.log(e);
          alert('생성실패');
        })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          alert('생성성공');
        })
    }
  }
  return (
    <div>
      <button onClick={RoomCreate}>방만들기</button>
      <ul>
        {
          lst.map((dto, i) => {
            return <Link key={dto.roomId} to={"/room/"+dto.roomId}> <li data-roomid={dto.roomId}>{i+1}. {dto.roomName}</li> </Link>
          })
        }
      </ul>
    </div>
  );
};

export default Lobby;
