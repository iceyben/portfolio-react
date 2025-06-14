import React, { useState } from 'react';
import menuIcon from '../assets/menu.svg';
import { MdOutlineClose } from "react-icons/md";
import logoIcon from '../assets/logo.svg';
import { a} from 'react-scroll';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[var(--secondary-color)] z-50 headerStyle flex items-center justify-between px-4 fixed w-full top-0 ">
      {/* Logo */}
      <div>
      <a href="../Components/HeroSection">
          <img className="h-10" src={logoIcon} alt="Logo"/>
      </a>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex list-none space-x-6 text-black font-medium ">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Hire Me</a></li>
      </ul>

      {/* Menu Icon */}
      <div className="md:hidden">
  <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
    {isMenuOpen ? (
      <MdOutlineClose className="text-black text-3xl" />
    ) : (
      <img src={menuIcon} alt="Menu" className="h-8" />
    )}
  </button>
  
</div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className=" navStyle absolute top-[70px] left-0 right-0 bg-[var(--secondary-color)] text-black flex flex-col items-end  gap-4 pt-4 pb-10 rounded-lg pr-5 ml-40 md:hidden z-50 shadow-lg rounded-b-lg sm:top-[50px]">
          <li className=' w-full pl-4  ' id='home'><a className=''  href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li className=' w-full pl-4  '><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li className=' w-full pl-4 '><a href="#service" onClick={() => setIsMenuOpen(false)}>Services</a></li>
           <li className=' w-full pl-4 '><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
           <li className=' w-full pl-4 '><a href="#skill" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li className=' w-full pl-4 '><a href="#contact" onClick={() => setIsMenuOpen(false)}>Hire Me</a></li>
        </ul>
      )}
    </header>
  );
};

export default Header;
