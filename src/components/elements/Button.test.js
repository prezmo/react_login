import React from 'react';
import Button from './Button';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

beforeAll(() => {
  Enzyme.configure({
    adapter: new Adapter()
  })
});

it('should render having icon element with configured class', () => {
  const wrapper = shallow(
    <Button
      iconClass="fa-facebook-official">
      Log in with Facebook
    </Button>
  );

  expect(wrapper.find('i').hasClass('fa fa-2x button__icon fa-facebook-official')).toBe(true);
});

it('should render in loading state', () => {
  const wrapper = shallow(
    <Button
      isLoading={true}>
      Log in with Facebook
    </Button>
  );
  
  expect(wrapper.find('i').hasClass('fa fa-circle-o-notch fa-spin fa-lg fa-fw')).toBe(true);
});

it('should fire callback on click', () => {
  let result = null;
  
  const callback = () => {
    result = true;
  }

  const wrapper = shallow(
    <Button
      clickHandler={callback}>
      Log in with Facebook
    </Button>
  );
  
  wrapper.simulate('click');
  expect(result).toBeTruthy();
});
