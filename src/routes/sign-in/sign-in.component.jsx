import { useEffect, useState } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up/sign-up-form.component";

const SignIn = () => {
  const [email, setEmail] = useState("");

  useEffect(async () => {
    const response = await getRedirectResult(auth);

    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
      console.log(response.user.email);
      setEmail(response.user.email);
    }
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h2>Sign in</h2>
      <button onClick={logGoogleUser}>Sign in with Google popup</button>
      {/* <button onClick={getRedirectResult}>Sign in with Google popup</button> */}
      <SignUpForm />

      <div>{/* <h2>Welcome {email}</h2> */}</div>
    </div>
  );
};

export default SignIn;
