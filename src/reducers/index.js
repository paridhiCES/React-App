import { combineReducers } from 'redux'
import details from './Details'

const demoApp = combineReducers({
  details: details,
})

export default demoApp;
