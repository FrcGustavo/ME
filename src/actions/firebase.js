/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../config';

firebase.initializeApp(firebaseConfig);

export const createUser = async (email, password, name) => {
  try {
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
    await result.user.updateProfile({
      displayName: name,
    });
    const config = {
      url: 'http://localhost:8080/auth/login',
    };
    await result.user.sendEmailVerification(config);
    firebase.auth().signOut();
    return 'Se registro exitosamente, por favor verifique su correo';
  } catch (error) {
    firebase.auth().signOut();
    console.log(error);
    return error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const result = await firebase.auth().signInWithEmailAndPassword(email, password);
    return result.user.emailVerified;
  } catch (error) {
    return error.message;
  }
};

export const hasUser = () => {
};
