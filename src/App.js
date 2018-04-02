import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Homepage from './containers/Homepage';
import Select from './containers/Selectpage'
//import Refine from './containers/RefineDataset'

const Measure = () => (
  <Router>
    <div>
      <Route exact path="/" component={Homepage}/>
      <Route path="/Enterdetails" component={Select}/>
      <Route path="/Refinedataset" component={Select}/>
    </div>
  </Router>
)

export default Measure;
