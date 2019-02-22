import React from "react";

function TodoItem({ name, isCompleted, handleClick, id }) {
  return (
    <div>
      <li
        style={{ "text-decoration": isCompleted && "line-through" }}
        onClick={() => handleClick(id)}
      >
        {name}
      </li>
    </div>
  );
}

export default TodoItem;
