import React from 'react';
import Checkbox from './Checkbox';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

beforeAll(() => {
  Enzyme.configure({
    adapter: new Adapter()
  })
});

it('should fire callback on change', () => {
  let result = null;
  
  const callback = () => {
    result = true;
  }

  const wrapper = shallow(
    <Checkbox
      id="checkbox"
      changeHandler={callback}>
      Label text
    </Checkbox>
  );

  wrapper.find('input').simulate('change', { target: { checked: true } });
  expect(result).toBeTruthy();
});
