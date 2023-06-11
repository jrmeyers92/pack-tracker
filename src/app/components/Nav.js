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
      </ul>
    </nav>
  );
};

export default Nav;
