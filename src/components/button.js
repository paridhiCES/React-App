import React,{ PropTypes } from 'react'

const Button = ({style, value, onClick}) => {
    return (
      <input type="button" style={style} value={value} onClick={onClick} />
    )
}

Button.propTypes = {
  style: React.PropTypes.object,
  value: React.PropTypes.string,
  onClick: React.PropTypes.func,
}

export default Button
