import { combineReducers } from 'redux'
import measures from './NewMeasure/reducer'
//import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  measures

})

export default todoApp