import React from 'react'
import {Facebook, Instagram, Phone} from 'lucide-react'

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-main">
        <div class="f-left">
          <p>
            <a href="#about">About Us</a> |
            <a href="#contact"> <Phone size={15}/> Contact</a> |
            <a href="#privacy"> Privacy Policy</a>
          </p>
          <p>Follow us on:
            <a href="https://facebook.com" target='_blank' rel='noreferrer'> <Facebook size={15}/> Facebook</a> |
            <a href="https://twitter.com" target='_blank' rel='noreferrer'> &#120143; Twitter</a> |
            <a href="https://instagram.com" target='_blank' rel='noreferrer'> <Instagram size={15}/> Instagram</a>
          </p>
        </div>
        <div class="f-right">
          <p>&copy; 2025 Spatula Stories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer