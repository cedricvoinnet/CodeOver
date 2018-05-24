import React from "react";
import "./App.css";
// import Clock from "./Clock";
import BasicRouter from "./BasicRouter";

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">CodeOver</h1>
      {/* <Clock /> */}
    </header>

    <BasicRouter />
  </div>
);

export default App;
