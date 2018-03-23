import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Login from "./Login";

ReactDOM.render(<App name="Cedric" />, document.getElementById("root"));
registerServiceWorker();
