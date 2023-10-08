import React from 'react';
import './project.css';

export default function Project({ title, desc, img, orientation }) {
  return (
    <div className="project container" style={{ flexDirection: orientation }}>
      <div className="project-info">
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
        <hr />
      </div>
      <img src={img} alt="project" />
    </div>
  );
}
