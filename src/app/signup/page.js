"use client";

import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { auth } from "../firebase/firebaseConfig";
import { useRouter } from "next/navigation.js";
import { useAuthState } from "react-firebase-hooks/auth";

const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, signup } = useSignup();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (user) {
    router.push("/");
  }

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
        <button className="bg-primary px-4 py-2 mt-4 text-white">login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default signup;
