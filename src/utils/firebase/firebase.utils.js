import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDVsNPpMVZOIxUTbkBcIQX7DVorFMYNEbs",
    authDomain: "crwn-clothing-db-73d6e.firebaseapp.com",
    projectId: "crwn-clothing-db-73d6e",
    storageBucket: "crwn-clothing-db-73d6e.appspot.com",
    messagingSenderId: "367619084788",
    appId: "1:367619084788:web:dd53e80c4dbbba4b4569a1"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => {
      return signInWithPopup(auth, provider)
  };

