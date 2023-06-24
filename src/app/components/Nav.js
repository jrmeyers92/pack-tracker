import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-primary px-2 sm:px-4">
      <ul className="flex items-center">
        <li className="flex-1 mx-2 uppercase text-xl font-bold">
          <Image
            src="/logo-color.png"
            alt="pack tracker logo"
            width={120}
            height={200}
          ></Image>
        </li>
        <li className="bg-white px-4 py-2 text-lg rounded-sm hover:bg-gray-100 cursor-pointer duration-150 shadow-sm hover:shadow-md">
          <Link href="/explore">Explore</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
