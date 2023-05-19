import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../../public/static/profile.jpg'
const About = () => {
  return (
    <div id="about" className="w-full items-center p-2 md:h-screen">
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
      <div className="col-span-2">
          <p className="text-2xl font-bold text-blue-800 py-2">About</p>
          <h2 className="text-white py-4">Who am I?</h2>
          <p className="text-white font-mono">
            A gradute on Faculty of Computer Science and Engineering with
            passion for computers since early age.
            <br /> I always knew that I would love to work with computers and
            eventually become a Software Developer. <br />
            Naah, I did not like hardware at all. I always watch youtube videos
            for sticking hardware components together. <br /> As you can see, I
            have a passion about web development, but I also like to develop
            mobile applications
            <br />
            So dig deep and find out more about me
          </p>
          
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4">
            <Image src={AboutImg}
            className="rounded-lg"
              alt="/"
            />
          </div>
      </div>
    </div>
  );
};

export default About;
    
