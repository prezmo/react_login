import React, { Component } from 'react';
import Button from './components/elements/Button';
import Picker from './components/elements/Picker';
import LoginForm from './components/forms/LoginForm';
import '../node_modules/normalize.css/normalize.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './styles/grid.scss';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      flavour: ''
    }

    this.flavours = [
      { className: 'default', name: 'default' },
      { className: 'app-container--grey', name: 'grey' },
      { className: 'app-container--green', name: 'green' },
      { className: 'app-container--blue', name: 'blue' },
      { className: 'app-container--purple', name: 'purple' },
      { size: '14px', name: '14px' },
      { size: '16px', name: '16px' },
      { size: '18px', name: '18px' },
    ]

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.setFlavour = this.setFlavour.bind(this);
  }

  onLoginSuccess(result) {
    console.log(result);
    this.setState({
      isLogged: true
    });
  }

  onLogout() {
    this.setState({
      isLogged: false
    });
  }

  setFlavour(flavour) {
    if (flavour.size) {
      this.root.style.fontSize = flavour.size;
      localStorage.setItem('size', flavour.size);
    }

    if(flavour.className) {
      this.setState({
        flavour: flavour.className
      });
      localStorage.setItem('className', flavour.className);
    }
  }

  componentDidMount() {
    this.root = document.querySelector('html');

    this.setFlavour({
      className: localStorage.getItem('className'),
      size: localStorage.getItem('size')
    })
  }

  render() {
    const loginForm = <LoginForm onLoginSuccess={this.onLoginSuccess} />
    const logoutView = (
      <div className="form-fields">
        <div className="form-field form-field--spaced">
          <Button
            name="login"
            clickHandler={this.onLogout}>
            Log out
          </Button>
        </div>
      </div>
    );

    return (
      <div className={`app-container ${this.state.flavour}`}>
        <Picker
          buttonsList={this.flavours}
          clickHandler={this.setFlavour}
        />
        <div className="flex-column centered container">
          <div className="row login-row">
            <section className="flex-column col-6">
              <div className="centered block">
                <h1 className="welcome-banner">Taste me...</h1>
              </div>
            </section>

            <section className="flex-column col-6">
              <div className="login centered block">
                <h3 className="login-header">{!this.state.isLogged ? 'Sign in' : 'Sign out'}</h3>
                {!this.state.isLogged ? loginForm : logoutView}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
