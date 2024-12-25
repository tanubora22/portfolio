import React from "react";
import LaptopImg from "/home-main.svg";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <div id="about" className="bg-gradient-to-r from-gray-500 to-gray-800 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Section */}
          <div className="md:w-2/3 text-white">
            <h1 className="text-4xl font-extrabold text-yellow-400 mb-6">
              LET ME <span className="text-yellow-500">INTRODUCE</span> MYSELF
            </h1>
            <p className="text-lg leading-relaxed text-gray-300">
              Hi, my name is{" "}
              <span className="text-yellow-500">Tanu Singh Bora</span> and I'm
              from <span className="text-yellow-500">Moradabad, Uttar Pradesh</span>
              <br />
              <br />
              I am a passionate <span className="text-yellow-500">Frontend Developer</span> with a love for building stunning, user-friendly web applications.
              <br />
              <br />
              I hold a Bachelor's degree in Computer Science and Engineering and am continuously learning new technologies. I specialize in <span className="text-yellow-500">JavaScript</span>, and I'm experienced in using <span className="text-yellow-500">React.js</span>, <span className="text-yellow-500">Next.js</span>, and <span className="text-yellow-500">Tailwind CSS</span>.
              <br />
              <br />
              I am highly proficient in creating modern, responsive designs and crafting smooth user experiences. My goal is always to optimize performance and create scalable, maintainable code.
              <br />
              <br />
              I have hands-on experience with <span className="text-yellow-500">React.js</span> and API integrations using <span className="text-yellow-500">REST</span> APIs.
              <br />
              <br />
              I am also deeply passionate about <span className="text-yellow-500">Web Technologies</span>, <span className="text-yellow-500">UX/UI Design</span>, and exploring emerging technologies such as <span className="text-yellow-500">Artificial Intelligence</span> .
              <br />
              <br />
              Let's connect and collaborate on exciting projects!
            </p>

          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/3 text-center">
            <img
              src={LaptopImg}
              alt="Laptop"
              className="w-full h-auto object-contain rounded-lg transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
