import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";

export class TodoList extends Component {
  render() {
    const { data, handleClick } = this.props;
    return (
      <ul>
        {data.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            name={todo.name}
            isCompleted={todo.isCompleted}
            handleClick={handleClick}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
