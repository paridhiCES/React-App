export function addDetails (data) {
  return {
    type: 'ADD_DETAILS',
    data: data
  }
}

export function tableData (data){
  return {
    type: 'TABLE_DATA',
    data: data
  }
}

export function setData(data) {
  return dispatch => {
    fetch(`http://localhost:8080/lists`, {
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
    }).then(response => dispatch(getData()))
  }
}

export function getData(){
  return dispatch => {
    fetch(`http://localhost:8080/lists`)
      .then(response => response.json())
      .then(json =>  dispatch(addDetails(json)))
  }
}
