import React from "react";
const projects = [
  {
    id: 1,
    name: "Img2Map",
    description:
      "A tool that converts images to maps on the web. My bachelor project.",
    image: "/images/img2map.png",
    githuburl: "https://github.com/TheAtlasRepository/ImgPDF2Map",
  },
  {
    id: 2,
    name: "Kebab finder",
    description: "A tool that finds kebab places near you",
    image: "/images/wip.gif",
    githuburl: "https://github.com/sebmid/kebab-finder",
  },
  {
    id: 3,
    name: "Portfolio",
    description: "This portfolio",
    image: "/images/portfolio.png",
    githuburl: "https://github.com/sebmid/portfolio",
  },
];

const MyProjects = () => {
  return (
    <section>
      {/* grid of slideshow images linking to different projects and only that dont repeat my other thing */}

      <div className="projects-container py-8">
        <h2 className="text-center text-4xl font-bold mb-8">My Projects</h2>
        <div className="projects-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card border border-gray-300 p-4 rounded-lg shadow-md w-full max-w-lg bg-[#484883]"
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <img
                src={project.image}
                alt={project.name}
                className="mb-4 rounded-lg w-full h-48 object-cover"
              />
              <a
                className="text-blue-500 hover:underline"
                href={project.githuburl}
              >
                View on Github
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
