import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Body from "./components/body-component/body-component.component";
import Header from "./components/header-component/header-component.component";

function App() {
  let myName: string = "Mihai";

  return (
    <div className="App">
      <Header data={23}></Header>
      <h1>Hello react app</h1>
      <Body data={myName}></Body>
    </div>
  );
}

export default App;
