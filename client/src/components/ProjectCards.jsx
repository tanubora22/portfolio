import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCards = (props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg flex flex-col justify-between p-4 h-full">
      <img
        src={props.imgPath}
        alt="Project"
        className="h-52 object-contain rounded-lg"
      />
      <div className="flex flex-col justify-between flex-grow mt-4">
        <h2 className="text-lg font-semibold text-gray-800">{props.title}</h2>
        <p className="text-sm text-gray-600 mt-2">{props.description}</p>
        <div className="mt-auto">
          <a
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center mt-4 transition hover:bg-blue-700"
          >
            <BsGithub className="mr-2" /> {props.isBlog ? "Blog" : "GitHub"}
          </a>
          {!props.isBlog && props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center mt-2 transition hover:bg-blue-700"
            >
              <CgWebsite className="mr-2" /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
