import * as actions from './actions';
import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants';

import { apiCall } from './api/api'
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware])

it('should create an action to search robot', () => {
    const text = "wowooo"
    const expectedAction = {
        type: CHANGE_SEARCHFIELD, 
        payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction);
})  

it('handles requesting robots API', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots())
    const action = store.getActions();
    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING, 
    }
    expect(action[0]).toEqual(expectedAction);
})  

// export const requestRobots = () => async (dispatch) => {
//     dispatch({ type: REQUEST_ROBOTS_PENDING });
//     apiCall('https://jsonplaceholder.typicode.com/users')
//       .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS , payload: data}))
//       .catch( err => dispatch({ type: REQUEST_ROBOTS_FAILED , payload: err}));
// }