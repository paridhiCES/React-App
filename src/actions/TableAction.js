import { addDetails } from './FormAction'

export function getData(){
  return dispatch => {
    fetch(`http://localhost:8080/lists`)
      .then(response => response.json())
      .then(json =>  dispatch(addDetails(json)))
  }
}
