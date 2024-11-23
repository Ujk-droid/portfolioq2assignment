'use client';
import React from 'react';
import { FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer> {/* Wrapping the footer content inside a <footer> tag */}
      {/* Include the Fove component */}

      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-2xl text-gray-600">UJK</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 — 
          <a
            href="mailto:0331236713aa@gmail.com"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            0331236713aa@gmail.com
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3 text-2xl text-gray-600">
          <a
            href="https://www.instagram.com/uzmakhan11122"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text hover:text-pink-600 transition-colors duration-300"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://github.com/Ujk-droid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors duration-300 text-blue-300"
          >
            <FaGithub />
          </a>
          <a
            href="http://www.linkedin.com/in/uzma-khan-4818b42b4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;