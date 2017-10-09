import React, { Component } from 'react';
import Button from '../elements/Button';
import Checkbox from '../elements/Checkbox';
import Input from '../elements/Input';
import ValidationMessage from '../elements/ValidationMessage';
import FormContainer from './FormContainer';
import FormField from './FormField';
import PropTypes from 'prop-types';
import { validateEmail, validatePassword } from '../../services/Validators';
import { doLogin } from '../../services/Api';

import './LoginForm.scss';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.validators = {
      email: validateEmail,
      password: validatePassword,
    };

    this.messages = {
      email: 'Invalid email',
      password: 'Invalid password',
      accept: 'Login successful',
      reject: 'Invalid email or password'
    }

    this.state = {
      email: '',
      password: '',
      isProcessing: false,
      remember: false,
      loginMessage: '',
      loginFailure: false,
      validation: {
        email: null,
        password: null,
      }
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.blurHandler = this.blurHandler.bind(this);
  }

  get isEmailValid() {
    const validation = this.state.validation.email;
    // take into accout inital value
    return validation || validation === null;
  }

  get isPasswordValid() {
    const validation = this.state.validation.password;
    // take into accout inital value
    return validation || validation === null;
  }

  get isFormValid() {
    return this.state.validation.email && this.state.validation.password;
  }

  set loginFailure(value) {
    const message = value ? this.messages.reject : '';

    this.setState({
      loginFailure: value,
      loginMessage: message,
    });
  }

  set isProcessing(value) {
    this.setState({
      isProcessing: value,
    });
  }

  clickHandler(e) {
    if (e.target.name !== 'login') return;

    if (this.isFormValid) {
      this.loginFailure = false;
      this.isProcessing = true;

      this.authenticate({
        email: this.state.email,
        password: this.state.password,
        remember: this.state.remember,
      }).then(response => {
        this.loginFailure = false;
        this.isProcessing = false;
        this.props.onLoginSuccess(response);
      }).catch((error) => {
        console.log(error);
        this.loginFailure = true;
        this.isProcessing = false;
      });

    } else {
      this.checkInputValidation('email', this.state.email);
      this.checkInputValidation('password', this.state.password);
    }
  }

  authenticate(formModel) {
    return doLogin(formModel)
  }

  changeHandler(e) {
    const name = e.target.name;
    const value = name === 'remember' ? e.target.checked : e.target.value;

    this.setState({
      [name]: value,
      loginFailure: false,
    });
  }

  blurHandler(e) {
    this.checkInputValidation(e.target.name, e.target.value);
  }

  checkInputValidation(name, value) {
    const validationResult = this.validators[name](value);

    this.setErrorFor(name, validationResult);
    // this.setValidationMessage(name, validationResult);
  }

  setErrorFor(name, validationResult) {
    this.setState((prevState) => ({
      validation: {
        ...prevState.validation,
        [name]: validationResult
      }
    }));
  }

  render() {
    return (
      <FormContainer>
        <FormField>
          <Input
            id="email"
            name="email"
            type="email"
            tabIndex="1"
            iconClass="fa-user"
            placeholder="email"
            isValid={this.isEmailValid && !this.state.loginFailure}
            changeHandler={this.changeHandler}
            blurHandler={this.blurHandler}
          />
          <ValidationMessage text={this.isEmailValid ? '' : this.messages.email} />
        </FormField>

        <FormField>
          <Input
            id="password"
            name="password"
            type="password"
            tabIndex="2"
            iconClass="fa-lock"
            placeholder="password"
            isValid={this.isPasswordValid && !this.state.loginFailure}
            changeHandler={this.changeHandler}
            blurHandler={this.blurHandler}
          />
          <ValidationMessage text={this.isPasswordValid ? '' : this.messages.password} />
        </FormField>

        <FormField className="float-right">
          <a href="" className="text-smaller" tabIndex="4">Forgot password?</a>
        </FormField>

        <FormField className="inline">
          <Checkbox
            id="remember"
            tabIndex="3"
            changeHandler={this.changeHandler}>
            Remember me
          </Checkbox>
        </FormField>

        <FormField className="form-field--spaced">
          <Button
            name="login"
            tabIndex="5"
            isLoading={this.state.isProcessing}
            clickHandler={this.clickHandler}>
            Log In
          </Button>
          <ValidationMessage text={this.state.loginFailure && this.state.loginMessage} />
        </FormField>

        <FormField className="form-field--spaced">
          <div className="divider">
            <span className="divider-or">or</span>
          </div>
        </FormField>

        <FormField>
          <Button
            name="facebook"
            tabIndex="6"
            className="button--facebook"
            isLoading={false}
            iconClass="fa-facebook-official"
            clickHandler={this.clickHandler}>
            Log in with Facebook
          </Button>
        </FormField>
      </FormContainer>
    )
  }
}

LoginForm.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
}

export default LoginForm;
