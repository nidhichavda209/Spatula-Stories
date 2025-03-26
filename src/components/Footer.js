import React from 'react'

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-main">
        <div class="f-left">
          <p>
            <a href="#about">About Us</a> |
            <a href="#contact">&#128222;Contact</a> |
            <a href="#privacy">Privacy Policy</a>
          </p>
          <p>Follow us on:
            <a href="https://facebook.com"> <img src="/assets/fb_logo.png" alt="fb-logo" width="15px" />Facebook</a>
            <a href="https://twitter.com">Twitter</a>
            <a href="https://instagram.com">Instagram</a>
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