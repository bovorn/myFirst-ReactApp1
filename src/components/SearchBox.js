import React , { Component } from 'react'

const SearchBox = ({ onSearchChange }) =>  {
    return (
        <input
        aria-label="Search Robot"
        className='pa3 ba b--green bg-lightest-blue'
        style={{width: '400px', height: '30px' , maxWidth: '400px'}}
        type='search'
        placeholder='Search...'
        onChange={onSearchChange}
        />
    );
} 



export default SearchBox;