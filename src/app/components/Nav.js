import Image from "next/image";

const Nav = () => {
  return (
    <nav className="bg-primary">
      <ul className="flex items-center">
        <li className="flex-1 m-2 uppercase text-xl font-bold">
          <Image
            src="/logo-color.svg"
            alt="pack tracker logo"
            width={105}
            height={60}
          ></Image>
        </li>
        <li className="m-2 px-4 py-2 bg-gray-100 rounded-sm cursor-pointer">
          Sign In
        </li>
        <li className="m-2 px-4 py-2 bg-gray-100 rounded-sm cursor-pointer">
          Register
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
