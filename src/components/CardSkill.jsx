import React from 'react';

const CardSkill = ({ skill }) => (
  <div className="skill">
    <h6 className="skill__title">{skill.title}</h6>
    <div className="skill__loader" style={{ 'backgroundColor': skill.color }}>
      <p>{skill.level}</p>
    </div>
  </div>
);

export default CardSkill;
