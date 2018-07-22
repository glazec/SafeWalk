import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Warn from './warn';
import Maps from './maps';
import Profile from './profile';

class MapView extends Component{
  render(){
    return(
      <div>
        <nav>
          <Link to="/profile"></Link>

          <Link to="/warn"></Link>
        </nav>
        <Maps />
        <Route exact path="/profile" Component={Profile} />
        <Route exact path="/warn" Component={Warn} />
      </div>
    )
  }
}

export default MapView;