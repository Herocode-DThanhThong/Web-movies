import React from "react";
import Message from "./Message";

function Messages(props) {
  const { comments } = props;
  return (
    <div className="mt-4">
      {comments?.map((item, index) => {
        return <Message key={index} item={item} />;
      })}
    </div>
  );
}

export default Messages;
