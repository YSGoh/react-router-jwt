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
    const uid = localStorage.getItem('uid');

    axios.get('http://localhost:8000/api/v1/users/' + uid + '/',
      {
        headers: { Authorization: 'Token ' + token },
      },
      {
        crossdomain: true,
      },
    ).then((res) => {
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
