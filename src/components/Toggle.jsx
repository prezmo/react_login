import React, { Component } from 'react';

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;

    button = isLoggedIn ?
      <LogoutButton onClick={this.handleLogoutClick} /> :
      <LoginButton onClick={this.handleLoginClick} />;

    return (
      <div>
        <div>Is logged? {this.state.isLoggedIn ? 'YES' : 'NO'}</div>
        {button}
      </div>
    )
  }
}

export default LoginControl;
