import React from 'react';
import Footer from '../components/Footer';

import cover from '../assets/img/main-post.png';

import '../assets/styles/containers/Blog.scss';

const Blog = () => {
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
            <article className="post-card">
              <img src={cover} alt="" />
              <h2>Título del blog post</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut a fugiat soluta consequatur nisi sunt.</p>
              <a href="/" className="btn-post">Leer más</a>
            </article>
            <article className="post-card">
              <img src={cover} alt="" />
              <h2>Título del blog post</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut a fugiat soluta consequatur nisi sunt.</p>
              <a href="/" className="btn-post">Leer más</a>
            </article>
            <article className="post-card">
              <img src={cover} alt="" />
              <h2>Título del blog post</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut a fugiat soluta consequatur nisi sunt.</p>
              <a href="/" className="btn-post">Leer más</a>
            </article>
            <div>Hola</div>
            <div>Hola</div>
            <div>Hola</div>
            <div>Hola</div>
            <div>Hola</div>
            <div>Hola</div>
            <div>Hola</div>
            <div>Hola</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
