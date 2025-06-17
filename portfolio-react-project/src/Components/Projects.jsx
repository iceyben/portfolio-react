import React, { useEffect } from "react";
import { FaProjectDiagram } from "react-icons/fa";
import projectImg from "../assets/download.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="project" className="projects m-5">
      <span className="flex h-10 w-10 bg-[var(--primary-color)] rounded-full justify-center items-center mb-2 mt-4 ml-4">
        <FaProjectDiagram className="text-2xl text-white" />
      </span>
      <h2 className="font-bold text-2xl text-[var(--background-color)] mb-4 ml-4">
        Projects
      </h2>

      <div className="sm:grid-cols-2 sm:grid sm:space-x-4">
        {/*Card Number 1 starting below */}
        <div
          data-aos="fade-up"
          className="bg-[#FFFFFF] shadow-lg rounded-2xl px-5 py-10 flex flex-col justify-center items-center mb-3 "
        >
          <div className="mb-4  w-full ">
            <img
              data-aos="fade-up"
              className="rounded-lg w-full  "
              src={projectImg}
              alt=""
            />
          </div>
          <div className="mb-4">
            <h3 data-aos="fade-up" className="font-bold text-xl mb-2">
              Project Name
            </h3>
            <p data-aos="fade-up">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              incidunt quos vel voluptatem. Nobis est perferendis vel, atque
              excepturi nostrum.{" "}
            </p>
          </div>
          <span data-aos="fade-up" className="space-x-4">
            <a
              className="buttonEff bg-[var(--primary-color)] px-6 py-3 rounded-xl text-white "
              href="#"
            >
              View Live
            </a>
            <a
              className="text-[var(--primary-color)] px-6 py-3 rounded-xl bg-white border-1"
              href="#"
            >
              Github
            </a>
          </span>
        </div>

        {/*Card Number 2 starting below */}
        <div
          data-aos="fade-up"
          className="bg-[#FFFFFF] shadow-lg rounded-2xl px-5 py-10 flex flex-col justify-center items-center mb-3 "
        >
          <div className="mb-4  w-full ">
            <img
              data-aos="fade-up"
              className="rounded-lg w-full  "
              src={projectImg}
              alt=""
            />
          </div>
          <div className="mb-4">
            <h3 data-aos="fade-up" className="font-bold text-xl mb-2">
              Project Name
            </h3>
            <p data-aos="fade-up">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              incidunt quos vel voluptatem. Nobis est perferendis vel, atque
              excepturi nostrum.{" "}
            </p>
          </div>
          <span data-aos="fade-up" className="space-x-4">
            <a
              className="buttonEff bg-[var(--primary-color)] px-6 py-3 rounded-xl text-white "
              href="#"
            >
              View Live
            </a>
            <a
              className="text-[var(--primary-color)] px-6 py-3 rounded-xl bg-white border-1"
              href="#"
            >
              Github
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
