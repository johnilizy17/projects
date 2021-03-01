import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import useAuthState from 'react-firebase-hook/auth';
import useCollectionData from 'react-firebase-hook/collection';
const firebaseConfig = {
  apiKey: "AIzaSyDAPllxQ0LyJx8y0jnIcDmh8NtFZQagfQA",
  authDomain: "chapapp-29aae.firebaseapp.com",
  projectId: "chapapp-29aae",
  storageBucket: "chapapp-29aae.appspot.com",
  messagingSenderId: "279978241586",
  appId: "1:279978241586:web:4004b26d8af3eab017162b",
  measurementId: "G-3XPGH5PQZQ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;