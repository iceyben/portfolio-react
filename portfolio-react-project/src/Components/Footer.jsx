import React, { useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="footer"
      className=" sm:h-50 sm:mt-106 footer grid grid-cols-2 space-x-4 "
    >
      <div
        data-aos="fade-down"
        className="buttonEff footerPhone  py-6 px-2 text-center  rounded-lg col-span-1 "
      >
        <a href="tel:+250791502230">
          <div
            data-aos="fade-up"
            className="h-12 w-12 inline-flex  justify-center items-center   bg-[var(--background-color)] rounded-full "
          >
            <FaPhone className="" />
          </div>
          <h3 data-aos="fade-up" className="font-bold text-lg">
            Phone
          </h3>
          <p data-aos="fade-up">+250791502230</p>
        </a>
      </div>

      <div
        data-aos="fade-down"
        className="buttonEff footerPhone px-2 py-6  text-center  rounded-lg  col-span-1 "
      >
        <a data-aos="fade-up" href="mailto:mulbahb997@gmail.com">
          <div
            data-aos="fade-up"
            className="h-12 w-12 inline-flex  justify-center items-center   bg-[var(--background-color)] rounded-full "
          >
            <FaEnvelope className="" />
          </div>
          <h3 data-aos="fade-up" className="font-bold text-lg">
            Phone
          </h3>
          <p data-aos="fade-up" className="text-sm">
            mulbahb997@gmail.com
          </p>
        </a>
      </div>

      <div className="mt-15 mb-5 flex justify-center  space-x-4  col-span-2">
        <a href="#">
          <FaGithub className="text-[var(--primary-color)] iconSize btnAnime " />
        </a>
        <a href="#">
          <FaLinkedin className="text-[var(--secondary-color)] iconSize btnAnime " />
        </a>
        <a href="#">
          <FaFacebook className="text-blue-700 iconSize btnAnime " />
        </a>
        <a href="#">
          <FaInstagram className="text-red-500 iconSize btnAnime " />
        </a>
      </div>
    </div>
  );
};

export default Footer;
