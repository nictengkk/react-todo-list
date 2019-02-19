import React from "react";
import "./TodoItem.css"

function TodoItem(props) {
  const { name, isCompleted, onChange } = props;

  const evaluateStyle = () => {
    return isCompleted ? "form-control strike" : "form-control"
  }

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <input type="checkbox" checked={isCompleted} onChange={onChange} />
        </div>
      </div>
      <input value={name} type="text" className={evaluateStyle()} disabled/>
    </div>
  );
}

export default TodoItem;
