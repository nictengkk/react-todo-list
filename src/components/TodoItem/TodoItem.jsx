import React from "react";

function TodoItem({ name, isCompleted, handleClick, id }) {
  return (
    <div>
      <li onClick={() => handleClick(id)}>{name}</li>
    </div>
  );
}

export default TodoItem;
