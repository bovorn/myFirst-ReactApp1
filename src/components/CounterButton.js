import React, { Component } from 'react';
import randomColor from '../utils/randomColor';

class CounterButton extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0,
            color: this.props.color
        };
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if(this.state.count !== nextState.count){
            this.setState({color: randomColor()})
            return true;
        }
        return false;
    }
      
    render() { 

        const styles = {
            counterBtn: {
                color: this.state.color,
                backgroundColor: 'transparent',
                border: `1px solid ${this.state.color}`,
                margin: 8,
                padding: 10,
                borderRadius: 5,
                cursor: 'pointer',
            }
        }
        return (
            <button
                style={styles.counterBtn}
                id="counter"
                onClick={() => this.setState(state => ({count: state.count + 1}))}>
                Count: {this.state.count}
            </button>
        )
    }
}

export default CounterButton;
