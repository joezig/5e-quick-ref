import React from 'react';
import './SearchBar.css';

function SearchBar({ handleChange, placeholder }) {
    return (
        <div className='Search'>
            <h1>5e Spell List</h1>
            <input 
                type='search' 
                placeholder={placeholder} 
                onChange={handleChange} 
            />
        </div>
    )
}

export default SearchBar;