import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, fetchTodos } from '../actions';

import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import './App.css';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchTodos.searchField, 
    todos : state.requestTodos.todos,
    isPending : state.requestTodos.isPending,
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
      requestTodos: () => dispatch(fetchTodos())
    }
}

class App extends Component {

  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const { searchField , onSearchChange ,todos , isPending} = this.props;
    const filteredTodo = todos.filter(todo => { return todo.title.toLowerCase().includes(searchField.toLowerCase())});
    return isPending ? <h1>Loading...</h1> :
     (
       <div>
        <div className="tc">
        <SearchBox onSearchChange={onSearchChange} />
        </div>
        <Scroll>
          <ErrorBoundry>
            <CardList todos={filteredTodo} />
          </ErrorBoundry>
        </Scroll>
        </div>
      );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
