import { combineReducers } from 'redux'
import measures from './NewMeasure/reducer'
import chips from './Chipdata/reducer'
import dropdown from './Dropdown/reducer'

//import visibilityFilter from './visibilityFilter'

const App = combineReducers({
  measures,
  chips,
  dropdown

})

export default App