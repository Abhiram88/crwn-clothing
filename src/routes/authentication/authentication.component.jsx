import { useEffect, useState } from "react";
import { getRedirectResult } from "firebase/auth";

import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  const [email, setEmail] = useState("");

  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);

  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //     console.log(response.user.email);
  //     setEmail(response.user.email);
  //   }
  // }, []);

  return (
    <div className="authntication-container">
      <SignInForm />
      {/* <button onClick={getRedirectResult}>Sign in with Google popup</button> */}
      <SignUpForm />

      <div>{/* <h2>Welcome {email}</h2> */}</div>
    </div>
  );
};

export default Authentication;
