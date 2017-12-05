import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
       <button><Link to="/dDdd">Home</Link></button>
       
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
       <Route exact path="/dddd" component={Measure}/>
      
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Measure = () => (
  <div>
    <h2>About Measure</h2>
  </div>
)


export default BasicExample