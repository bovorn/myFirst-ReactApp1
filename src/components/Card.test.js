import renderer from 'react-test-renderer';
import React from 'react';
import Card from './Card';

it('expect to render Card component', () => {
    const wrapper = renderer.create(<Card />);
    expect(wrapper.toJSON()).toMatchSnapshot();
})