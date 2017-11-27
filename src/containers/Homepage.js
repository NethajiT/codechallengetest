import React,{Component} from 'react'
import Home from "../components/Homepage"
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import { createMeasure } from '../store/NewMeasure/action'


 class Homepages extends Component{

    constructor() {
        super();

        this.state = {
            name: ""       
        }
    }

handleChange=(value)=>{
  this.setState({name:value});
  console.log(value)
}

submit=(e)=>{ 
              e.preventDefault()
              this.props.dispatch(createMeasure(this.state.name))
               this.props.history.push("/Enterdetails")                      
}

    render(){
        return(
            <div>
            <Home handleChange={value=>this.handleChange(value)} submit={this.submit}/>
            </div>       
        )
    }
}

export default connect()(Homepages)