import React, { Component } from 'react';
import '../css/App.css';
import Button from './Button'
import Table from '../containers/TableData'
import { browserHistory } from 'react-router'
import { buttonStyle, rootDiv, tableStyle, tableContainer } from '../css/Style'

class User extends Component {
  constructor(){
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    browserHistory.push('/form')
  }

  render() {
    console.log(this.props.tableData)
    return (
      <div className="App" style={rootDiv}>
        <div>
          <Button style={buttonStyle}
            value="Add New User"
            onClick={this.onClick}/>
        </div>
        <div style={tableContainer}>
          <Table style={tableStyle} />
        </div>
      </div>
    );
  }
}

export default User;
