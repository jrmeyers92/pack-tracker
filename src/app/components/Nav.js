import Image from "next/image";

const Nav = () => {
  return (
    <nav className="bg-primary">
      <ul className="flex items-center">
        <li className="flex-1 mx-2 uppercase text-xl font-bold">
          <Image
            src="/logo-color.png"
            alt="pack tracker logo"
            width={120}
            height={200}
          ></Image>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
