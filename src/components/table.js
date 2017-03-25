import React,{ PropTypes, Component } from 'react'
import _ from 'lodash'
import '../css/App.css'

class Table extends Component {
  constructor(){
    super()
    console.log('In constructor')
  }

  componentDidMount(){
    console.log('componentDidMount')
    this.props.actions.getData()
  }

  render(){
    const details = this.props.tableData[0]
    console.log("Table == ", details)
    return(
      <div>
        <table style={this.props.style}>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Email</th>
            </tr>
            {_.map(details, function(detail){
                return (
                <tr key={detail.name}>
                    <td>{detail.name}</td>
                    <td>{detail.address}</td>
                    <td>{detail.contact}</td>
                    <td>{detail.email}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    )
  }
}

Table.propTypes = {
  actions: React.PropTypes.object,
  tableData: React.PropTypes.object,
  style: React.PropTypes.object,
}
export default Table
