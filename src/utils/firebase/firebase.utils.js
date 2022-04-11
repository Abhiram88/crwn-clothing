import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore,
         doc, 
         getDoc,
         setDoc,
        } from 'firebase/firestore'

  //doc method retrieves documents stored inside firebase. to access those documnets
  // we use getDoc

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

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
            console.log(`New user created: ${email}`);
        }catch(e){
            console.log(e);
        }
    }

    return userDocRef;
  }



