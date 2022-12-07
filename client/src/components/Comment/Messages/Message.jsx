import React from "react";
import avt from "../../../assests/img/avt.png";
function Message(props) {
  const { item } = props;
  return (
    <div className="flex items-center mt-3" style={{ width: "100%" }}>
      <div className="relative flex-shrink-0 mr-2">
        <span className="absolute bottom-0 right-0 w-3 h-3 dark:bg-green-600 border rounded-full dark:text-coolGray-100 dark:border-coolGray-900" />
        <img
          src={avt}
          alt="error"
          className="object-cover w-10 h-10 border rounded-full dark:bg-coolGray-500 dark:border-coolGray-700"
        />
      </div>
      <div className="bg-gray-200 p-3 rounded-lg">
        <h3 className="font-bold">{item.username}</h3>
        <p>{item.comment}</p>
      </div>
    </div>
  );
}

export default Message;
