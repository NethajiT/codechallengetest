import React, { Component } from 'react'
import '../Enterdetails.css'
import { connect } from 'react-redux'




const Show = ({id,text }) => (
 <span>
     &nbsp;&nbsp;
    {text}   
  </span>
)  

class App extends Component {
    constructor() {
        super();

        this.state = {
            data: [
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

    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    render() {
        const x=this.props.todos;
        console.log(x);
        const { data, currentPage, todosPerPage } = this.state;

        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {
            
            return <div id="Content" key={index}><input type="radio" /> &nbsp; &nbsp;
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

                <span className="Page"
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number} &nbsp;
            </span>
            );
        });
 
        return (
            <div>
                <fieldset id="View">
                      
                    <p id="Title">Enter details for
                     <span>
                          {this.props.todos.map(todo => <Show key={todo.id}  {...todo} /> )}          
                     </span>

                    </p>
                    <div id="EDcontent">
                        <div className="topnav">
                            <a className="active" href="/Select Dataset">&#10112; &nbsp;Select Dataset</a>
                            <a href="/RefineDataset"><span className="Numberdefault">&#10113;</span>&nbsp;Refine Dataset</a>
                            <a href="/AddComputation"><span className="Numberdefault">&#10114;</span>&nbsp;Add Computation</a>
                            <a href="/OutputAttributes"><span className="Numberdefault">&#10115;</span>&nbsp;Output Attributes</a>
                            <a href="/Summary"><span className="Numberdefault">&#10116;</span>&nbsp;Summary</a>
                        </div>
                        <p id="Head">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Existing Datasets
               </p>
                        <fieldset id="Output">
                            <div >
                                {renderTodos}
                                {renderPageNumbers}
                            </div>
                        </fieldset>
                    </div>
                    <button>Cancel</button>

                 <ul>
             
        </ul>

                </fieldset>

            </div>
        )
        
    }
}


const mapStateToProps = (state) => ({ 
  todos: state.todos
})

const Select = connect(
  mapStateToProps
)(App)

export default Select