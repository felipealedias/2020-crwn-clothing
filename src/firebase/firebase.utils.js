import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCLe0PT4nryveq6w568hrGhNwCuU1cYIxs",
    authDomain: "crown-db-b5b7e.firebaseapp.com",
    databaseURL: "https://crown-db-b5b7e.firebaseio.com",
    projectId: "crown-db-b5b7e",
    storageBucket: "crown-db-b5b7e.appspot.com",
    messagingSenderId: "213099376558",
    appId: "1:213099376558:web:94d097277111fa58c3a23f",
    measurementId: "G-7C69VPHPMC"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;