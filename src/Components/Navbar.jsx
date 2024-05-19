import React from 'react';
import { Link } from 'react-router-dom';
import search_icon_light from '../assets/search-w.png';
import toggle_light from '../assets/night.png';
import './Navbar.css';
const Navbar = ({ logInflag, userDetailsContainer }) => {
  return (
    <nav className='navbar'>
      <h1 className='logo'>ByteP<i className="fa-solid fa-pen-to-square"></i>st</h1>
      <ul>
        <li><Link to="/" className='item'>Home</Link></li>
        <li><Link to="/about" className='item'>About</Link></li>
        <li><Link to="/posts" className='item'>My Posts</Link></li>
        <li><Link to="/Postcreateform" className='item'>Create Post</Link></li>
        {!logInflag && <li><Link to="/login">Login</Link></li>}
      </ul>
      <div className='search-box'>
        <input type="text" placeholder='Search'></input>
        <img src={search_icon_light} alt="" className='search-icon'/>
      </div>
      <img src={toggle_light} alt="" className='toggle-icon'/>
      {logInflag && <div className="profile-icon">{userDetailsContainer.email[0]}</div>}
    </nav>
  );
};

export default Navbar;