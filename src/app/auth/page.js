import React from "react";

const auth = () => {
  return (
    <div className="container">
      <form className="flex flex-col gap-2 my-4">
        <div className="flex items-center justify-center">
          <label className="w-[100px]" htmlFor="email">
            Email:
          </label>
          <input
            className="border border-black"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="flex items-center justify-center">
          <label className="w-[100px]" htmlFor="password">
            Passowrd:
          </label>
          <input
            className="border border-black"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className="flex items-center justify-center">
          <label className="w-[100px]" htmlFor="confirmPassword">
            Confirm Passowrd:
          </label>
          <input
            className="border border-black"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default auth;
