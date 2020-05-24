import {
    CHANGE_SEARCHFIELD,
    REQUEST_TODOS_SUCCESS,
    REQUEST_TODOS_PENDING,
    REQUEST_TODOS_FAILED
   } from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchTodos = (state=initialStateSearch, action={}) => {
    switch (action.type) {
      case CHANGE_SEARCHFIELD:
        return Object.assign({}, state, {searchField: action.payload})
      default:
        return state
    }
}

const initialStateTodos = {
    todos: [],
    isPending: true
}


export const requestTodos = (state=initialStateTodos, action={}) => {
    switch (action.type) {
      case REQUEST_TODOS_PENDING:
        return Object.assign({}, state, {isPending : true})
      case REQUEST_TODOS_SUCCESS:
        return Object.assign({}, state, {todos: action.payload , isPending : false})
      case REQUEST_TODOS_FAILED:
        return Object.assign({}, state, {error: action.payload})
      default:
        return state
    }
}
  