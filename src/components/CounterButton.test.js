import renderer from 'react-test-renderer';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render CounterButton component', () => {
    const wrapper = renderer.create(<CounterButton />);
    expect(wrapper.toJSON()).toMatchSnapshot();
})

it('correctly increments the counter', () => {
    const wrapper = renderer.create(<CounterButton color="red" />);
    
    wrapper.root.findByProps({id: "counter"}).props.onClick();
    expect(wrapper.getInstance().state.count).toEqual(1);
    expect(wrapper.getInstance().props.color).toEqual("red");
}) 