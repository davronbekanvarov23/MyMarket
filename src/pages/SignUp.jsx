import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useSignUp } from "../hooks/useSignUp";
//context

function SignUp() {
  const { signUpWithGoogle } = useSignUp();

  return (
    <div className="min h-screen grid place-content-center">
      {" "}
      <button
        onClick={signUpWithGoogle}
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
