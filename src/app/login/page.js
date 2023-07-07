"use client";

import { useRouter } from "next/navigation.js";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebaseConfig";
import { useLogin } from "../hooks/useLogin.js";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, login } = useLogin();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (user) {
    router.push("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container mx-auto flex items-center justify-center flex-col">
      <h2>Login</h2>
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

export default login;
