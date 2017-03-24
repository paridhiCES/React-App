import { ADD_USER_DETAILS } from './constants'

export function addDetails (data) {
  console.log(data)
  return {
    type: ADD_USER_DETAILS,
    data: data
  }
}

export function setData(data) {
  return dispatch => {
    fetch(`http://localhost:8080/users`, {
      method: "post",
      headers: {
          'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        name: data.name,
        address: data.address,
        contact: data.contact,
        email: data.email
      })
    }).then(response => dispatch(addDetails(data)))
  }
}
