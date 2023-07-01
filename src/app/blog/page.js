import Image from "next/image";
import heroImage from "../../../public/blog-hero.jpg";
const blog = () => {
  return (
    <>
      <section className="heroHeight relative">
        <Image
          src={heroImage}
          width={1500}
          height={755}
          alt="Picture of the author"
          className="w-full brightness-75"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center pb-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold">
          Some blog and store recomendations
        </h1>
      </section>
      <section className="container mx-auto pt-4 pb-8 min-h-[500px]">
        <h2 className="text-2xl my-2">Blogs</h2>
        <div className="flex">
          <a
            className="underline text-blue-500"
            href="https://www.cleverhiker.com/"
            target="_blank"
          >
            Clever Hiker
          </a>
          <p>
            &nbsp; A blog I found that has some really good recomendations to
            lighten your load
          </p>
        </div>
        <h2 className="text-2xl my-2">Stores</h2>
        <div className="flex">
          <a
            className="underline text-blue-500"
            href="https://www.garagegrowngear.com/"
          >
            Garage Grown Gear
          </a>
          <p>
            &nbsp; A ecommerce store with a bunch of cottage brands you may have
            never heard of before
          </p>
        </div>
      </section>
    </>
  );
};

export default blog;
