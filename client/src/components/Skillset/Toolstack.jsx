import React from "react";
import { IoLogoCss3 } from "react-icons/io";
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiCodesandbox } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { SiSwagger } from "react-icons/si";

const Toolstack = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {[
          { icon: <VscVscodeInsiders />, key: "VscVscodeInsiders" },
          { icon: <SiCodesandbox />, key: "SiCodesandbox" },
          { icon: <SiPostgresql />, key: "SiPostgresql" },
          { icon: <FaGithub />, key: "FaGitAlt" },
          { icon: <FiFigma />, key: "FiFigma" },
          { icon: <SiSwagger />, key: "SiSwagger" },
        ].map((tech) => (
          <div
            key={tech.key}
            className="w-32 h-32 md:w-40 md:h-40 border border-purple-500 rounded-xl flex justify-center items-center hover:scale-110 hover:shadow-xl hover:shadow-purple-500 transition-all duration-300 bg-transparent"
          >
            {React.cloneElement(tech.icon, {
              className:
                "text-5xl md:text-6xl text-white hover:text-purple-500 transition-colors duration-300",
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolstack;
