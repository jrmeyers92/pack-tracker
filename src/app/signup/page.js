"use client";

import { useEffect, useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { auth } from "../firebase/firebaseConfig";
import { useRouter } from "next/navigation.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const { error, signup } = useSignup();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (user) {
    router.push("/");
  }

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  useEffect(() => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

    if (
      password == confirmPassword &&
      password.length > 3 &&
      regex.test(email)
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
  };

  return (
    <div className="container mx-auto flex items-center justify-center flex-col">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="flex items-center justify-between my-2">
          <span className="mr-2">email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-gray-300"
          />
        </label>
        <label className="flex items-center justify-between my-2">
          <span className="mr-2">password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-gray-300"
          />
        </label>

        <label className="flex items-center justify-between my-2">
          <span className="mr-2">confirm password:</span>
          <input
            required
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            className="border border-gray-300"
          />
        </label>
        <button className="btn" type="submit" disabled={disabled}>
          Sign up
        </button>
        {error && <p>{error}</p>}
      </form>
      <button className="btn my-4" onClick={handleGoogleSignIn}>
        Sign Up with Google
      </button>
    </div>
  );
};

export default signup;
