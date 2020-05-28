import renderer from 'react-test-renderer';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John wick',
            email: 'j.wick@example.com',
            username: 'johnwick'
        },
    ];
    const wrapper = renderer.create(<CardList robots={mockRobots} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
})
