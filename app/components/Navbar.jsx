"use client"
import { Avatar } from "@mui/material";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-gray-900">
      <div className="flex justify-between items-center w-full h-full">
        <Avatar
          src="https://media.licdn.com/dms/image/D4E03AQEbR4odZx3qWA/profile-displayphoto-shrink_800_800/0/1682681590515?e=1689811200&v=beta&t=QRH5vdKj5uZ1heMjyb8ZPiYadQmGtMhbksDk4MUQ1tA"
          alt="/"
          className="mx-2"
          height={80}
          width={80}
        />
        <div className="uppercase flex flex-1 font-mono text-blue-600 font-bold">Filip Kenkov</div>
        <div className="">
          <ul className="md:flex mx-4 font-mono text-blue-600 font-bold text-l">
            <Link href="/">
              <li className="uppercase ml-8 hover:border-b ">Home</li>
            </Link>
            <Link href="/about">
              <li className="uppercase ml-8 hover:border-b">About</li>
            </Link>
            <Link href="/contact">
              <li className="uppercase ml-8 hover:border-b">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
