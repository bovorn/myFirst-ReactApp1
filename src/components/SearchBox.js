import React from 'react'

export default function SearchBox({ searchfield, onSearchChange }) {
    return (
        <input
        aria-label="Search Robot"
        className='pa3 ba b--green bg-lightest-blue'
        style={{width: '400px', height: '30px' , maxWidth: '400px'}}
        type='search'
        placeholder='Search...'
        onChange={onSearchChange}
        />
    )
}
