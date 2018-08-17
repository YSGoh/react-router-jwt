import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
// import AuthenticatedComponent from './AuthenticatedComponent';
import Login from './Login';
import UserProfile from './UserProfile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // user: undefined,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/profile" component={UserProfile} />
          <Route path="/Login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
