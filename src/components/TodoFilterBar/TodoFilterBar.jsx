import React from "react";

function TodoFilterBar(props) {
  const { handleChange } = props;
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search tasks..."
        onChange={handleChange}
      />
    </div>
  );
}

export default TodoFilterBar;
