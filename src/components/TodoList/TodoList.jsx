import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";
import TodoCreationBar from "../TodoCreationBar/TodoCreationBar";
import TodoFilterBar from "../TodoFilterBar/TodoFilterBar";

export class TodoList extends Component {
  state = {
    data: [],
    newTask: {},
    searchTerm: ""
  };

  handleCheckbox = clicked => {
    const items = [...this.state.data];
    const foundItem = items.find(item => item.name === clicked.name);
    //toggle isCompleted
    foundItem.isCompleted = !foundItem.isCompleted;
    this.setState({ data: items });
  };

  handleCreateInput = event => {
    const task = event.target.value;
    this.setState({ newTask: { name: task, isCompleted: false } });
  };

  handleCreate = () => {
    if (!this.state.newTask.name) return;
    const items = [...this.state.data];
    items.push({ ...this.state.newTask });
    this.setState({ data: items });
  };

  handleFilter = event => {
    const searchTerm = event.target.value;
    this.setState({searchTerm});
  };

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  render() {
    const { data, searchTerm} = this.state;
    const filteredList = data.filter(item => item.name.includes(searchTerm))
    return (
      <div className="container">
        <h1>Todo List</h1>
        <form>
          <TodoFilterBar handleChange={this.handleFilter}/>
          {filteredList.map((item, index) => (
            <TodoItem
              name={item.name}
              isCompleted={item.isCompleted}
              onChange={() => this.handleCheckbox(item)}
              key={index}
            />
          ))}
          <TodoCreationBar
            handleCreate={this.handleCreate}
            handleCreateInput={this.handleCreateInput}
          />
        </form>
      </div>
    );
  }
}

export default TodoList;
