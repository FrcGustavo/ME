import React from 'react';
import CardProject from '../components/CardProject';
import '../assets/styles/containers/Projects.scss';

const projects = [
  { img: '', title: 'Infrastructure', description: 'Infrastructure es la primera aplicación full stack que hice, es un sistemas para hacer pedidos a travez de internet', github: '/#', liveDemo: '/#', codepen: '/#' },
  { img: '', title: 'FacilitoRetro', description: 'Parte del reto de codigo facilito para crear una pagina retro, como se hacian las paginas en el año 2010', github: '', liveDemo: '', codepen: '' },
  { img: '', title: '', description: '', github: '', liveDemo: '', codepen: '' },
  { img: '', title: '', description: '', github: '', liveDemo: '', codepen: '' },
  { img: '', title: '', description: '', github: '', liveDemo: '', codepen: '' },
  { img: '', title: '', description: '', github: '', liveDemo: '', codepen: '' },
  { img: '', title: '', description: '', github: '', liveDemo: '', codepen: '' },
  { img: '', title: '', description: '', github: '', liveDemo: '', codepen: '' },
];

const Projects = () => {
  const showProjects = () => {
    return projects.map((project, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <CardProject key={idx} project={project} />
    ));
  };

  return (
    <div className="projects">
      <div className="main">
        <div className="projects-list">
          {showProjects()}
        </div>
      </div>
    </div>
  );
};

export default Projects;
