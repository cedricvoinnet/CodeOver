import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";

const BasicRouter = () => (
  <div>
    <Router>
      <div>
        <Route exact="exact" path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  </div>
);

export default BasicRouter;
