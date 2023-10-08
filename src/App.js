import React from 'react';
import './style.css';

import { Footer } from './components';
import { Hero, About, Projects, Socials } from './containers';

export default function App() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Socials />
      <Footer />
    </div>
  );
}
