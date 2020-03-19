import React from 'react';

import cover from '../assets/img/nextparty.png';

import '../assets/styles/components/CardProject.scss';

const CardProject = ({ project }) => (
  <div className="project-card">
    <div className="project-cover">
      <img src={cover} alt="" />
    </div>
    <div className="project-container">
      <div className="project-title">
        <h3>Titulo de mi proyecto</h3>
      </div>
      <div className="project-description">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem praesentium fuga excepturi odit accusamus nisi nam et nihil officiis atque modi porro ad voluptatibus architecto.</p>
      </div>
      <div className="project-actions">
        <a href="/" target="_blank">GITHUB</a>
        <a href="/" target="_blank">Ver Demo</a>
      </div>
    </div>
  </div>
);

export default CardProject;
