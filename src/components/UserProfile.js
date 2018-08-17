import React from 'react';
import axios from 'axios';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/v1/users/:580d7632-91ae-4f01-8d6b-3263499abfdd')
      .then((res) => {
        console.log(res);
        console.log(res.data);
        const username = res.data;
        this.setState({
          username,
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.username}
      </div>
    );
  }
}
