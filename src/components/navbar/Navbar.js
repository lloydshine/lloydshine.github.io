import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 800 && toggle) {
        setToggle(false);
      }
    };
    // Add the event listener when the component mounts
    window.addEventListener('resize', handleResize);
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [toggle]);
  return (
    <>
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
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
      </header>
      <div
        className="pop-links container"
        style={{ height: toggle ? '4rem' : '0px' }}
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
      </div>
    </>
  );
}
