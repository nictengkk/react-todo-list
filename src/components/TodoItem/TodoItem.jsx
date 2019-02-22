import React from "react";
import "./TodoItem.css";

function TodoItem({ name, isCompleted, handleClick, id }) {
  const getClass = () => {
    return isCompleted ? "strikethrough" : undefined;
  };

  return (
    <div>
      <li
        className={getClass(isCompleted)}
        // style={{ textDecoration: isCompleted && "line-through" }}
        onClick={() => handleClick(id)}
      >
        {name}
      </li>
    </div>
  );
}

export default TodoItem;
