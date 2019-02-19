# Lab: React Todo List

It's time to practice what you've learnt about React! 

### Instructions

Getting started
  - Fork the repo
  - Clone the repo
  - `cd` into the directory and run `npm install`
  - Start application: `npm start` and go to `localhost:3000` in your browser

Tasks
  - Create a new branch to work on (this allows you to try the lab again later with different solutions)
    - Run `git checkout -b solution_1`
    - You should make a local commit after you add each component as the instructions given below
    - You should push your `solution_1` branch to the GitHub in the end
  - Create the following components:
    - App.jsx
      - It should make use of TodoList component
      - The tasks defined in seedData.js should be passed to TodoList component as props
    - TodoList.jsx
      - create in components/TodoList/TodoList.jsx
      - The component should maintain all task items in its local state
    - TodoItem.jsx
      - create in components/TodoItem/TodoItem.jsx
      - Allow user to mark a Todo as done by clicking on it
      - Add strikethrough style to a Todo when user marks it as done
    - TodoCreationBar.jsx
      - create in components/TodoCreationBar/TodoCreationBar.jsx
      - Allow user to add a task by inputting a string and hitting a `Add` button
    - TodoFilterBar.jsx
      - create in components/TodoFilterBar/TodoFilterBar.jsx
      - Allows the user to immediatly filter tasks by inputting a search string. Tasks that do not match the search string should be hidden from display
      - Allows the user to see all tasks again when the search string is deleted

The following extension tasks should be done when the corresponding topics are covered in the class.

Extension Task 1:

  - Add PropTypes check to all the components created in the previous task

Extension Task 2:

  - Add unit tests to all the components created in the previous task using the `react-testing-library`

Extension Task 3:
`
  - Create a new branch to work on `git checkout -b solution_with_tdd`
  - Redo the lab from scratch, and create each component following Test Driven Development approach

