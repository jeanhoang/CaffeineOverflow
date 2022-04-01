import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
    }
  }

  onChangeUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  onChangePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    }


    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    return (
      <div class='container'>
        <div className='form-div'>
          <br></br>
          <form onSubmit={this.onSubmit}>
            Username
            <input required type="text" value={this.state.username} onChange={this.onChangeUsername}
              className='form-control form-group' />
            <br></br>
            Password
            <input required type="text" value={this.state.password} onChange={this.onChangePassword}
              className='form-control form-group' />

            <br></br>
            <input type='submit' className='btn btn-danger btn-block' value='Submit' />
          </form>
        </div>
      </div>
    )
  }
}