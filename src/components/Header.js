import React from 'react';
import CounterButton from './CounterButton';

export default function Header() {
    return (
        <div>
            <h1 className='f1'>Monsters</h1>
            <div>
            <CounterButton color='white' />
            </div>
        </div>
    )
}
