import { TABLE_ACTIONS } from '../actions/constants'

const initialState = {
  tableReducer : []
}
const tableReducer = (state=initialState, action) => {
  console.log(state)
  switch (action.type) {
    case 'TABLE_ACTIONS':{
      return {
        details: action.data
        }
    }
      break;
    default:
      return state
  }
}

export default tableReducer
