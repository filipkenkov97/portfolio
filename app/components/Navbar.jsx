"use client";
import React from "react";
import { Avatar, Button, Typography } from "@mui/material";

const nav = (element) => {
  const el = document.getElementById(element);
  el.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => {
  return (
    <div id="navigation" className="fixed w-full h-20 shadow-2xl bg-gray-900">
      <div className="flex justify-between items-center w-full h-full">
        <Avatar
          src="/static/profile.jpg"
          alt="Profile"
          className="mx-2"
          height={80}
          width={80}
        />
        <Typography variant="h6" className="uppercase flex flex-1 font-mono text-blue-600 font-bold">
          Filip Kenkov
        </Typography>
        <div className="hidden md:flex">
          <ul className="flex mx-4 font-mono text-blue-600 font-bold text-l">
            <li className="ml-8">
              <Button
                onClick={() => nav('home')}
                variant="text"
                color="inherit"
                className="uppercase hover:scale-110 ease-out duration-100"
              >
                Home
              </Button>
            </li>
            <li className="ml-8">
              <Button
                onClick={() => nav('about')}
                variant="text"
                color="inherit"
                className="uppercase hover:scale-110 ease-in duration-100"
              >
                About
              </Button>
            </li>
            <li className="ml-8">
              <Button
                onClick={() => nav('skills')}
                variant="text"
                color="inherit"
                className="uppercase hover:scale-110 ease-in duration-100"
              >
                Skills
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
