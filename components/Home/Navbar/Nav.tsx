import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";

// Define props type
type Props = {
  opennav: () => void;
};

const Nav = ({ opennav }: Props) => {
  // const [navbg, setnavbg] = useState(false)

  useEffect(()=>{
const handler = ()=> {
  if(window.screenY >= 90) {

    
  }
  if(window.screenY<90){
   
  }
}
window.addEventListener('scroll', handler)
return ()=> {
  window.removeEventListener('scroll', handler)
}
  }, [])
  return (
    <nav className="fixed top-0 left-0 w-full h-[12vh] bg-blue-950 z-10 flex items-center justify-center px-4">
      <div className="flex items-center h-full justify-between w-[100%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
    
            <Image
          src="/images/logo.png"
          alt="Company Logo"
          width={150}
          height={150}
          priority
          className="text-left"
        />


        <div className="flex space-x-10">
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center justify-center space-x-10">
            {navLinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.url}>
                <p className="nav_link text-white">{navlink.label}</p>
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Menu Icon */}
          <div className="flex items-center space-x-4">
            <button className="cursor-pointer hover:bg-gray-200 md:px-10 md:py-3 px-4 py-2 text-blue-800 font-semibold sm:text-base text-sm bg-white rounded-lg">
              Click Me
            </button>

            {/* Mobile Menu Button */}
            <HiBars3BottomRight
              onClick={opennav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
