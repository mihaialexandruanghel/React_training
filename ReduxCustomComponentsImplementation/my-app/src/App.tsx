import React from "react";
import AddTodo from "./components/AddTodo.component";
import TodoList from "./components/TodoList.component";
import VisibilityFilters from "./components/VisibilityFilters.component";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}
