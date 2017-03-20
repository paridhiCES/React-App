import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button'
import Table from './containers/tableData'
import { browserHistory } from 'react-router'
import { buttonStyle, rootDiv, tableStyle, tableContainer } from './style'

class App extends Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    browserHistory.push('/form')
  }

  render() {
    return (
      <div className="App" style={rootDiv}>
        <div>
          <Button style={buttonStyle} onClick={this.onClick}/>
        </div>
        <div style={tableContainer}>
          <Table style={tableStyle} />
        </div>
      </div>
    );
  }
}

export default App;
