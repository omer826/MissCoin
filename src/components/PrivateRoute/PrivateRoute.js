import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserService from '../../services/UserService'

export default class PrivateRoute extends Component {
  state = {
    user: UserService.loadUser(),
  }
  render() {
    // We can take user from UserService also
    const { ...restProps } = this.props;
    return this.state.user ? <Route {...restProps} /> : <Redirect to="/signUp" />;
  }
}