import React from 'react';
import Input from './Input';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

beforeAll(() => {
  Enzyme.configure({
    adapter: new Adapter()
  })
});

it('should render in invalid state', () => {
  const wrapper = shallow(
    <Input
      type="text"
      isValid={false}>
    </Input>
  );

  expect(wrapper.hasClass('input-container input-container--invalid')).toBe(true);
});

it('should fire callback on change', () => {
  let result = null;
  
  const callback = (e) => {
    result = e.target.value;
  }

  const wrapper = shallow(
    <Input
      type="text"
      changeHandler={callback}>
    </Input>
  );

  wrapper.find('input').simulate('change', { target: { value: 'test' } });
  expect(result).toBe('test');
});

it('should fire callback on blur', () => {
  let result = null;
  
  const callback = () => {
    result = true;
  }

  const wrapper = shallow(
    <Input
      type="text"
      blurHandler={callback}>
    </Input>
  );

  wrapper.find('input').simulate('blur');
  expect(result).toBeTruthy();
});
