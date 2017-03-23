import React,{ PropTypes, Component } from 'react'
import _ from 'lodash'
import '../App.css'

class Table extends Component {

  componentDidMount(){
    this.props.actions.getData()
  }

  render(){
    const details = this.props.tableData
    return(
      <div>
        <table style={this.props.style}>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Email</th>
              <th></th>
            </tr>
            {_.map(details, function(detail){
                return (
                <tr key={detail.id}>
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
  tableData: React.PropTypes.array,
  style: React.PropTypes.object,
}
export default Table
