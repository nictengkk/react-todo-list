import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";

export class TodoList extends Component {
  render() {
    const { data, handleClick, searchTerm } = this.props;
    const filtering = item => item.name.includes(searchTerm);
    return (
      <ul className="list-group">
        {data.filter(filtering).map(todo => (
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
