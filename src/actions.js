import {
    CHANGE_SEARCHFIELD,
    REQUEST_TODOS_PENDING,
    REQUEST_TODOS_SUCCESS,
    REQUEST_TODOS_FAILED
   } from './constants'
  
  
  export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

  export const fetchTodos = () => async (dispatch) => {
      dispatch({ type: REQUEST_TODOS_PENDING });
      fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {return response.json()})
        .then(data => dispatch({ type: REQUEST_TODOS_SUCCESS , payload: data}))
        .catch( err => dispatch({ type: REQUEST_TODOS_FAILED , payload: err}));
  }