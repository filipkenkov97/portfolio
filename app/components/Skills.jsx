import React from "react";
import data from "./reusable/data.json";
import Skill from "./reusable/skills-container";

const Skills = () => {
  return (
    <div id="skills" className="w-screen h-full items-center">
      <div className="my-auto max-w-[1240px] m-auto md:grid">
        <div className="py-96 my-96 md:py-40 md:my-1 text-center md:text-start">
          <p className="text-2xl font-bold text-blue-800 uppercase sm:mx-2 p-4 md:p-2">
            Skills
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-4">
            {data.map((skill) => {
              return (
                <Skill key={skill.title} title={skill.title} img={skill.img} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
