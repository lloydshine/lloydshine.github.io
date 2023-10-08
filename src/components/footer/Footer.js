import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <h3>
          <span>Sem</span>blante
        </h3>
        <p>Copyright 2023</p>
      </div>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#socials">Socials</a>
      </div>
    </footer>
  );
}
