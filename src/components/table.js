import React,{ PropTypes, Component } from 'react'
import _ from 'lodash'
import '../App.css'

class Table extends Component {
  constructor(){
    super();
    this.state = {
      render: true
    }
  }

  componentDidMount(){
    this.props.actions.getData()
  }

  render(){
    const details = this.props.tableData
    console.log('Table', details)
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
              console.log(detail.name)
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

export default Table
