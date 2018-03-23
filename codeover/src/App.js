import React from "react";
import "./App.css";
import Clock from "./Clock";
import BasicRouter from "./BasicRouter";

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">CodeOver</h1>
      <Clock />
    </header>

    <BasicRouter />

    {/* <div className="App-sidebar">
      <a href="#">HelloWorld</a>
      <a href="#">Strlen</a>
      <a href="#">PutChar</a>
      <a href="#">Count</a>
    </div> */}
  </div>
);

export default App;
