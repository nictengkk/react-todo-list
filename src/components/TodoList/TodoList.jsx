import React, { Component } from "react";

export class TodoList extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
      </div>
    );
  }
}

export default TodoList;
