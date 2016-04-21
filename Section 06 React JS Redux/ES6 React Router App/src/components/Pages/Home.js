import React, { Component, PropTypes } from 'react'
import API from '../../api/API'

export default class Home extends Component{
  constructor(){
    super();
    this.state = {
      users: []
    }
  }
  setUserState(){
    API.getUsers().then(users =>{
      this.setState({
        users: users.data
      })
    })
  }
  componentDidMount(){
    this.setUserState();
  }
  render(){
    const userList = this.state.users.map((x, i) =>(
      <tr key={i}>
        <td>{x.id}</td>
        <td>{x.name}</td>
        <td>{x.email}</td>
        <td>{x.password}</td>
      </tr>
    ));
    return (
      <table className="table table-hover col-sm-2">
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
        </thead>
        <tbody>
          {userList}
        </tbody>
      </table>
    )
  }
}