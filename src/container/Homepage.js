import React,{Component} from 'react'
import Home from "../Components/Homepage"
import PropTypes from 'prop-types';

export class Homepages extends Component{

    constructor() {
        super();

        this.state = {
            name: ""       
        }
    }

handleChange=(value)=>{
  this.setState({name:value});
}

submit=(e)=>{
  
              e.preventDefault()
              this.props.dispatch(createMeasure(this.state.name))
               this.props.history.push("/Enterdetails")
             // window.location="/Enterdetails"
            

}

    render(){
        return(
            <Home handleChange={value=>this.handleChange(value)} submit={e=>this.submit}/>
        )
    }
}

export default connect()(Homepages)