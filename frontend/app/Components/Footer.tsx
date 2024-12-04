import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container py-6 bg-gray-800 text-white text-center">
      <div className="flex flex-col items-center space-y-2">
        <div className="flex flex-row justify-center space-x-4">
          <a
            href="https://github.com/sebmid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
        </div>
        <div className="text-center text-sm"> Made by Sebastian Midtskogen</div>
      </div>
    </footer>
  );
};

export default Footer;
