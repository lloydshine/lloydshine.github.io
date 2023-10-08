import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="navbar">
      <div className="nav-logo">
        <h2>
          <span>Sem</span>blante
        </h2>
      </div>
      <div id="menu-button">
        {toggle ? (
          <RiCloseLine
            color="white"
            size={26}
            onClick={() => setToggle(false)}
          />
        ) : (
          <RiMenu3Line
            color="white"
            size={26}
            onClick={() => setToggle(true)}
          />
        )}
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </header>
  );
}
