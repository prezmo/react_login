
import React from 'react';
import LoginForm from './LoginForm';
import Button from '../elements/Button';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';

jest.mock('../../services/Api');

beforeAll(() => {
  Enzyme.configure({
    adapter: new Adapter()
  });
});

it('should authenticate test user', () => {
  const wrapper = shallow(
    <LoginForm
      onLoginSuccess={() => { }}>
    </LoginForm>
  );

  const instance = wrapper.instance();
  const userData = {
    email: 'user@example.pl',
    password: 'Password123',
  };

  expect.assertions(1);
  return expect(instance.authenticate(userData)).resolves.toEqual('user@example.pl');
});

it('should reject test user', () => {
  const wrapper = shallow(
    <LoginForm
      onLoginSuccess={() => { }}>
    </LoginForm>
  );

  const instance = wrapper.instance();
  const userData = {
    email: 'user@unknown.pl',
    password: 'Password123',
  };

  expect.assertions(1);
  return expect(instance.authenticate(userData)).rejects.toEqual(`User: ${userData.email} not found`);
});

it('should fire onLoginSuccess callback', (done) => {
  let response = null;

  const callback = (resp) => {
    response = resp;
  }

  const wrapper = mount(
    <LoginForm
      onLoginSuccess={callback}>
    </LoginForm>
  );

  const instance = wrapper.instance();

  instance.setState({
    email: 'user@example.pl',
    password: 'Password123',
    isProcessing: false,
    remember: false,
    loginMessage: '',
    loginFailure: false,
    validation: {
      email: true,
      password: true,
    }
  });

  wrapper.find(Button).first().simulate('click');

  setTimeout(() => {
    try {
      expect(response).toBe('user@example.pl');
      done();
    }
    catch (e) {
      done.fail(e);
    }
  });
});

it('should properly validate user data', () => {
  const wrapper = shallow(
    <LoginForm
      onLoginSuccess={() => { }}>
    </LoginForm>
  );

  const instance = wrapper.instance();
  const userData = {
    email: 'user@example.pl',
    password: 'Password123',
  };

  instance.checkInputValidation('email', userData.email);
  instance.checkInputValidation('password', userData.password);

  expect(instance.state.validation.email).toBe(true);
  expect(instance.state.validation.password).toBe(true);
});
