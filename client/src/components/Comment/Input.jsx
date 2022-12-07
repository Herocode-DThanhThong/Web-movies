import React from "react";

function Input(props) {
  const { sendComment, setComment, comment } = props;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        onKeyPress={sendComment}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        name="comment"
        type="text"
        className="border-2 border-gray-100 focus:outline-none  bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-blue-700 "
        placeholder="Bình luận....."
      />
    </form>
  );
}

export default Input;
