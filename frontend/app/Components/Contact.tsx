import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 mt-6 ml-4 mr-4">
        <div className="col-span-7 place-self-center">
          <h1 className="mb-4  text-4xl lg:text-6xl font-extrabold">
            Contact me
          </h1>
          <p className="text-lg lg:text-xl">
            If you want to get in touch, you can reach me at{" "}
            <a href="mailto:sebmid@live.com">sebmid@live.com</a>
          </p>
          <p className="text-lg lg:text-xl">
            or through my linkedin profile:{" "}
            <a
              className="hover:text-blue-400"
              href="https://www.linkedin.com/in/sebastian-midtskogen-7b1b3b1b4/"
            >
              Sebastian Midtskogen
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
