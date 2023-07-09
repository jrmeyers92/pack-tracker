"use client";

import { useEffect, useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { auth } from "../firebase/firebaseConfig";
import { useRouter } from "next/navigation.js";
import { useAuthState } from "react-firebase-hooks/auth";

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
      <h2 className="my-4 text-3xl">Signup</h2>
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
    </div>
  );
};

export default signup;
