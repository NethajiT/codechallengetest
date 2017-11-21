import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import '../Enterdetails.css'
import { FontIcon } from 'react-md';

class App extends React.Component{
    constructor() {
      super();
		
      this.state = {
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
         ],
         currentPage: 1,
         todosPerPage: 2
      }
   }

    handleClick=(event)=> {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
    render()
    {
        const { data,currentPage, todosPerPage } = this.state;

         const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {
          console.log(todo)
          return <div id="Content" key={index}><input type="radio"/> &nbsp; &nbsp;
         <b> {todo.Dataset} </b>
          &nbsp; &nbsp; &nbsp; &nbsp; 
          Last executed on - &nbsp;
          <span id="Period"> {todo.Duration} </span>
         </div>;
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </li>
          );
        });

        return(
            <div>
            <fieldset id="View">
              <p id="Title">Enter details for</p>
              <div id="EDcontent">
                <div class="topnav">
                 <a class="active" href="/Select Dataset">&#10112; &nbsp;Select Dataset</a>
                 <a href="/RefineDataset"><span class="Numberdefault">&#10113;</span>&nbsp;Refine Dataset</a>
                 <a href="/AddComputation"><span class="Numberdefault">&#10114;</span>&nbsp;Add Computation</a>
                 <a href="/OutputAttributes"><span class="Numberdefault">&#10115;</span>&nbsp;Output Attributes</a>
                 <a href="/Summary"><span class="Numberdefault">&#10116;</span>&nbsp;Summary</a>                  
               </div>
               <p id="Head">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Existing Datasets
               </p>
               <fieldset id="Output">
                   <div >
               {/*{this.stat.data.map((dynamicComponent, i) => <Content 
                  key = {i} componentData = {dynamicComponent}/>)}*/}
                   
                
                  {renderTodos} 
                  {renderPageNumbers} 
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