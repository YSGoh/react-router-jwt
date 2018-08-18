import React, { Component } from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import Home from './Home';
// import AuthenticatedComponent from './AuthenticatedComponent';
import Register from './Register';
import UserProfile from './UserProfile';
import ProtectedPage from './ProtectedPage';
import PrivateRoute from './PrivateRoute';

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
          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
          <PrivateRoute path="/protected" component={ProtectedPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
