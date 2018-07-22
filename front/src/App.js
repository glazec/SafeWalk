import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bulma/css/bulma.css';
import Login from "./login";
import MapView from "./map";
import SignUp from "./signup";
import './app.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      login:false,
      name:""
    }
    this.updateUser=this.updateUser.bind(this);
  }

  updateUser(status,name){
    this.setState({
      login:status,
      user:name,
    });
  }

  render() {
    return (
      <div id="App">
      {this.state.login ? // this is the main user view page
        <div id="user">
          <MapView />
        </div>
        ://this is the login page
        <div id="main">
          <Route exact path="/login" 
            render = {(props) => {
              return(<Login 
                updateUser={(status,name) => this.updateUser(status,name) }
              />);
            }}
          />
          <Route exact path ="/signup" 
            render = {(props) => {
              return(<SignUp 
                updateUser={(status,name) => this.updateUser(status,name) }
              />);
            }}
          />
        </div>
      }
      </div>
    );
  }
}

export default App;
