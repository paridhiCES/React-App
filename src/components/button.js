import React,{ PropTypes, Component } from 'react'

class Button extends Component {
  render(){
    return (
      <input type="button" style={this.props.style} value="Add New User" onClick={this.props.onClick}/>
    )
  }
}

export default Button
