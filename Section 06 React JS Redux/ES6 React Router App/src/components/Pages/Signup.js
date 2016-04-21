import React, { Component } from 'react'
import API from '../../api/API'

export default class Signup extends Component{
  constructor(){
    super();
    this.state = {
      users: []
    }
  }
  handleAddUser(user){
    API.addUser(user);
  }
  render(){
    return(
      <SignupForm handleAddUser={user => this.handleAddUser(user)} />
    )
  }
}

class SignupForm extends Component{
  nameRef(ref){
    this.name = ref;
  }
  emailRef(ref){
    this.email = ref;
  }
  passRef(ref){
    this.password = ref;
  }
  submitUser(e){
    e.preventDefault();
    let name = this.name.value,
        email = this.email.value,
        password = this.password.value;
    if(!password || !email || !name) return;
    const user = {name, email, password};
    this.props.handleAddUser(user);
    this.name.value = '';
    this.email.value = '';
    this.password.value = '';
  }
  render(){
    return(
      <div >
        <form className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            ref={(ref) => this.nameRef(ref)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            ref={(ref) => this.emailRef(ref)}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            ref={(ref) => this.passRef(ref)}
          />
          <input
            type="submit"
            value="Signup"
            className="btn btn-success"
            onClick={(e) => this.submitUser(e)}
          />
        </form>
      </div>

    )
  }
}