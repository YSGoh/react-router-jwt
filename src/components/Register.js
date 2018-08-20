import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // const user = {
    //   username: this.state.name,
    //   password: this.state.password,
    // };

    axios.post('http://localhost:8000/api/v1/users/',
      {
        username: this.state.username,
        password: this.state.password,
      },
      {
        crossdomain: true,
      },
    ).then((res) => {
      console.log(res);
      console.log(res.data);
      localStorage.setItem('Token', res.data.auth_token);
      localStorage.setItem('uid', res.data.id);
    })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">
            username
          </label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          <label htmlFor="password">
            password
          </label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
