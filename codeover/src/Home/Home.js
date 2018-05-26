import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import {connect} from "react-redux";
import "./Home.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      rooms : [],
      room : null,
      codes : [],
      code : '',
      name: '',
      description: '',
      language: ''
    }
  }

  componentDidMount() {
    this.refreshRooms();
  }

  refreshRooms = () => {
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

  refreshCodes = (id) => {
    fetch('http://localhost:1212/code/'+id, {
      method:'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'uname': 'ced',
        'password': 'pass'
      }
    })
    .then((res) => res.json())
    .then((result) => {
      for (var i = 0; i < result.data.length; i++) {
        if (result.data[i].uname === 'ced') {
          this.setState({code:result.data[i]});
        } else {
          this.state.codes.push(result.data[i]);
        }
      }
    }, (error) => {
      console.log("error");
    });
  }

  sendCode = () => {
    fetch('http://localhost:1212/code', {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'uname': 'ced',
        'password': 'pass'
      },
      body: JSON.stringify({
        room_id: this.state.room.room_id,
        code: this.state.code
      })
    })
    .then((res) => res.json())
    .then((result) => {
      console.log("ok");
    }, (error) => {
      console.log("error");
    });
  }

  roomSelect = (id) => {
    this.setState({room:this.state.rooms[id]});
    this.setState({code: ''});
    this.refreshCodes(id);
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
      this.refreshRooms();
    }, (error) => {
      console.log("error");
    });
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
    const { rooms, room, codes, code } = this.state;
    return (
      <div className="Home">
        <div className="Home-sidebar">
          <Button onClick={this.refreshRooms}>
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
            <div suppressContentEditableWarning={true}>
              <div>
                <h1>{room.name}</h1>
                <div>
                  <h2>{room.description}</h2>
                  <h2>{room.language}</h2>
                  <h2>Created by {room.author}</h2>
                </div>
              </div>

              <div className="Code">
                <p>Enter your code below:</p>
                <pre>
                  <code
                  contentEditable
                  spellCheck="false"
                  value={this.state.code}
                  onChange={this.handleChange}
                  >
                  {code.code}
                  </code>
                </pre>
                <Button onClick={this.sendCode}>Send</Button>
              </div>

              <div className="Code">
                <p>Here are other users code:</p>
                {codes.map((code, idx) =>
                  <div key={idx} className="Code">
                    <h3>{code.uname}</h3>
                    <pre>
                      <code
                      spellCheck="false"
                      >
                        {code.code}
                      </code>
                    </pre>
                  </div>
                )}
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
