import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";

const Findme = () => {
  return (
    <div className="mt-12 text-center">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-yellow-400 text-center mb-8">
        <strong className="text-white">FIND ME </strong> On
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-white">
        Please don't hesitate to reach out to me and{" "}
        <span className="text-yellow-500">connect.</span>
      </p>

      {/* Social Links */}
      <ul className="flex justify-center mt-6 space-x-6">

        <li className="flex flex-col items-center">
          <a
            href="https://twitter.com/19sajib"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center w-16 h-16 rounded-full border border-yellow-400 text-white hover:text-yellow-500 hover:shadow-lg hover:shadow-yellow-500 transition-all duration-300"
            aria-label="twitter"
          >
            <AiFillGithub className="text-3xl" />
          </a>
          <span className="mt-2 text-white">GitHub</span>
        </li>
        <li className="flex flex-col items-center">
          <a
            href="https://www.linkedin.com/in/tanu-singh-bora-18aa80295/"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center w-16 h-16 rounded-full border border-yellow-400 text-white hover:text-yellow-500 hover:shadow-lg hover:shadow-yellow-500 transition-all duration-300"
            aria-label="linkedin"
          >
            <FaLinkedinIn className="text-3xl" />
          </a>
          <span className="mt-2 text-white">LinkedIn</span>
        </li>
        
        <li className="flex flex-col items-center">
          <a
            href="https://leetcode.com/19sajib/"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center w-16 h-16 rounded-full border border-yellow-400 text-white hover:text-yellow-500 hover:shadow-lg hover:shadow-yellow-500 transition-all duration-300"
            aria-label="leetcode"
          >
            <IoPersonCircleOutline className="text-3xl" />
          </a>
          <span className="mt-2 text-white">Naukri</span>
        </li>
        <li className="flex flex-col items-center">
          <a
            href="mailto:tanusinghbora50@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center w-16 h-16 rounded-full border border-yellow-400 text-white hover:text-yellow-500 hover:shadow-lg hover:shadow-yellow-500 transition-all duration-300"
            aria-label="github"
          >
            <IoMailOpenOutline className="text-3xl" />
          </a>
          <span className="mt-2 text-white">Mail</span>
        </li>
      </ul>
    </div>
  );
}

export default Findme;
