import React from "react";

const MyProjects = () => {
  return (
    <section>
      {/* grid of slideshow images linking to different projects and only that dont repeat my other thing */}
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        <div className="col-span-3 place-self-center">
          <h1 className="mb-4 text-2xl lg:text-6xl font-extrabold m-6">
            My Projects
          </h1>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
