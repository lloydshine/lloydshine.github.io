import React from 'react';
import './hero.css';

import { Navbar } from '../../components';

export default function Hero() {
  return (
    <section className="hero" id='home'>
      <Navbar />
      <div className="intro">
        <div className="intro-text">
          <h1>Lloyd Semblante</h1>
          <p>
            Web Developer <span>/</span> Web Designer
          </p>
          <button>Hire Me</button>
        </div>
        <div className="intro-text">
          <h2>
            I DECIDE, <span>I CREATE</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
