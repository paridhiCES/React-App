import { ADD_USER_DETAILS } from './constants'
import { TABLE_ACTIONS } from './constants'

export function addDetails (user) {
  console.log('addDetails', user)
  return {
    type: ADD_USER_DETAILS,
    user: user
  }
}

export function fetchUsers(users){
  console.log(users)
  return {
    type: TABLE_ACTIONS,
    users: users
  }
}

export function saveUser(user) {
  return dispatch => {
    fetch(`http://localhost:8080/users`, {
      method: "post",
      headers: {
          'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        name: user.name,
        address: user.address,
        contact: user.contact,
        email: user.email
      })
    }).then(response => dispatch(addDetails(user)))
  }
}

export function getData(){
  console.log('getData')
  return dispatch => {
    fetch(`http://localhost:8080/users`)
      .then(response => response.json())
      .then(json => { dispatch(fetchUsers(json))})
  }
}
