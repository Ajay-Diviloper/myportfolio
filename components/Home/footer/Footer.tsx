import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-10 bg-[#0f0715] text-white text-center">
      {/* Logo Section */}
      <div className="flex justify-center">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={150}
          height={150}
          className="mx-auto"
        />
      </div>

      {/* Navigation Links */}
      <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm sm:text-base font-bold">
        <div className="cursor-pointer hover:text-gray-400 transition">Home</div>
        <div className="cursor-pointer hover:text-gray-400 transition">Services</div>
        <div className="cursor-pointer hover:text-gray-400 transition">Projects</div>
        <div className="cursor-pointer hover:text-gray-400 transition">Reviews</div>
        <div className="cursor-pointer hover:text-gray-400 transition">Contact</div>
      </div>

      {/* Copyright Text */}
      <p className="text-white opacity-60 mt-6 text-sm sm:text-base">
        © 2025 All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
