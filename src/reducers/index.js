import { combineReducers } from 'redux'
import details from './details'

const demoApp = combineReducers({
  details: details,
})
export default demoApp;
