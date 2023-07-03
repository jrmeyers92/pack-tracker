"use client";

import Image from "next/image";
import Link from "next/link";

import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Nav = () => {
  const { user, authIsReady } = useAuthContext();

  const logout = useLogout();

  return (
    <nav className="bg-primary px-2 sm:px-4">
      <ul className="flex items-center">
        <li className="flex-1 mx-2 uppercase text-xl font-bold">
          <Link href="/">
            <Image
              src="/logo-color.png"
              alt="pack tracker logo"
              width={120}
              height={200}
            ></Image>
          </Link>
        </li>
        {/* <li className="bg-white px-4 py-2 text-lg rounded-sm hover:bg-gray-100 cursor-pointer duration-150 shadow-sm hover:shadow-md">
          <Link href="/explore">Explore</Link>
        </li> */}
        <li className="bg-white mx-2 px-4 py-2 text-lg rounded-sm hover:bg-gray-100 cursor-pointer duration-150 shadow-sm hover:shadow-md">
          <Link href="/blog">Blog</Link>
        </li>

        {!user && (
          <li className="bg-white mx-2 px-4 py-2 text-lg rounded-sm hover:bg-gray-100 cursor-pointer duration-150 shadow-sm hover:shadow-md">
            <Link href="/login">Login</Link>
          </li>
        )}

        {!user && (
          <li className="bg-white mx-2 px-4 py-2 text-lg rounded-sm hover:bg-gray-100 cursor-pointer duration-150 shadow-sm hover:shadow-md">
            <Link href="/signup">Signup</Link>
          </li>
        )}

        {user && (
          <li
            onClick={logout}
            className="bg-white mx-2 px-4 py-2 text-lg rounded-sm hover:bg-gray-100 cursor-pointer duration-150 shadow-sm hover:shadow-md"
          >
            Logout
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
