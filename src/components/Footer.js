// components/Footer.js
import React from 'react';

function Footer({ name }) {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
      <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
    </footer>
  );
}

export default Footer;