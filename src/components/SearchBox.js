import React from 'react'

export default function SearchBox({ onSearchChange }) {
    return (
        <input
        className='pa3 ba b--green bg-lightest-blue'
        style={{width: '400px', height: '30px' , maxWidth: '400px'}}
        type='search'
        placeholder='search..'
        onChange={onSearchChange}
        />
    )
}
