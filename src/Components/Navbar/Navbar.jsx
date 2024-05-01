import React, { useEffect } from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'
import { Link,NavLink, useLocation } from 'react-router-dom'
import About from '../About'
const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='logo'>ByteP<i className="fa-solid fa-pen-to-square"></i>st</h1>

      <ul>
      <Link to={"/app"}><li className='item'>Home</li></Link>
        <li className='item'>Blogs</li>
        <Link to={'/about'}> <li className='item'>About</li></Link>
        <Link to={'/login'}><li className='item'>Login</li></Link>
        <li className='item'>MyPosts</li>
      </ul>
      <div className='search-box'>
        <input type="text" placeholder='Search'></input>
        <img src={search_icon_light} alt="" className='search-icon'/>
      </div>
      <img src={toggle_light} alt="" className='toggle-icon'/>
    </div>
  )
}

export default Navbar
