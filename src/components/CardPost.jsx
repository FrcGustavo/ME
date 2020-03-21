import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/CardPost.scss';

const CardPost = (props) => {
  const { cover, title, description, link } = props.post;
  return (
    <article className="card-post">
      <img src={cover} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={link} className="btn-post">Leer más</Link>
    </article>
  );
};

export default CardPost;
