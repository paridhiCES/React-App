import React,{ Component } from 'react'
import { browserHistory } from 'react-router'


class AddForm extends Component {
  constructor(){
    super();
    this.state = {
      user:{
        name:'',
        address:'',
        contact:'',
        email:''
      }
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event){
    const name = event.target.name
    this.setState({
        user:{
          ...this.state.user,
          [name]: event.target.value,
        }
    })
  }

  handleSubmit(){
    this.props.actions.setData(this.state.user);
    browserHistory.push('/')
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name='name' value={this.state.user.name} onChange={this.onChange} />
        </label>
        <label>
          Address:
          <input type="text" name='address' value={this.state.user.address} onChange={this.onChange} />
        </label>
        <label>
          Contact:
          <input type="text"  name='contact' value={this.state.user.contact} onChange={this.onChange} />
        </label>
        <label>
          Email:
          <input type="text" name='email' value={this.state.user.email} onChange={this.onChange} />
        </label>
        <input type="button" value="Submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default AddForm
