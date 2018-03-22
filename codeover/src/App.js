import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CodeOver</h1>
        </header>

        <div className="App-sidebar">
          <a href="#">HelloWorld</a>
          <a href="#">Strlen</a>
          <a href="#">PutChar</a>
          <a href="#">Count</a>

        </div>
      </div>
    );
  }
}

export default App;
