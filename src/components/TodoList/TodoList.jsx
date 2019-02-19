import React, { Component } from "react";
import TodoItem from '../TodoItem/TodoItem';

export class TodoList extends Component {
  state = {
    data: []
  };

  handleCheckbox = clicked => {
    const items = [...this.state.data];
    const foundItem = items.find(item => item.name === clicked.name);
    //toggle isCompleted
    foundItem.isCompleted = !foundItem.isCompleted;
    this.setState({ data: items });
  };

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="container">
        <h1>Todo List</h1>
        <form>
          {data.map((item, index) => (
            <TodoItem
              name={item.name}
              isCompleted={item.isCompleted}
              onChange={() => this.handleCheckbox(item)}
              key={index}
            />
          ))}
        </form>
      </div>
    );
  }
}

export default TodoList;
