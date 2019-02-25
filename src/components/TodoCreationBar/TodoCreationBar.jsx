import React from "react";

function TodoCreationBar({ handleSubmit, handleChange, filterBarValue }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-1">
        <input
          className="form-control"
          placeholder="Create New Task"
          type="text"
          value={filterBarValue}
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-primary"
            type="submit"
            id="button-addon2"
          >
            Add Task!
          </button>
        </div>
      </div>
    </form>
  );
}

export default TodoCreationBar;
