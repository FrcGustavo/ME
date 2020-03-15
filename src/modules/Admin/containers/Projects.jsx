import React from 'react';

const Projects = () => {
  return (
    <div>
      <div>
        <h1>Proyectos</h1>
        <button type="button">Nuevo</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Github</th>
              <th>Demo</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Projects;
