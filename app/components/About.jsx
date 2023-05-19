"use client";
import React from "react";
function About() {
  return (
    <div className="h-screen w-full text-center">
      <div className="max-w-[1024px] w-full h-full mx-auto flex justify-center items-center">
        <div className="mx-auto">
            <p className="uppercase text-l text-blue-800 tracking-widest">Hire me!</p>
            <h1 className="text-white">Hi, I am <span className="text-blue-800">Filip</span></h1>
            <h1 className="text-white my-2 text-3xl">Fullstack Developer @ <span className="text-blue-800">Miracle Mill</span></h1>
            <p className="py-2 text-white max-w-[70%] m-auto">
            Graduate at Faculty of Computer Science and Engineering
            <br/>
            Passionate Software developer with focus on building cloud native 
            web and mobile applications</p>
        </div>
      </div>
    </div>
  );
}

export default About;
