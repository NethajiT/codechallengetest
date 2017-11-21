import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Homepage from './Components/Homepage';
import Select from './Components/Selectpage'

const Measure = () => (
  <Router>
    <div>
      <Route exact path="/" component={Homepage}/>
      <Route path="/Enterdetails" component={Select}/>
    </div>
  </Router>
)

export default Measure;
