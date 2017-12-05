import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Homepage from './containers/Homepage';
import Select from './containers/Selectpage'
import Routing from './components/RoutingDemo'

const Measure = () => (
  <Router>
    <div>
      <Route exact path="/" component={Homepage}/>
      <Route path="/Enterdetails" component={Select}/>
    </div>
  </Router>
)

// class Measure extends React.Component{
//   render(){
//     return(
//       <Routing/>
//     )
//   }
// }
export default Measure;
