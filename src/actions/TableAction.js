import { TABLE_ACTIONS } from './constants'

export function fetchDetails(data){
  return {
    type: TABLE_ACTIONS,
    data: data
  }
}

export function getData(){
  console.log('getData')
  return dispatch => {
    fetch(`http://localhost:8080/users`)
      .then(response => response.json())
      .then(json =>  dispatch(fetchDetails(json)))
  }
}
