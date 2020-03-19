/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form form">
      <div className="form-title">
        <h1>Resgistrate</h1>
      </div>
      <div className={(form.name !== '') ? 'input-form active' : 'input-form'}>
        <input type="text" id="name" name="name" value={form.name} onChange={handleChange} />
        <label htmlFor="name">Nombre</label>
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
        <input type="submit" value="Registrar" />
        <Link to="/auth/login">Iniciar Sessión</Link>
      </div>
    </form>
  );
};

export default Register;
