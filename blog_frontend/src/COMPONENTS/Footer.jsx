import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer-modern">
    <a className="footer-logo" href="/">GreenLeaf<span>&</span>Co.</a>
    <div className="footer-links">
      <a href="/product">Shop</a>
      <a href="/about">About</a>
      <a href="/sustainability">Sustainability</a>
      <a href="/blog">Blog</a>
      <a href="/faq">FAQ</a>
      <a href="/contact">Contact</a>
      <a href="/privacy">Privacy</a>
    </div>
    <div className="footer-copy">© 2026 GreenLeaf & Co. All rights reserved.</div>
  </footer>
);

export default Footer;
