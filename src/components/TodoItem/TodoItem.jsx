import React from "react";

function TodoItem(props) {
  const { name, isCompleted, onChange } = props;
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <input type="checkbox" checked={isCompleted} onChange={onChange} />
        </div>
      </div>
      <input value={name} type="text" className="form-control" disabled/>
    </div>
  );
}

export default TodoItem;
