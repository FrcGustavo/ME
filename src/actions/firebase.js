/* eslint-disable import/prefer-default-export */
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../config';

firebase.initializeApp(firebaseConfig);

export const createUser = async (email, password, name) => {
  try {
    let result;
    result = await firebase.auth().createUserWithEmailAndPassword(email, password);
    result = await result.user.updateProfile({
      displayName: name,
    });
    const config = {
      url: 'http://localhost:8080/auth/login',
    };
    result = await result.user.sendEmailVerification(config);
    firebase.auth().signOut();
    return 'Se registro exitosamente, por favor verifique su correo';
  } catch (error) {
    firebase.auth().signOut();
    return error;
  }
};

export const loginUser = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      if (!result.user.emailVerified) {
        firebase.auth().signOut();
      }
    });
};

export const hasUser = (callback) => {
  /*return new Promise((reject, resolve) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) resolve(user);
      reject(user);
    });
  });*/

  return firebase.auth().onAuthStateChanged(callback);

};
