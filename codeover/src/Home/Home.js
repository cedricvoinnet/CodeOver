import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "./Home.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms : [],
      room : null,
      name: '',
      description: '',
      language: ''
    }
  }

  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    fetch('http://localhost:1212/room', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'uname': 'ced',
        'password': 'pass'
      }
    })
    .then((res) => res.json())
    .then((result) => {
      this.setState({
        rooms:result.data
      });
    });
  }

  roomSelect = (id) => {
    this.setState({room:this.state.rooms[id]})
    console.log(id);
  }


  sendNewRoom = () => {
    fetch('http://localhost:1212/room', {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'uname': 'ced',
        'password': 'pass'
      },
      body: JSON.stringify({
        name: this.state.name,
        description: this.state.description,
        language: this.state.language,
        author: 'ced',
      })
    })
    .then((res) => res.json())
    .then((result) => {
      console.log("ok");
      this.refresh();
    }, (error) => {
      console.log("error");
    })
  }

  validateForm() {
    return this.state.name.length > 0 &&
      this.state.description.length > 0 &&
      this.state.language.length > 0;
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
    const { rooms, room } = this.state;
    return (
      <div className="Home">
        <div className="Home-sidebar">
          <Button onClick={this.refresh}>
          Refresh
          </Button>
          <ul>
            {rooms.map((room) =>
              <li key={room.room_id} onClick={() => this.roomSelect(room.room_id - 1)}>
                {room.name}
              </li>
            )}
          </ul>
        </div>
        <div className="Home-body">
          {room ? (
            <div>
              <h1>{room.name}</h1>
              <div>
                <p>{room.description}</p>
                <p>{room.language}</p>
                <p>Created by {room.author}</p>
              </div>
            </div>
          ) : (
            <div>
              <h1>Select a room on the menu or create a new one below</h1>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <FormGroup controlId="name" bsSize="large">
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                      autoFocus
                      type="text"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup controlId="description" bsSize="large">
                    <ControlLabel>Description</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.description}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup controlId="language" bsSize="large">
                    <ControlLabel>Language</ControlLabel>
                    <FormControl
                      value={this.state.language}
                      onChange={this.handleChange}
                      type="text"
                    />
                  </FormGroup>
                  <Button
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit"
                    onClick={this.sendNewRoom}
                  >
                    Send
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}
