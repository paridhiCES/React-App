import React,{ PropTypes, Component } from 'react'
import _ from 'lodash'
import '../App.css'
import InlineSVG from 'svg-inline-react';

class Table extends Component {

  componentDidMount(){
    this.props.actions.getData()
  }

  render(){
    const details = this.props.tableData
    const svgSource = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="48" height="48" viewBox="0 0 48 48">
                          <g id="artboard-1">
                            <path d="m-115.8,119.6c-12.8-22-3.2,33.6-3.2,33.6,8.8,34.4,145.6-17.6,145.6-17.6s168.8-30.4,180-34.4,96.8,1.6,96.8,1.6l-4.8-22.4c-64.8-46.4-75.2-16.8-88.8-20.8s-11.2,5.6-14.4,6.4-42.4-24-48.8-23.2-31.62-23.007-16.8,8.8c22.23,47.707-60.759,37.627-75.2,28-16.8-11.2,7.2,18.4,7.2,18.4,18.4,20-16,3.2-16,3.2-34.4-12.8-58.4,12.8-61.6,13.6s-8,4-8.8-2.4-6.865-21.256-40,3.2c-33.6,24.8-44,8.8-44,8.8l-7.2-4.8z" class="cls-1"/>
                          </g>
                        </svg>`
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
                    <td>
                      <InlineSVG src={svgSource} />
                    </td>
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
