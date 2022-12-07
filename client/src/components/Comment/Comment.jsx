import React, { useEffect, useState } from "react";
import Input from "./Input";
import io from "socket.io-client";
import Messages from "./Messages/Messages";
import { useParams } from "react-router-dom";
import { ENDPOINT, USER_INFO } from "../../utils/contants/settingSystem";
let socket;
function Comment(props) {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    socket = io(ENDPOINT, { transports: ["websocket"] });
    socket.emit("commentFilm", id);
    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [id]);

  useEffect(() => {
    socket.on("comment", (commentParams) =>
      setComments((prev) => [...prev, ...commentParams])
    );
    return () => {
      socket.disconnect();
      socket.off();
    };
  }, []);

  const sendComment = (e) => {
    if (e.key === "Enter") {
      const data = JSON.parse(localStorage.getItem(USER_INFO));
      const { idUser } = data;
      if (comment)
        socket.emit("sendComment", { comment, idFilm: id, idUser }, () =>
          setComment("")
        );
    }
  };

  return (
    <div>
      <Input
        sendComment={sendComment}
        setComment={setComment}
        comment={comment}
      />
      <Messages comments={comments} />
    </div>
  );
}

export default Comment;
