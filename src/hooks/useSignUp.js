import { GlobalContext } from "../context/useGlobal";
import { useContext, useEffect } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase/firebaseConfig";
import { useActionData } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

function useSignUp() {
  const actionData = useActionData();

  useEffect(() => {
    if (actionData) {
      if (actionData) {
        registerWithEmailAndPassword(actionData);
      }
    }
  }, []);

  const { dispatch } = useContext(GlobalContext);

  const signUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        dispatch({ type: "LOG_IN", payload: user });
        toast.success("Welcome");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(errorMessage);
      });
  };

  const registerWithEmailAndPassword = (actionData) => {
    createUserWithEmailAndPassword(auth, actionData.email, actionData.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return { signUpWithGoogle };
}

export { useSignUp };
