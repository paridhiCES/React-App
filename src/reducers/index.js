import { combineReducers } from 'redux'
import details from './Details'
import tableReducer from './TableReducer'

const demoApp = combineReducers({
  details: details,
  tableReducer: tableReducer,
})

export default demoApp;
