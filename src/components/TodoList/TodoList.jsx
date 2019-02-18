import React, { Component } from "react";
import TodoItem from '../TodoItem/TodoItem';

export class TodoList extends Component {
  state = {
    data: []
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
          {data.map(item => (
            <TodoItem name={item.name} isCompleted={item.isCompleted}/>
          ))}
        </form>
      </div>
    );
  }
}

export default TodoList;
