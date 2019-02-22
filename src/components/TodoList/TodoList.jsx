import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";

export class TodoList extends Component {
  state = {
    data: this.props.data
  };

  handleClick = itemId => {
    const { data } = this.state;
    const updatedState = data.map(todo => {
      if (todo.id === itemId) {
        const brandNew = { ...todo };
        brandNew.isCompleted = !brandNew.isCompleted; //changing isCompleted from true to false when clicked
        return brandNew;
      }
      return todo;
    });
    this.setState({ data: updatedState });
  };

  render() {
    const { data } = this.state;
    return (
      <ul>
        {data.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            name={todo.name}
            isCompleted={todo.isCompleted}
            handleClick={this.handleClick}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
