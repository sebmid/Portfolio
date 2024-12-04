import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 mt-6 ml-4 mr-4">
        <div className="col-span-7 place-self-center">
          <h1 className="mb-4  text-4xl lg:text-6xl font-extrabold">
            Hi, I&apos;m Sebastian
          </h1>
          <p className="text-lg lg:text-xl">
            a newly educated developer from Norway, trying to find their way in
            the world of IT.
          </p>
          <div className="mt-4">
            <a
              href="/Contact"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md inline-block"
            >
              Contact me
            </a>
            <a
              href="/Aboutme"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md ml-4 inline-block"
            >
              About me
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className=" w-[250] h-[250] border-4 border-opacity-05 rounded-full ">
            <img
              src="/images/hero-portrait.jpg"
              alt="A picture of me"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
