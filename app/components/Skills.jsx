import React from "react";
import Image from "next/image";
import { skills } from "../components/reusable/skillsData.json";
import Skills from "../components/reusable/skillsContainer";
const About = () => {
  return (
    <div id="skills" className="w-screen h-screen items-center">
      <div className="my-auto max-w-[1240px] m-auto md:grid">
        <div className="py-96 my-96 md:py-40 md:my-1 text-center md:text-start">
          <p className="text-2xl font-bold text-blue-800 uppercase sm:mx-2 p-4 md:p-2">
            Skills
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-4">
            {skills.map((skill) => {
              return (
                <div
                  className="p-4 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer"
                  key={skill.title}
                >
                  <Skills title={skill.title} img={skill.img} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
