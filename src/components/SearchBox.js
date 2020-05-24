import React from 'react'

export default function SearchBox({ onSearchChange }) {
    return (
        <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search..'
        onChange={onSearchChange}
        />
    )
}
