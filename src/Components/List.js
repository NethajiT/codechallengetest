import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Show = ({id,text }) => (
  <li>
   {id} {text}
    
  </li>
)

const ShowList = ({ todos}) => (
  <ul>
    {todos.map(todo =>
      <Show key={todo.id}
        {...todo} 
        
  />
    )}
  </ul>
)

const mapStateToProps = (state) => ({ 
  todos: state.todos
})

const List = connect(
  mapStateToProps
)(ShowList)



export default List
