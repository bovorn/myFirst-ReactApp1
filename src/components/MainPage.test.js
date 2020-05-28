import React from 'react';
import MainPage from './MainPage';
import renderer from 'react-test-renderer';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = renderer.create(<MainPage {...mockProps} />);
})

it('renders MainPage without crashing', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
})

it('filters robots correctly', () => {

    expect(wrapper.getInstance().filteredRobots()).toEqual([]);

    const mockProps1 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 1,
            name: 'John',
            email: 'John@gmail.com'
        }],
        searchField: 'john',
        isPending: false
    }
    const filteredRobots = [{
        id: 1,
        name: 'John',
        email: 'John@gmail.com'
    }];
    const wrapper1 = renderer.create(<MainPage {...mockProps1} />);
    expect(wrapper1.getInstance().filteredRobots()).toEqual(filteredRobots);
})

it('filters robots correctly 2', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 1,
            name: 'John',
            email: 'John@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }
    const filteredRobots = [];
    const wrapper2 = renderer.create(<MainPage {...mockProps2} />);
    expect(wrapper2.getInstance().filteredRobots()).toEqual(filteredRobots);
})

