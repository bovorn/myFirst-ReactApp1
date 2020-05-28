import React, { Component } from 'react';

import CardList from './CardList';
import ErrorBoundry from './ErrorBoundry';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import Loading from './Loading';
import Header from './Header';

import './MainPage.css';


class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })
  }

  render() {
    const { onSearchChange, isPending } = this.props;

    return (
      <div className='tc'>
        <div>
        <Header />
        <SearchBox onSearchChange={onSearchChange}/>
        <Scroll isPending={isPending}>
          { isPending ? <Loading /> :
            <ErrorBoundry>
              <CardList robots={this.filteredRobots()} />
            </ErrorBoundry>
          }
        </Scroll>
        </div>
      </div>
    );
  }
}



export default MainPage;
