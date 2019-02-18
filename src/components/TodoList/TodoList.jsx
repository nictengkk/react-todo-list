import React, { Component } from "react";

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
        <ul className="list-group">
          {data.map(item => (
            <li className="list-group-item">{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
