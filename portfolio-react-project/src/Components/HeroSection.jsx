import React, { useEffect } from "react";
import profileImg from "../assets/profile.jpg";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import myCV from "../assets/CV.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [text] = useTypewriter({
    words: [
      "< Frontend Developer />",
      "< UI/UX Designer />",
      "< Graphic Designer />",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <div id="hero" className="heroSection  ">
      <div data-aos="fade-up" className=" sm:m-auto ">
        <img
          className="h-56 sm:h-70 lg:h-80 rounded-full shadow-sm  sm:m-auto "
          src={profileImg}
          alt=""
        />
      </div>

      <div className="sm:align-center ">
        <p data-aos="fade-up" className="pt-5 text-xl ">
          Hello, I'm
        </p>
        <h1 className="font-bold text-3xl lg:text-[40px]">
          <span className="text-[var(--primary-color)]">Benjamin</span> J.
          Mulbah
        </h1>
        <p
          data-aos="fade-up"
          className="text-2xl text-[var(--text-color)] pb-5 min-h-[40px] text-center lg:text-gray-300 lg:text-3xl"
        >
          {text}
          <span>
            <Cursor cursorStyle="|" cursorColor="#f61000" />
          </span>
        </p>

        <span data-aos="fade-up" className="space-x-4 ">
          <a
            className="btn1  px-6 py-3 lg:px-8 lg:py-4  text-xl lg:text-2xl rounded-xl sm:px-4 sm:text-lg"
            href="#contact"
          >
            Hire Me
          </a>
          <a
            className="btn2 px-6 py-3 lg:px-8 lg:py-4  text-xl lg:text-2xl border-2  rounded-xl mb sm:px-4 sm:py-2.5 sm:text-lg "
            href={myCV}
            download
            target="_blank"
          >
            Rusume
          </a>
        </span>

        <div
          data-aos="fade-up"
          className="mt-15 mb-5 flex justify-center space-x-4 "
        >
          <a href="https://github.com/iceyben" target="_blank">
            <FaGithub className="text-[var(--primary-color)] iconSize btnAnime  " />
          </a>
          <a
            href="www.linkedin.com/in/benjamin-mulbah-8a7a39181"
            target="_blank"
          >
            <FaLinkedin className="text-[var(--background-color)] iconSize btnAnime lg:text-white " />
          </a>
          <a href="https://www.facebook.com/iceyben">
            <FaFacebook className="text-blue-700 iconSize btnAnime " />
          </a>
          <a href="#">
            <FaInstagram className="text-red-500 iconSize btnAnime " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
