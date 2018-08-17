import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
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

    axios.post('http://192.168.0.194:8000/api/v1/users/', { username: this.state.username, password: this.state.password }, {
      crossdomain: true,
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    // .catch(function(error){
    //   if (error.response) {
    //     console.log(error.response.headers);
    //   }
    //   else {
    //     console.log(error.message);
    //   }
    // }
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

export default Login;
