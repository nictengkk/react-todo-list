import React from "react";

function TodoCreationBar() {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter new task..."
      />
      <div className="input-group-append">
        <button
          className="btn btn-primary"
          type="button"
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default TodoCreationBar;
