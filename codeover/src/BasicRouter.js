import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import PropTypes from 'prop-types';

const BasicRouter = ({ store }) => (
  <div>
    <Router>
      <div>
        <Route path="/(login|)/" render={(props) => <Login {...props} store={store} />} />
        <Route path="/home" render={(props) => <Home {...props} store={store} />} />
        <Route path="/register" render={(props) => <Register {...props} store="Toto" />} />
      </div>
    </Router>
  </div>
);

export default BasicRouter;
