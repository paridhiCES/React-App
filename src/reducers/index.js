import { combineReducers } from 'redux'
import users from './UserReducer'

const demoApp = combineReducers({
  users
})

export default demoApp;
