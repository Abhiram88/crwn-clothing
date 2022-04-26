import { async } from '@firebase/util';
import { Password } from '@mui/icons-material';
import { initializeApp } from 'firebase/app';
import { getAuth, 
        signInWithRedirect, 
        signInWithPopup, 
        GoogleAuthProvider, 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword } from 'firebase/auth'
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

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
      prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => {
      return signInWithPopup(auth, googleProvider)
  };
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);
    //console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo,
            });
            console.log(`New user created: ${email}`);
        }catch(e){
            console.log(e.message);
        }
    }

    return userDocRef;
  }


export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

