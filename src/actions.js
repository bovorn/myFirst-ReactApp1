import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants';

import { apiCall } from './api/api'
  
  
  export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

  export const requestRobots = () => async(dispatch) => {
      dispatch({ type: REQUEST_ROBOTS_PENDING });
      await apiCall('https://jsonplaceholder.typicode.com/users')
          .then( data => dispatch({ type: REQUEST_ROBOTS_SUCCESS , payload: data}) )
          .catch( err => dispatch({ type: REQUEST_ROBOTS_FAILED , payload: err}) );
  }