import React from "react";
import { FaRegCheckCircle, FaHeadset } from "react-icons/fa";

const Experience = () => {
  return (
    <div id="experience" className="experienceStyle m-5">
      <div className="flex space-x-2 items-center">
        <span className="bg-[var(--primary-color)] flex h-10 w-10 justify-center items-center rounded-full sm:h-15 sm:w-15">
          <FaRegCheckCircle className="text-[30px]  text-white " />
        </span>
        <span>
          <p className="font-bold text-md text-[var(--background-color)] sm:text-xl">
            2 years Job
          </p>
          <p className="text-[var(--primary-color)] text-sm sm:text-lg">
            Experience
          </p>
        </span>
      </div>
      <div></div>
      <div className="flex space-x-2 items-center">
        <span className="bg-[var(--primary-color)] flex h-10 w-10 justify-center items-center rounded-full sm:h-15 sm:w-15">
          <FaHeadset className="text-[30px]  text-white  " />
        </span>
        <span>
          <p className="font-bold text-md text-[var(--background-color)] sm:text-xl">
            Online 24/7
          </p>
          <p className="text-[var(--primary-color)] text-sm sm:text-lg">
            Support
          </p>
        </span>
      </div>
    </div>
  );
};

export default Experience;
