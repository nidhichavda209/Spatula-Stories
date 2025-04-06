import React from "react";
import { Facebook, Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="f-left">
          <p>
            <a href="/contact">
              <Phone size={15} /> Contact
            </a> |
            <a href="/privacypolicy"> Privacy Policy</a>
          </p>
          <p>
            Follow us on:
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook size={15} /> Facebook
            </a> |
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              &#120143; Twitter
            </a> |
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram size={15} /> Instagram
            </a>
          </p>
        </div>
        <div className="f-right">
          <p>&copy; {new Date().getFullYear()} Spatula Stories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
