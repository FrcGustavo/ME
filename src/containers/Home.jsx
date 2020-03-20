import React from 'react';

import cover from '../assets/img/nextparty.png';

import IAm from '../assets/img/Iam.jpg';
import githubIcon from '../assets/img/github.svg';
import twitterIcon from '../assets/img/twitter.svg';
import linkedinIcon from '../assets/img/linkedin.svg';

import '../assets/styles/containers/Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <div className="profile">
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
        <div className="post">
          <div className="post-card">
            <div className="post-cover">
              <img src={cover} alt="" />
            </div>
            <div className="post-container">
              <div className="post-title">
                <h3>Titulo post</h3>
              </div>
              <div className="post-description">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem praesentium fuga excepturi odit accusamus nisi nam et nihil officiis atque modi porro ad voluptatibus architecto.</p>
              </div>
              <div className="post-actions">
                <a href="/" target="_blank">Leer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
