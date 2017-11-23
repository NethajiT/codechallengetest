import React, { Component }from 'react'
import ReactDOM from 'react-dom'
import Selectpage from './Selectpage'

class App extends React.Component {
handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    render() {
        const { data, currentPage, todosPerPage } = this.state;

        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {
            console.log(todo)
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
                <div>
                <span className="Page"
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number} &nbsp;
            </span>
             <Selectpage/>
              </div>
            );
        });
       
      
      
      
       
    }
}

export default App
