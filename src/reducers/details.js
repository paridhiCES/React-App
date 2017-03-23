const initialState = {
  details : []
}
const details = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_USER_DETAILS':
        return {
          details: [
            action.data
          ]
        }
      break;
    default:
      return state
  }
}

export default details
