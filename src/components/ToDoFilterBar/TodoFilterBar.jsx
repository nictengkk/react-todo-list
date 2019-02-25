import React from "react";
import "./TodoFilterBar.css";

function TodoFilterBar({ handleChange, filterBarValue }) {
  return (
    <form>
      <div className="input-group-sm mb-1">
        <input
          className="form-control"
          placeholder="Filter Task"
          type="text"
          value={filterBarValue}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default TodoFilterBar;
