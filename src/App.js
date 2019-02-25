import React, { Component } from "react";
import cloneDeep from "lodash/cloneDeep";
import { todos } from "./seedData";
import TodoList from "./components/TodoList/TodoList";
import TodoCreationBar from "./components/TodoCreationBar/TodoCreationBar";
import TodoFilterBar from "./components/ToDoFilterBar/TodoFilterBar";

class App extends Component {
  state = {
    data: todos,
    inputBarValue: "",
    filterBarValue: ""
  };

  handleClick = itemId => {
    const { data } = this.state;
    const updatedState = data.map(todo => {
      if (todo.id === itemId) {
        const brandNew = { ...todo }; //creating a new object after spreading the original element
        brandNew.isCompleted = !brandNew.isCompleted; //changing isCompleted from true to false when clicked
        return brandNew;
      }
      return todo;
    });
    this.setState({ data: updatedState });
  };

  handleCreateSubmit = event => {
    event.preventDefault();
    const { data, inputBarValue } = this.state;
    const copy = cloneDeep(data);
    copy.push({
      id: data.length + 1,
      name: inputBarValue,
      isCompleted: false
    });

    this.setState({ data: copy, inputBarValue: "" }); //primitive types are allowed to be updated to state directly.

    //get value from event and create new todo object within the todos array.
  };

  handleCreateChange = event => {
    this.setState({ inputBarValue: event.target.value });
  };

  handleSearchChange = event => {
    this.setState({ inputBarValue: "", filterBarValue: event.target.value });
  };

  render() {
    const { data, inputBarValue, filterBarValue } = this.state;
    return (
      <div className="container">
        <h1 className="mt-4">Todo List</h1>
        <TodoCreationBar
          handleSubmit={this.handleCreateSubmit}
          handleChange={this.handleCreateChange}
          value={inputBarValue}
        />
        <TodoFilterBar
          filterBarValue={filterBarValue}
          handleChange={this.handleSearchChange}
        />
        <TodoList
          data={data}
          handleClick={this.handleClick}
          searchTerm={filterBarValue}
        />
      </div>
    );
  }
}

export default App;
