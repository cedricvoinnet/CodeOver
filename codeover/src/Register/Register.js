import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Redirect } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uname: "",
      password: ""
    };
  }

  login = () => {
    fetch('https://frozen-escarpment-20946.herokuapp.com/register', {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        uname: this.state.uname,
        password: this.state.password
      })
    })
    .then((res) => {
      if (res.status === 200) {
        this.setState({ url: "/"});
        this.setState({ redirectToReferrer: true });
      }
    })
    .then((result) => {
      console.log(result);
    });
  };

  register = () => {
    this.setState({url: "/login"});
    this.setState({ redirectToReferrer: true });
  }

  validateForm() {
    return this.state.uname.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { from } = { from: { pathname: this.state.url } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="Login">
              <FormGroup controlId="uname" bsSize="large">
                <ControlLabel>Username</ControlLabel>
                <FormControl
                  autoFocus
                  type="text"
                  value={this.state.uname}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>
              <Button
                block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
                onClick={this.login}
              >
                Register
              </Button>
          </div>
        </form>
        <Button
          block
          bsSize="large"
          type="submit"
          onClick={this.register}
        >
          Log in
        </Button>
      </div>
    );
  }
}
