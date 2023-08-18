import React from "react";
import Image from "next/image";
import AboutImg from "../../public/static/profile.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen items-center md:h-full py-72 p-6"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 items-center">
        <div className="flex-col col-span-2 text-center md:text-start">
          <p className="text-2xl font-bold text-blue-800 uppercase">About</p>
          <h2 className="text-white py-2">Who am I?</h2>
          <p className="text-white font-mono">
            A gradute at Faculty of Computer Science and Engineering with
            passion for computers since early age.
            <br /> I am a Software Developer with demonstrated history of
            working in the IT industry.
            <br /> Strong experience in developing cloud-native Web Apps and
            Mobile Apps with React, React Native, Amazon Web Services (AWS),
            NodeJS, TypeScript. <br />
            Highly motivated individual, efficient working in a team as well as
            individually
            <br />
          </p>
        </div>
        <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-4">
          <Image src={AboutImg} className="rounded-lg md:m-auto" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
