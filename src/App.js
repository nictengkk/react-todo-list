import React, { Component } from "react";
import { todos } from "./seedData";
import TodoList from "./components/TodoList/TodoList";
import TodoCreationBar from "./components/TodoCreationBar/TodoCreationBar";

class App extends Component {
  state = {
    data: todos,
    inputBarValue: ""
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

  handleSubmit = event => {
    event.preventDefault();
    console.log("handle submit");
    //get value and create new item
  };

  handleChange = event => {
    this.setState({ inputBarValue: event.target.value });
  };

  render() {
    const { data, inputBarValue } = this.state;
    return (
      <React.Fragment>
        <h1>Todo List</h1>
        <TodoCreationBar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={inputBarValue}
        />
        <TodoList data={data} handleClick={this.handleClick} />
      </React.Fragment>
    );
  }
}

export default App;
