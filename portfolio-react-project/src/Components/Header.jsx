import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import logoIcon from "../assets/logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[var(--secondary-color)] z-[999] headerStyle flex items-center justify-between px-4 fixed w-full top-0 ">
      {/* Logo */}
      <div>
        <a href="#hero">
          <img className="h-10 sm:h-15" src={logoIcon} alt="Logo" />
        </a>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex list-none space-x-6 text-black font-medium ">
        <li>
          <a
            className="buttonEff  px-6 py-3 font-bold shadow-sm rounded-sm sm:text-2xl"
            href="#hero"
          >
            Home
          </a>
        </li>
        <li>
          <a className="menuEff font-medium sm:text-xl" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="menuEff font-medium sm:text-xl" href="#service">
            Services
          </a>
        </li>
        <li>
          <a
            className="menuEff homeBtn px-6 py-3 rounded-sm shadow-sm  font-medium sm:text-xl"
            href="#contact"
          >
            Hire Me
          </a>
        </li>
      </ul>

      {/* Menu Icon */}
      <div className="md:hidden ">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <MdOutlineClose className="text-black text-3xl" />
          ) : (
            <GiHamburgerMenu className="h-8 text-4xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul
          data-aos="fade-down"
          className=" navStyle absolute top-[70px] left-0 right-0 bg-[var(--secondary-color)] text-black flex flex-col items-end  gap-4 pt-4 pb-10 rounded-lg pr-5 ml-40 md:hidden z-[999] shadow-lg rounded-b-lg sm:top-[50px]"
        >
          <li data-aos="fade-down" className=" w-full pl-4  " id="home">
            <a className="" href="#hero" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
          </li>
          <li data-aos="fade-down" className=" w-full pl-4  ">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
          </li>
          <li data-aos="fade-down" className=" w-full pl-4  ">
            <a href="#project" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li data-aos="fade-down" className=" w-full pl-4 ">
            <a href="#service" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
          </li>
          <li data-aos="fade-down" className=" w-full pl-4 ">
            <a href="#experience" onClick={() => setIsMenuOpen(false)}>
              Experience
            </a>
          </li>
          <li data-aos="fade-down" className=" w-full pl-4 ">
            <a href="#skill" onClick={() => setIsMenuOpen(false)}>
              Skills
            </a>
          </li>
          <li data-aos="fade-down" className=" w-full pl-4 ">
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Hire Me
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
