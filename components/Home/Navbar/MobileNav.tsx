import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

// Define props type
type MobProps = {
  shownav: boolean;
  closenav: () => void;
};

const MobileNav = ({ shownav, closenav }: MobProps) => {
  return (
    <div
      className={`fixed inset-0 z-[1000] bg-black transition-opacity duration-300 ${
        shownav ? "opacity-70 visible" : "opacity-0 invisible delay-700"
      }`}
      onClick={closenav} // Closes when clicking outside menu
    >
      {/* Mobile Menu Container */}
      <div
        className={`fixed left-0 top-0 h-full w-[80%] sm:w-[60%] bg-[#0f0715] z-[10000] flex flex-col 
                   justify-center items-center space-y-6 px-6 shadow-lg transition-transform duration-500 ${
                     shownav ? "translate-x-0" : "-translate-x-full delay-500"
                   }`}
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
      >
        {/* Close Button */}
        <CgClose
          onClick={closenav}
          className="absolute top-4 right-6 sm:w-8 sm:h-8 w-6 text-white cursor-pointer"
          aria-label="Close menu"
        />

        {/* Navigation Links */}
        <nav className="flex flex-col items-center space-y-4 text-white">
          {navLinks.map((navlink) => (
            <Link key={navlink.id} href={navlink.url} className="text-lg">
              {navlink.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="text-center">
          <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white rounded-lg">
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
