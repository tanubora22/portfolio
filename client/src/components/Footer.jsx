import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import logo from "/tanu.png";
import { SiIndeed } from "react-icons/si";
import { IoMailOpenOutline } from "react-icons/io5";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <footer className=" bg-gradient-to-r from-gray-500 to-gray-800 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div className="text-center md:text-left">
                        <span>Dedicated to creating impactful solutions!</span>
                    </div>
                    <div className="text-center flex justify-center gap-6 items-center">
                        <span>Copyright &copy; {year}</span>
                        <img src={logo} alt="brand" className="h-12 mt-2" />
                    </div>
                    <div className="text-center md:text-right">
                        <ul className="flex justify-center md:justify-end space-x-4">
                            <li>
                                <a
                                    href="https://github.com/19sajib"
                                    className="text-white hover:text-yellow-400"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="github"
                                >
                                    <AiFillGithub className="text-2xl" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/tanu-singh-bora-18aa80295/"
                                    className="text-white hover:text-yellow-400"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="linkedin"
                                >
                                    <FaLinkedinIn className="text-2xl" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/19sajib"
                                    className="text-white hover:text-yellow-400"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="twitter"
                                >
                                    <IoPersonCircleOutline className="text-2xl" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://leetcode.com/19sajib/"
                                    className="text-white hover:text-yellow-400"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="leetcode"
                                >
                                    <IoMailOpenOutline className="text-2xl" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
