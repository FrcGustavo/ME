import React from 'react';
import { Link } from 'react-router-dom';
import shortDescription from '../utils/shortDescription';
import '../assets/styles/components/CardProject.scss';

const CardProject = ({ project }) => (
  <div className="card-project">
    <div className="card-img">
      <img src={project.img} alt="" />
    </div>
    <h3 className="card-title">{project.title}</h3>
    <div className="card-description">
      <p>{shortDescription(project.description)}</p>
    </div>
    <div className="card-actions">
      <Link to={project.github} target="_blank">GitHub</Link>
      <Link to={project.codepen}>CodePen</Link>
      <Link to={project.liveDemo}>Live Demo</Link>
    </div>
  </div>
);

export default CardProject;
