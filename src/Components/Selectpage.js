import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import '../Enterdetails.css'
import { FontIcon } from 'react-md';

class App extends React.Component{
    constructor() {
      super();
		
      this.stat = {
         data:[
            {
               Dataset: 'Dataset 1',
               Duration: 'Jan 2014'
            },
            {
               Dataset: 'Dataset 2',
               Duration: 'Jan 2014'
            },
            {
               Dataset: 'Dataset 3',
               Duration: 'Jan 2014'
            },
            {
               Dataset: 'Dataset 4',
               Duration: 'Jan 2014'
            },
            {
               Dataset: 'Dataset 5',
               Duration: 'Jan 2014'
            }
         ]
      }
   }
    render()
    {
        return(
            <div>
            <fieldset id="View">
               <FontIcon>home</FontIcon>
 
              <p id="Title">Enter details for</p>
              <div id="EDcontent">
                <div class="topnav">
                 <a class="active" href="/Select Dataset">Select Dataset</a>
                 <a href="/RefineDataset">Refine Dataset</a>
                 <a href="/AddComputation">Add Computation</a>
                 <a href="/OutputAttributes">Output Attributes</a>
                 <a href="/Summary">Summary <i class="material-icons">highlight_off</i></a>                  
               </div>
               <div id="Head">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Existing Datasets
               </div>
               <fieldset id="Output">
                   <div>
               {this.stat.data.map((dynamicComponent, i) => <Content 
                  key = {i} componentData = {dynamicComponent}/>)}
            </div>
               </fieldset>
             </div>
             <button>Cancel</button>
            </fieldset>

            </div>
        )
    }
}

class Content extends React.Component {
   render() {
      return (
         <div id="Content">
             <input type="radio"/>
             &nbsp; &nbsp;<b>{this.props.componentData.Dataset}</b>
            &nbsp; &nbsp; &nbsp; &nbsp; 
            Last executed on - &nbsp;
            <span id="Period"> {this.props.componentData.Duration} </span>
              
      </div>
         
      );
   }
}
export default App