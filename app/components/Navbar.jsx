"use client";
import React from "react";
import { Avatar } from "@mui/material";
const nav = (element) => {
  const el = document.getElementById(element).scrollIntoView();
  return el;
};
const Navbar = () => {
  return (
    <div id="navigation" className="fixed w-full h-20 shadow-2xl bg-gray-900">
      <div className="flex justify-between items-center w-full h-full">
        <Avatar
          src="https://media.licdn.com/dms/image/D4E03AQEbR4odZx3qWA/profile-displayphoto-shrink_800_800/0/1682681590515?e=1689811200&v=beta&t=QRH5vdKj5uZ1heMjyb8ZPiYadQmGtMhbksDk4MUQ1tA"
          alt="/"
          className="mx-2"
          height={80}
          width={80}
        />
        <div className="uppercase flex flex-1 font-mono text-blue-600 font-bold">
          Filip Kenkov
        </div>
        <div>
          <ul className="mx-4 font-mono text-blue-600 font-bold text-l md:flex">
            <li className="uppercase ml-8 hover:scale-110 ease-out duration-100" onClick={()=> nav('home')} alt="Home">
              Home
            </li>
            <li className="uppercase ml-8 hover:scale-110 ease-in duration-100" onClick={()=> nav('about')} alt="About">
              About
            </li>
            <li className="uppercase ml-8 hover:scale-110 ease-in duration-100" onClick={()=> nav('skills')} alt="Skills">
              Skills
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
