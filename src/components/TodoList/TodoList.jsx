import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";
import TodoCreationBar from "../TodoCreationBar/TodoCreationBar";

export class TodoList extends Component {
  state = {
    data: [],
    newTask: {}
  };

  handleCheckbox = clicked => {
    const items = [...this.state.data];
    const foundItem = items.find(item => item.name === clicked.name);
    //toggle isCompleted
    foundItem.isCompleted = !foundItem.isCompleted;
    this.setState({ data: items });
  };

  handleCreateInput = (event) => {
    const task = event.target.value
    this.setState({newTask: { name: task, isCompleted: false }})
  }

  handleCreate = () => {
    const items = [...this.state.data];
    items.push({...this.state.newTask});
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
          <TodoCreationBar handleCreate={this.handleCreate} handleCreateInput={this.handleCreateInput}/>
        </form>
      </div>
    );
  }
}

export default TodoList;
