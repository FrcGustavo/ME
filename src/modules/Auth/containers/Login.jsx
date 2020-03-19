/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
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
        <label htmlFor="email">Correo</label>
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
