import React from "react";
import {
  DiJavascript1,
  DiReact,

} from "react-icons/di";
import {
  SiHtml5
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { SiMui } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";


const Techstack = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12 backdrop-blur-lg">
      <div className="p-4 border border-orange-600 rounded-xl flex justify-center items-center bg-transparent hover:scale-110 hover:shadow-xl hover:shadow-orange-400 transition-all duration-300">
        <SiHtml5 className="text-7xl text-orange-600 p-3" />
      </div>
      <div className="p-4 border border-yellow-500 rounded-xl flex justify-center items-center bg-transparent hover:scale-110 hover:shadow-xl hover:shadow-yellow-400 transition-all duration-300">
        <DiJavascript1 className="text-7xl text-yellow-500 p-3" />
      </div>
      <div className="p-4 border border-blue-600 rounded-xl flex justify-center items-center bg-transparent hover:scale-110 hover:shadow-xl hover:shadow-blue-400 transition-all duration-300">
        <FaCss3Alt className="text-7xl text-blue-600 p-3" />
      </div>
      <div className="p-4 border border-blue-500 rounded-xl flex justify-center items-center bg-transparent hover:scale-110 hover:shadow-xl hover:shadow-blue-500 transition-all duration-300">
        <DiReact className="text-7xl text-blue-500 p-3" />
      </div>
      <div className="p-4 border border-gray-300 rounded-xl flex justify-center items-center bg-transparent hover:scale-110 hover:shadow-xl hover:shadow-gray-300 transition-all duration-300">
        <SiNextdotjs className="text-7xl text-gray-300 p-3" />
      </div>
      <div className="p-4 border border-yellow-600 rounded-xl flex justify-center items-center bg-transparent hover:scale-110 hover:shadow-xl hover:shadow-yellow-500 transition-all duration-300">
        <SiVite className="text-7xl text-yellow-600 p-3" />
      </div>
      <div className="p-4 border border-red-500 rounded-xl flex justify-center items-center bg-transparent hover:scale-110 hover:shadow-xl hover:shadow-red-400 transition-all duration-300">
        <FaGitAlt className="text-7xl text-red-500 p-3" />
      </div>
      <div className="p-4 border border-blue-600 rounded-xl flex justify-center items-center bg-transparent hover:scale-110 hover:shadow-xl hover:shadow-blue-400 transition-all duration-300">
        <SiTailwindcss className="text-7xl text-blue-600 p-3" />
      </div>
      <div className="p-4 border border-blue-800 rounded-xl flex justify-center items-center bg-transparent hover:scale-110 hover:shadow-xl hover:shadow-blue-500 transition-all duration-300">
        <SiMui className="text-7xl text-blue-800 p-3" />
      </div>
      <div className="p-4 border border-purple-600 rounded-xl flex justify-center items-center bg-transparent hover:scale-110 hover:shadow-xl hover:shadow-purple-400 transition-all duration-300">
        <FaBootstrap className="text-7xl text-purple-600 p-3" />
      </div>
    </div>
  );
};

export default Techstack;
