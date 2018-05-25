import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import {createStore} from "redux";
import {Provider, connect} from "react-redux";
import User from "./redux/user.js";

let store = null;

store = createStore(
  User,
  {
    items: []
  }
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"));
registerServiceWorker();

export {store};
