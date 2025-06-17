import React, { useEffect } from "react";
import { FaPenNib } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="service" className="services m-5">
      <span className="flex h-10 w-10 bg-[var(--primary-color)] rounded-full justify-center items-center mb-2 mt-4">
        <GrServices className="text-2xl text-white" />
      </span>
      <h2
        data-aos="fade-left"
        className="font-bold text-2xl text-[var(--background-color)] mb-4"
      >
        Services
      </h2>

      <div className="sm:grid sm:grid-cols-2 sm:space-x-4">
        {/**Card 1 start below */}
        <div
          data-aos="fade-up"
          className=" bg-[#FFFFFF] shadow-lg rounded-2xl px-5 py-10 flex flex-col justify-center items-center mb-4  "
        >
          <span className="flex h-12 w-12 bg-[var(--primary-color)] rounded-full justify-center items-center mb-4">
            <FaPenNib className="text-2xl text-white " />
          </span>
          <p className="mb-4 font-bold">UI/UX Design</p>
          <p>
            I specialize in creating clean, user-friendly, and responsive
            interface designs using tools like Figma. My approach ensures every
            product is both visually appealing and easy to navigate across all
            devices.
            <br />
            <strong className="">Deliverables include:</strong>
            <ul className="list-disc pl-4">
              <li> Mobile and responsive layouts</li>

              <li>Wireframes and interactive prototypes (Figma)</li>

              <li>High-fidelity UI designs</li>

              <li>Basic user journey mapping</li>
            </ul>
          </p>
          <a
            className="buttonEff bg-[var(--primary-color)] px-4 py-2 mt-4 rounded-lg text-white "
            href="#contact"
          >
            Hire Me{" "}
          </a>
        </div>
        {/**Card 2 start below */}
        <div
          data-aos="fade-up"
          className=" bg-[#FFFFFF] shadow-lg rounded-2xl px-5 py-10 flex flex-col justify-center items-center mb-4  "
        >
          <span className="flex h-12 w-12 bg-[var(--primary-color)] rounded-full justify-center items-center mb-4">
            <FaPenNib className="text-2xl text-white " />
          </span>
          <p className="mb-4 font-bold">UI/UX Design</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nobis labore fugit perspiciatis. Et minima ratione similique,
            suscipit odio atque.
          </p>
          <a
            className="buttonEff bg-[var(--primary-color)] px-4 py-2 mt-4 rounded-lg text-white "
            href="#contact"
          >
            Hire Me{" "}
          </a>
        </div>
        {/**Card 3 start below */}
      </div>
    </div>
  );
};

export default Services;
