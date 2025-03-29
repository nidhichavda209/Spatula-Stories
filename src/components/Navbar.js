import React from 'react'
import Dropdown from './Dropdown'

const Navbar = () => {
  return (
    <nav>
    <div class="logo">
      <img src="/assets/logo.png" alt="Logo"/> 
      <span>Spatula Stories</span>
    </div>

    <label for="menu-toggle" class="menu-icon">&#9776;</label>
    <input type="checkbox" id="menu-toggle" />

    <div class="nav-links">
      <a href="/">Home</a>
        <Dropdown/>
      <a href="/add_recipe">Add Recipe</a>
      <a href="/login">Login</a>
    </div>
  </nav>
  )
}

export default Navbar