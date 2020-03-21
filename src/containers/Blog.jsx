import React from 'react';

import CardPost from '../components/CardPost';
import Footer from '../components/Footer';

import cover from '../assets/img/main-post.png';

import '../assets/styles/containers/Blog.scss';

const Blog = () => {
  const post = {
    cover,
    title: 'Este es el titulo',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut a fugiat soluta consequatur nisi sunt.',
    link: '/',
  };

  return (
    <>
      <div className="blog">
        <div className="main-post">
          <div className="main">
            <div className="main-post-img">
              <img src={cover} alt="" />
            </div>
            <div className="main-post-title">
              <h1>Titulo de mi post</h1>
            </div>
            <div className="main-post-description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, impedit obcaecati. Quos quisquam aspernatur dicta pariatur, totam deleniti sit cumque consequatur magni, possimus earum debitis ad tempore, quo aperiam porro?</p>
            </div>
            <div className="main-post-action">
              <button type="button">Leer</button>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="posts">
            <CardPost post={post} />
            <CardPost post={post} />
            <CardPost post={post} />
            <CardPost post={post} />
            <CardPost post={post} />
            <CardPost post={post} />
            <CardPost post={post} />
            <CardPost post={post} />
            <CardPost post={post} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
