import React from 'react';
import './projects.css';

import { Project } from '../../components';

import proj1 from '../../media/spc.png';
import proj2 from '../../media/matcha.png';
import proj3 from '../../media/blg.png';

export default function Projects() {
  return (
    <section className="projects container" id="projects">
      <h2>Projects</h2>
      <Project
        title="SPC Landing Page"
        desc="School Website"
        img={proj1}
        orientation="row"
      />
      <Project
        title="Matcha Website"
        desc="Business Website"
        img={proj2}
        orientation="row-reverse"
      />
      <Project
        title="Blug"
        desc="Blog Web Application"
        img={proj3}
        orientation="row"
      />
    </section>
  );
}
