"use client"; 
import { FaGithub, FaLinkedin, } from "react-icons/fa"
import React from "react";
import Link from "next/link";
function About() {
  return (
    <div id="home" className="h-screen w-full text-center">
      <div className="max-w-[1024px] w-full h-full mx-auto flex justify-center items-center">
        <div className="mx-auto">
            <h1 className="text-white">Hi, I am <span className="text-blue-800">Filip</span></h1>
            <h1 className="text-white my-2 text-3xl">Fullstack Developer @ <span className="text-blue-800">Miracle Mill</span></h1>
            <p className="py-2 text-white max-w-[70%] m-auto">
            Graduate at Faculty of Computer Science and Engineering
            <br/>
            Passionate Software developer with focus on building cloud native 
            web and mobile applications</p>
            <div className="flex items-center max-w-[70%] justify-center m-auto">
              <div className="rounded-full shadow-lg shadow-gray-900 p-4 mx-4 cursor-pointer bg-white hover:scale-110 ease-in duration-100">
                <Link target="_blank" href="https://github.com/filipkenkov97">
              <FaGithub size={30} />
              </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-900 mx-4 p-4 cursor-pointer bg-white hover:scale-110 ease-in duration-100">
              <Link target="_blank" href="https://linkedin.com/in/filipkenkov">
              <FaLinkedin size={30}/>
              </Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
