import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Example social icons (you might need to install react-icons)
import './css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">
      <ul className="footer-links">
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/privacy">Privacy Policy</a>
        </li>
        <li>
          <a href="/terms">Terms of Service</a>
        </li>
        <li>
          <a href="/faq">FAQ</a>
        </li>
      </ul>

      <div className="social-icons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>

      <p className="copyright">
        &copy; {new Date().getFullYear()} Your Job Portal. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
