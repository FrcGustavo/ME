import React from 'react';

import CardProject from '../components/CardProject';

import IAm from '../assets/img/Iam.jpg';
import githubIcon from '../assets/img/github.svg';
import twitterIcon from '../assets/img/twitter.svg';
import linkedinIcon from '../assets/img/linkedin.svg';

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
  return (
    <div className="home">
      <div className="profile">
        <div className="main">
          <div className="profile-cover">
            <img src={IAm} alt="Yo soy" />
          </div>
          <div className="profile-container">
            <div className="profile-name">
              <h1>Francisco Gustavo</h1>
            </div>
            <div className="profile-profession">
              <h2>Dessarrollador JavaScript | Frontend | Backend</h2>
            </div>
            <div className="profile-description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, et? Saepe, delectus? Aspernatur sapiente aliquam iste cupiditate quaerat nesciunt illum sunt fugit? Eveniet perferendis repellendus vitae debitis suscipit ipsam asperiores.
              </p>
            </div>
            <div className="profile-socialmedia">
              <a href="https://github.com/FranciscoGustavo" target="_blanck">
                <img src={githubIcon} alt="Github" />
              </a>
              <a href="https://twitter.com/FrcGustavo" target="_blanck">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="https://www.linkedin.com/in/frcgustavo/" target="_blanck">
                <img src={linkedinIcon} alt="Linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="main">
          <CardProject />
          <CardProject />
          <CardProject />
        </div>
      </div>
    </div>
  );
};

export default Home;
