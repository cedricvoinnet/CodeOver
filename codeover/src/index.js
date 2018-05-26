import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import {createStore} from "redux";
import {Provider, connect} from "react-redux";
import user from "./redux/reducer.js";
import {addUser } from "./redux/actions.js";

let store = null;

store = createStore(
  user
)

console.log(store.getState())

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"));
registerServiceWorker();

export {store};
