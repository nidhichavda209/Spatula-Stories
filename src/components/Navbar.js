import React from 'react'
import '../Styles/Navbar.css';
import Dropdown from './Dropdown'

const Navbar = ({ onCategoryChange }) => {
  return (
    <nav>
    <div class="logo">
      <img src="https://thumbs.dreamstime.com/b/black-white-spatula-soup-ladle-cross-icon-kitchen-tools-cooking-vector-isolated-white-black-white-spatula-soup-221498206.jpg" alt="Logo"/> 
      <span>Spatula Stories</span>
    </div>

    <label for="menu-toggle" class="menu-icon">&#9776;</label>
    <input type="checkbox" id="menu-toggle" />

    <div class="nav-links">
      <a href="/">Home</a>
        <Dropdown onCategoryChange={onCategoryChange}/>
      <a href="/login">Login</a>
      <a href="/about">About Us</a>
    </div>
  </nav>
  )
}

export default Navbar