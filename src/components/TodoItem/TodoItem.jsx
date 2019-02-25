import React from "react";
import "./TodoItem.css";

function TodoItem({ name, isCompleted, handleClick, id }) {
  const getClass = () => {
    return isCompleted
      ? "strikethrough list-group-item toDoItemFont"
      : "list-group-item toDoItemFont";
  };

  return (
    <div className="container">
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
