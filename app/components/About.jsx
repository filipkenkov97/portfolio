import React from 'react';
import Image from 'next/image';
import AboutImg from '../../public/static/profile.jpg'

const About = () => {
  return (
    <div id="about" className="w-full h-screen items-center md:h-full py-72">
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3'>
      <div className="col-span-2">
          <p className="text-2xl font-bold text-blue-800 uppercase">About</p>
          <h2 className="text-white py-2">Who am I?</h2>
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
        <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-4">
            <Image src={AboutImg}
            className="rounded-lg md:m-auto"
              alt="/"
            />
          </div>
      </div>
    </div>
  );
};

export default About;
    
