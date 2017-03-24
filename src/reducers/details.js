import { ADD_USER_DETAILS } from '../actions/constants'

const initialState = {
  details : []
}
const details = (state=initialState, action) => {
  console.log(state)
  switch (action.type) {
    case ADD_USER_DETAILS:
        return {
          tableReducer: [
            ...state.tableReducer.details,
            {
              details:action.data
            }
          ]
        }
      break;
    default:
      return state
  }
}

export default details
