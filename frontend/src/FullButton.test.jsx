import { shallow } from 'enzyme';
import React from 'react';
import { Button } from '@mui/material';
import TestButton from './components/TestButton';

describe('Test Button', () => {
  it('Successfully renders a button', () => {
    const wrapper = shallow(<TestButton />);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('Button text is set to default if none is provided', () => {
    const wrapper = shallow(<TestButton />);
    expect(wrapper.text()).toBe('Button');
  });

  it('Successfully renders provided text', () => {
    const text = 'test';
    const wrapper = shallow(<TestButton text={text}/>);
    expect(wrapper.text()).toBe(text);
  });

  it('Successfully passes the id into the Button', () => {
    const id = '5';
    const wrapper = shallow(<TestButton id={id}/>);
    expect(wrapper.prop('id')).toBe(id);
  })

  it('Successfully calls the onclick function when clicked', () => {
    const onClick = jest.fn();
    shallow(<TestButton onClick={onClick} />).simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Successfully renders an contained button when the type is true', () => {
    const wrapper = shallow(<TestButton type={true}/>);
    expect(wrapper.prop('variant')).toBe('contained');
  });

  it('Successfully renders an outlined button when the type is false', () => {
    const wrapper = shallow(<TestButton type={false}/>);
    expect(wrapper.prop('variant')).toBe('outlined');
  });

  it('Succesfully renders an outlined button as the default option', () => {
    const wrapper = shallow(<TestButton type={false}/>);
    expect(wrapper.prop('variant')).toBe('outlined');
  })
});
