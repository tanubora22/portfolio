import React from 'react';
import {
    AiFillGithub,
    AiOutlineTwitter
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
  import { SiLeetcode } from "react-icons/si";
import './social.css'
const Social = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold">FIND ME ON</h1>
          <p className="text-lg mt-4">
            Please don't hesitate to reach out to me and <span className="text-yellow-500">connect.</span>
          </p>
        </div>
        <ul className="flex justify-center mt-8 space-x-6">
          <li>
            <a
              href="https://github.com/19sajib"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-yellow-500 text-3xl transition"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/19sajib"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-yellow-500 text-3xl transition"
            >
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/19sajib/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-yellow-500 text-3xl transition"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/19sajib/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-yellow-500 text-3xl transition"
            >
              <SiLeetcode />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Social;
