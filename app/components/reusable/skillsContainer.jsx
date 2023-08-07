import React from "react";
import Image from "next/image";

const Skills = ({ title, img }) => {
  return (
    <div className="p-4 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer">
      <div className="grid grid-cols-2 gap-4 justify-between items-center">
        <div className={img === '/static/nextjs.png' || img === '/static/aws.png' ? 'm-auto bg-white' : 'm-auto'}>
          <Image src={img} alt="img" width="128" height="128" />
        </div>
        <div className="flex flex-row justify-center items-center">
          <p className="text-sm md:text-xl text-blue-800 font-bold">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
