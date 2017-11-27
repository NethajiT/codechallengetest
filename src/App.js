import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Homepage from './containers/Homepage';
import Select from './containers/Selectpage'

const Measure = () => (
  <Router>
    <div>
      <Route exact path="/" component={Homepage}/>
      <Route path="/Enterdetails" component={Select}/>
    </div>
  </Router>
)

export default Measure;
