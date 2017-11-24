import { combineReducers } from 'redux'
import todos from './NewMeasure/reducer'
//import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos

})

export default todoApp