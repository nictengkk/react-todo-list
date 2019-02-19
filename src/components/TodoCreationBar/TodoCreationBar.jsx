import React from "react";

function TodoCreationBar(props) {
  const { handleCreate, handleCreateInput } = props;
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter new task..."
        onChange={handleCreateInput}
      />
      <div className="input-group-append">
        <button
          onClick={handleCreate}
          className="btn btn-success"
          type="button"
        >
           + 
        </button>
      </div>
    </div>
  );
}

export default TodoCreationBar;
