import React from 'react';
import axios from 'axios';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: [],
      id: [],
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('Token');

    axios.get('http://localhost:8000/api/v1/users/4db1f823-2a5f-448e-8a70-ac33c6e31f03/', {
      headers: { Authorization: 'Token ' + token },
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.setState({
          username: res.data.username,
          id: res.data.id,
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.username}
        <br />
        {this.state.id}
      </div>
    );
  }
}
