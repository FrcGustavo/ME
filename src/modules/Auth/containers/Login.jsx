/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { loginUser } from '../../../actions/firebase';

const Login = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    loginUser(form.email, form.password)
      .then((res) => {
        window.location.href = '/admin';
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form form">
      <div className="form-title">
        <h1>Iniciar Sesión</h1>
      </div>
      <div className={(form.email !== '') ? 'input-form active' : 'input-form'}>
        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} />
        <label htmlFor="email">email</label>
      </div>
      <div className={(form.password !== '') ? 'input-form active' : 'input-form'}>
        <input type="password" id="password" name="password" value={form.password} onChange={handleChange} />
        <label htmlFor="password">Contraseña</label>
      </div>
      <div className="input-submit">
        <input type="submit" value="Entarr" />
        <Link to="/auth/register">Crear Cuenta</Link>
      </div>
    </form>
  );
};

export default Login;
