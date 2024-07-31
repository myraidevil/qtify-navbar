import React from 'react';
import './SearchBar.css';

const Searchbar = () => {
  return (
    <div className='searchbar'>
      <input type="text" placeholder='Search an album of your choice' />
      <button><i className="fa-solid fa-magnifying-glass"></i></button>
    </div>
  );
}

export default Searchbar;