import React, { useEffect } from "react";
import { FaPenNib, FaCode } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiMaterialdesignicons } from "react-icons/si";
import { IoDocumentsOutline } from "react-icons/io5";

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
          <p data-aos="fade-up" className="mb-4 font-bold">
            UI/UX Design
          </p>
          <p data-aos="fade-up">
            I specialize in creating clean, user-friendly, and responsive
            interface designs using tools like Figma. My approach ensures every
            product is both visually appealing and easy to navigate across all
            devices.
            <br />
            <strong className="">Deliverables include:</strong>
            <ul className="list-disc pl-4">
              <li data-aos="fade-left"> Mobile and responsive layouts</li>

              <li data-aos="fade-left">
                Wireframes and interactive prototypes (Figma)
              </li>

              <li data-aos="fade-left">High-fidelity UI designs</li>

              <li data-aos="fade-left">Basic user journey mapping</li>
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
            <FaCode className="text-2xl text-white " />
          </span>
          <p data-aos="fade-up" className="mb-4 font-bold">
            Web Development
          </p>
          <p data-aos="fade-up">
            I craft responsive, user-friendly websites and web apps using modern
            technologies like React, Tailwind CSS, and Node.js. My focus is on
            performance, accessibility, and clean code.
            <br />
            <strong className="">Deliverables include:</strong>
            <ul className="list-disc pl-4">
              <li data-aos="fade-left">
                {" "}
                Fully responsive websites and web applications
              </li>

              <li data-aos="fade-left">
                {" "}
                Clean, maintainable, and scalable code
              </li>

              <li data-aos="fade-left"> Frontend using React & Tailwind CSS</li>

              <li data-aos="fade-left">
                Backend integration with Node.js & Express
              </li>
              <li data-aos="fade-left">
                {" "}
                Cross-browser compatibility and mobile-first design
              </li>
              <li data-aos="fade-left"> Deployment and hosting support</li>
            </ul>
          </p>

          <a
            className="buttonEff bg-[var(--primary-color)] px-4 py-2 mt-4 rounded-lg text-white "
            href="#contact"
          >
            Hire Me{" "}
          </a>
        </div>
        {/**Card 3 start below */}
        <div
          data-aos="fade-up"
          className=" bg-[#FFFFFF] shadow-lg rounded-2xl px-5 py-10 flex flex-col justify-center items-center mb-4  "
        >
          <span className="flex h-12 w-12 bg-[var(--primary-color)] rounded-full justify-center items-center mb-4">
            <SiMaterialdesignicons className="text-2xl text-white " />
          </span>
          <p data-aos="fade-up" className="mb-4 font-bold">
            Graphic Design
          </p>
          <p data-aos="fade-up">
            I create visually engaging designs that communicate ideas
            effectively. My work includes branding, social media content, and
            marketing materials tailored to your audience.
            <br />
            <strong className="">Deliverables include:</strong>
            <ul className="list-disc pl-4">
              <li data-aos="fade-left">
                {" "}
                Logos, banners, and brand identity designs
              </li>
              <li data-aos="fade-left"> Social media post templates and ads</li>
              <li data-aos="fade-left">
                {" "}
                Flyers, posters,brochures, YouTube Banner
              </li>
              <li data-aos="fade-left">
                Business cards and presentation slides
              </li>
              <li data-aos="fade-left">
                Custom illustrations and vector graphics
              </li>
              <li data-aos="fade-left">
                Final files in multiple formats (PNG, JPEG, PDF, SVG)
              </li>
            </ul>
          </p>

          <a
            className="buttonEff bg-[var(--primary-color)] px-4 py-2 mt-4 rounded-lg text-white "
            href="#contact"
          >
            Hire Me{" "}
          </a>
        </div>
        {/**Card 4 start below */}
        <div
          data-aos="fade-up"
          className=" bg-[#FFFFFF] shadow-lg rounded-2xl px-5 py-10 flex flex-col justify-center items-center mb-4  "
        >
          <span className="flex h-12 w-12 bg-[var(--primary-color)] rounded-full justify-center items-center mb-4">
            <IoDocumentsOutline className="text-2xl text-white " />
          </span>
          <p data-aos="fade-up" className="mb-4 font-bold">
            Modern CV & Résumé Design
          </p>
          <p data-aos="fade-up">
            I craft professional, clean, and modern CVs from scratch that help
            you stand out. Whether you're applying for jobs, internships, or
            academic opportunities, I’ll design a résumé that highlights your
            strengths and achievements.
            <br />
            <strong className="">Deliverables include:</strong>
            <ul className="list-disc pl-4">
              <li data-aos="fade-left">
                {" "}
                Custom-designed CV tailored to your field
              </li>
              <li data-aos="fade-left">
                {" "}
                Visually appealing and modern design
              </li>
              <li data-aos="fade-left">
                {" "}
                Editable file (Word, PDF, or Canva/Figma link)
              </li>
              <li data-aos="fade-left">Cover letter template </li>
            </ul>
          </p>

          <a
            className="buttonEff bg-[var(--primary-color)] px-4 py-2 mt-4 rounded-lg text-white "
            href="#contact"
          >
            Hire Me{" "}
          </a>
        </div>
        {/**Card 5 start below */}
      </div>
    </div>
  );
};

export default Services;