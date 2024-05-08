import React from "react";
import { FaGoogle } from "react-icons/fa";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

//context
import { GlobalContext } from "../context/useGlobal";
import { useContext } from "react";

function SignUp() {
  const { dispatch } = useContext(GlobalContext);

  const handleSignUp = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        dispatch({ type: "LOG_IN", payload: user });

        console.log(ucer);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
      });
  };

  return (
    <div className="min h-screen grid place-content-center">
      {" "}
      <button
        onClick={handleSignUp}
        type="button"
        className="btn btn-secondary"
      >
        <FaGoogle className="h-5 w-5" />
        Signup
      </button>
    </div>
  );
}

export default SignUp;
