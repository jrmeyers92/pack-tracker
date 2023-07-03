"use client";

import { useState } from "react";
import { useLogin } from "../hooks/useLogin.js";
import { auth } from "../firebase/firebaseConfig";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="container mx-auto flex items-center justify-center flex-col">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>
          <span>email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button className="bg-primary px-4 py-2">login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default login;
