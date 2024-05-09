import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useActionData } from "react-router-dom";
import toast from "react-hot-toast";
import { GlobalContext } from "../context/useGlobal";
import { useContext,useEffect } from "react";
function useLogin() {
    const actionData = useActionData();
    const { dispatch } = useContext(GlobalContext);

    useEffect(() => {
    if (actionData) {
      if (actionData) {
        loginWithEmailAndPassword(actionData);
      }
    }
  }, [actionData]);

  const loginWithEmailAndPassword = (actionData) => {

    signInWithEmailAndPassword(auth, actionData.email, actionData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOG_IN", payload: user });
        toast.success("Welcome");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return;
}

export { useLogin };
