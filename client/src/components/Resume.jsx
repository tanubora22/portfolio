import React from "react";
import { FaDownload } from "react-icons/fa";
import resumePDF from "../assets/resume.pdf"; // Ensure the path is correct

const Resume = () => {
  const openResume = () => {
    window.open(resumePDF, "_blank");
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "My_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="resume"
      className="py-16 bg-gradient-to-r from-gray-500 to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold tracking-wide mb-4">
          My <span className="text-yellow-300">Resume</span>
        </h1>
        <p className="text-lg mb-8 font-light">
          Explore my professional journey or download a copy for yourself.
        </p>

        <div className="flex justify-center space-x-8">
          {/* Open Resume Button */}
          <button
            onClick={openResume}
            className="flex items-center px-10 py-4 bg-white text-blue-600 font-semibold text-lg rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-transform transform hover:scale-105"
          >
            View Resume
          </button>

          {/* Download Resume Button */}
          <button
            onClick={downloadResume}
            className="flex items-center px-8 py-4 bg-yellow-300 text-gray-800 font-semibold text-lg rounded-full shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-105"
          >
            <FaDownload className="mr-2" /> Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
