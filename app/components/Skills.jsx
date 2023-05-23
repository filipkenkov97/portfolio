import React from "react";
import Image from "next/image";
import HTML from "../../public/static/html5.png";
import CSS from "../../public/static/css.png"
import TAILWIND from "../../public/static/tailwind.png"
import REACT from "../../public/static/react.png"
import TYPESCRIPT from "../../public/static/typescript.png"
import AWS from "../../public/static/aws.png"
import NEXTJS from "../../public/static/nextjs.png"
import JAVASCRIPT from "../../public/static/javascript.png"
const About = () => {
  return (
    <div id="skills" className="w-screen h-screen items-center">
      <div className="my-auto max-w-[1240px] m-auto md:grid">
        <div className="py-96 my-96 md:py-40 md:my-1">
          <p className="text-2xl font-bold text-blue-800 uppercase py-4 sm:mx-2">Skills</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-4 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer">
              <div className="grid grid-cols-2 gap-4 justify-between items-center">
                <div className="m-auto">
                  <Image src={HTML} alt="HTML5" width="64px" height='64px'/>
                </div>
               <div className="flex flex-row justify-center items-center">
                <p className="text-sm md:text-xl text-blue-800 font-bold">HTML5</p>
               </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer">
              <div className="grid grid-cols-2 gap-4 justify-between items-center">
                <div className="m-auto">
                  <Image src={CSS} alt="css" width="64px" height='64px'/>
                </div>
               <div className="flex flex-row justify-center items-center">
                <p className="text-sm md:text-xl text-blue-800 font-bold">CSS3</p>
               </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer">
              <div className="grid grid-cols-2 gap-4 justify-between items-center">
                <div className="m-auto">
                  <Image src={TAILWIND} alt="tailwind" width="64px" height='64px'/>
                </div>
               <div className="flex flex-row justify-center items-center p-2">
                <p className="text-sm md:text-xl text-blue-800 font-bold">TAILWIND</p>
               </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer">
              <div className="grid grid-cols-2 gap-4 justify-between items-center">
                <div className="m-auto">
                  <Image src={REACT} alt="react" width="64px" height='64px'/>
                </div>
               <div className="flex flex-row justify-center items-center">
                <p className="text-sm md:text-xl text-blue-800 font-bold p-4">REACT/ REACT NATIVE</p>
               </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer">
              <div className="grid grid-cols-2 gap-4 justify-between items-center">
                <div className="m-auto">
                  <Image src={JAVASCRIPT} alt="react-native" width="64px" height='64px'/>
                </div>
               <div className="flex flex-row justify-center items-center p-2">
                <p className="text-sm md:text-xl text-blue-800 font-bold">JAVASCRIPT</p>
               </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer">
              <div className="grid grid-cols-2 gap-4 justify-between items-center">
                <div className="m-auto bg-white">
                  <Image src={TYPESCRIPT} alt="react-native" width="64px" height='64px'/>
                </div>
               <div className="flex flex-row justify-center items-center p-2">
                <p className="text-sm md:text-xl text-blue-800 font-bold">TYPESCRIPT</p>
               </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer">
              <div className="grid grid-cols-2 gap-4 justify-between items-center">
                <div className="m-auto bg-white">
                  <Image src={NEXTJS} alt="react-native" width="64px" height='64px'/>
                </div>
               <div className="flex flex-row justify-center items-center p-2">
                <p className="text-sm md:text-xl text-blue-800 font-bold">NEXT.JS</p>
               </div>
              </div>
            </div>
            <div className="p-4 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer">
              <div className="grid grid-cols-2 gap-4 justify-between items-center">
                <div className="m-auto bg-white">
                  <Image src={AWS} alt="react-native" width="64px" height='64px'/>
                </div>
               <div className="flex flex-row justify-center items-center p-2">
                <p className="text-sm md:text-xl text-blue-800 font-bold">AWS</p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
