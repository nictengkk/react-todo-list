import React from "react";

function TodoCreationBar({ handleSubmit, handleChange, value }) {
  return (
    <form onSubmit={handleSubmit}>
      New Task:
      <input
        placeholder="Create New Task"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default TodoCreationBar;
