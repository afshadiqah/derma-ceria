// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAUxIW-W0gj1xArB6aRxWwgkaBYJ4MZQPw",
  authDomain: "derma-ceria.firebaseapp.com",
  projectId: "derma-ceria",
  storageBucket: "derma-ceria.appspot.com",
  messagingSenderId: "345079456349",
  appId: "1:345079456349:web:098ecf2a0968365e1d23b4",
  measurementId: "G-X5NM13HGKV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
