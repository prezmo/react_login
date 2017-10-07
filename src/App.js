import React, { Component } from 'react';
import Toggle from './components/Toggle'
import logo from './logo.svg';
import '../node_modules/normalize.css/normalize.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import './styles/grid.css';
import './App.css';
import './components/Button.css'
import './components/Checkbox.css'
import './components/Input.css'
class App extends Component {
  render() {
    return (
      <main class="flex-column centered container">
        <div class="row login-row">
          <section class="flex-column col-6">
            <div class="centered block">
              <h1 class="welcome-banner">Welcome to the cave</h1>
            </div>
          </section>

          <section class="flex-column col-6">
            <div class="login centered block">
              <h3 class="login-header">Sign in</h3>
              <form novalidate>
                <fieldset class="form-fields">
                  <div class="form-field">
                    <div class="input-container">
                      <i class="fa fa-user input-icon" aria-hidden="true"></i>
                      <input tabindex="1" class="login-input" type="email" name="email" id="email" placeholder="email" />
                    </div>
                  </div>
                  <div class="form-field form-field--tight">
                    <div class="input-container">
                      <i class="fa fa-lock input-icon" aria-hidden="true"></i>
                      <input tabindex="2" class="login-input login-input--invalid" type="password" name="password" id="password" placeholder="password" />
                    </div>
                  </div>
                  <div class="form-field to-right">
                    <a href="#" class="text-smaller" tabindex="4">Forgot password?</a>
                  </div>
                  <div class="form-field">
                    <input tabindex="3" type="checkbox" name="remember" id="remember" />
                    <label for="remember" class="text-smaller">Remember me</label>
                  </div>
                  <div class="form-field form-field--spaced">
                    <button class="button" type="button">Log In</button>
                    <span class="val-mesage text-smaller">Password invalid</span>
                  </div>
                  <div class="form-field form-field--spaced">
                    <div class="divider">
                      <span class="divider-or">or</span>
                    </div>
                  </div>
                  <div class="form-field">
                    <button class="button button--facebook" type="button">
                      <i class="fa fa-facebook-official fa-2x button-icon" aria-hidden="true"></i>Log in with Facebook
                </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default App;
