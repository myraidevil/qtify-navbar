import React from 'react';
import './NavBar.css';
import Searchbar from './SearchBar';
import Feedback from './Feedback';
import Logo from '../logo';

const Navbar = ({ onFeedbackButtonClick }) => {
  return (
    <div className='navbar'>
    <div className='logo'><Logo/></div>
      <Searchbar />
      <div className='feedback'>
        <Feedback onFeedbackButtonClick={onFeedbackButtonClick} />
      </div>
    </div>
  );
}

export default Navbar;