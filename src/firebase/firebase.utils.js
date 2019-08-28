import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBpwQ60xNgBIm1UUVIZg0LsM9rVdicqZM0",
    authDomain: "crown-dp.firebaseapp.com",
    databaseURL: "https://crown-dp.firebaseio.com",
    projectId: "crown-dp",
    storageBucket: "",
    messagingSenderId: "364786096555",
    appId: "1:364786096555:web:cc11cdd2075aad3f"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth() ;
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;