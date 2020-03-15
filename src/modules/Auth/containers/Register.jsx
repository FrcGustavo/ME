/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
//import firebase from '../../../utils/firebase';
import {  } from 'firebase/auth';

const Register = () => {
  //const firebase = fire.getFire();
  //console.log(firebase.auth().createUserWithEmailAndPassword());

  function handleSubmit(e) {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword('hello@mail.com', '123456');
    console.log('HOLA');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input type="text" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input type="text" id="password" name="password" />
      </div>
      <div>
        <input type="submit" value="Registrar" />
      </div>
    </form>
  );
};

export default Register;
