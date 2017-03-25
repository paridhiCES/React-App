import { ADD_USER_DETAILS } from '../actions/constants'
import { TABLE_ACTIONS } from '../actions/constants'

export default function details (state = [], action) {
  console.log('actionUser', action.user)
  switch (action.type) {
    case ADD_USER_DETAILS:
        return Object.assign([], state, [
          ...state.users,
          [action.user]
        ]
        )
    case TABLE_ACTIONS:
      return [
        action.users
      ]
    default:
      return state
  }
}
