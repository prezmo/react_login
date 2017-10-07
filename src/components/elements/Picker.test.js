import React from 'react';
import Picker from './Picker';
import Button from './Button'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';

beforeAll(() => {
  Enzyme.configure({
    adapter: new Adapter()
  })
});

it('should switch hidden state property on switchHide call', () => {
  const wrapper = shallow(
    <Picker
      buttonsList={[{ name: 'button' }]}
      clickHandler={() => { }}>
    </Picker>
  );

  const instance = wrapper.instance();
  instance.switchHide();
  expect(instance.state.hidden).toBe(false);
  instance.switchHide();
  expect(instance.state.hidden).toBe(true);
});

it('should fire callback on internal button click', () => {
  let handlerPayload = null;
  const firstButton = { name: 'button1' };
  const buttonList = [firstButton, { name: 'button2' }];

  const clickHandler = (obj) => {
    handlerPayload = obj;
  };

  const wrapper = mount(
    <Picker
      buttonsList={buttonList}
      clickHandler={clickHandler}>
    </Picker>
  );

  wrapper.find(Button).first().simulate('click');
  expect(handlerPayload).toEqual(firstButton);
});
