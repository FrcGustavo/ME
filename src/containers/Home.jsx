import React from 'react';
import CardSkill from '../components/CardSkill';
import IAm from '../assets/img/Iam.jpg';
import '../assets/styles/containers/Home.scss';

const skills = [
  { title: 'JavaScript', level: 'Intermedio - Avanzado', color: '#F0D91D' },
  { title: 'TypeScript', level: 'Basico', color: '#0077C6' },
  { title: 'PHP', level: 'Basico', color: '#7478AE' },
  { title: 'MongoDB', level: 'Basico', color: '#4C9545' },
  { title: 'SQL', level: 'Basico', color: '#F8AD02' },
  { title: 'HTML', level: 'Basico', color: '#F8AD02' },
  { title: 'CSS', level: 'Basico', color: '#F8AD02' },
  { title: 'GIT', level: 'Basico', color: '#F8AD02' },
  { title: 'SQL', level: 'Basico', color: '#F8AD02' },
  { title: 'React', level: 'Basico', color: '#F8AD02' },
  { title: 'Angular', level: 'Basico', color: '#F8AD02' },
  { title: 'Express', level: 'Basico', color: '#F8AD02' },
];

const Home = () => {
  const showSkills = () => {
    return skills.map((skill, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <CardSkill key={idx} skill={skill} />
    ));
  };

  return (
    <div className="home">
      <div className="main">
        <div className="profile">
          <div className="profile-img">
            <img src={IAm} alt="FrcGustavo" />
          </div>
          <h1 className="profile-name">Francisco Gustavo</h1>
          <h2 className="profile-title">JavaScript Developer</h2>
          <p className="profile-descripton">
            Llevo dos años aprendiendo y apenas un año ejerciendo en proyectos personales todo lo aprendido, me gusta el desarrollo con JavaScript ya que concidero es mi fuerte, pero de igual forma me gusta experimentar, y constantemente aprendo cosas nuevas.
          </p>
        </div>
        <div className="skills">
          {showSkills()}
        </div>
      </div>
    </div>
  );
};

export default Home;
