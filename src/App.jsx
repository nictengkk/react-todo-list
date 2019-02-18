import React, { Component } from "react";
import { todos } from "./seedData";
import { TodoList } from './components/TodoList/TodoList';

class App extends Component {

  render() {
    return <TodoList data={todos} />;
  }
}

export default App;
