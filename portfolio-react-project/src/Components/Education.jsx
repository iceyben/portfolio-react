import React, { useEffect } from "react";
import { IoSchoolOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="education" className="education m-5 ">
      <span
        data-aos="fade-up"
        className="flex ml-5 h-10 w-10 bg-[var(--primary-color)] rounded-full justify-center items-center mb-4 "
      >
        <IoSchoolOutline className="text-2xl text-white" />
      </span>
      <h2
        data-aos="fade-up"
        className="font-bold text-2xl text-[var(--background-color)] mb-4 px-5 sm:text-3xl "
      >
        Education
      </h2>
      <div className="sm:grid sm:grid-cols-2 sm:space-x-4 sm:px-5 ">
        {/**card number 1 is below */}
        <div
          data-aos="fade-up"
          className="bg-[#FFFFFF] shadow-lg rounded-2xl px-6 py-6 mb-4"
        >
          <div data-aos="fade-up" className=" space-x-2">
            <div className="border-2 border-[var(--primary-color)] rounded-2xl p-2">
              <h3 data-aos="fade-up" className="font-bold sm:text-2xl pb-2 ">
                BSc of Software Engineering
              </h3>
              <h3
                data-aos="fade-up"
                className="text-sm mb-2 sm:text-md font-bold"
              >
                @ University of Lay Adventist of Kigali
              </h3>
              <p
                data-aos="fade-up"
                className="sm:text-lg  pb-2 font-medium pl-4 "
              >
                Jan 2022 - Present
              </p>
              <p data-aos="fade-up" className="sm:text-lg ">
                Gaining hands-on experience in software development and system
                design. Learning key skills in programming, databases, and
                project management. Building real-world applications and
                team-based tech projects.
              </p>
            </div>
          </div>
        </div>
        {/**card number 2 is below */}
        <div
          data-aos="fade-up"
          className="bg-[#FFFFFF] shadow-lg rounded-2xl px-6 py-6 mb-4"
        >
          <div data-aos="fade-up" className=" space-x-2">
            <div className="border-2 border-[var(--primary-color)] rounded-2xl p-2">
              <h3 data-aos="fade-up" className="font-bold sm:text-2xl pb-2 ">
                High School Diploma
              </h3>
              <h3
                data-aos="fade-up"
                className="text-sm mb-2 sm:text-md font-bold"
              >
                @ William V.S. Tubman-Gray High sch.
              </h3>
              <p
                data-aos="fade-up"
                className="sm:text-lg  pb-2 font-medium pl-4 "
              >
                Sept. 2011 - 2021
              </p>
              <p data-aos="fade-up" className="sm:text-lg ">
                Specialized in science subjects including Biology, Chemistry,
                and Mathematics. Graduated with strong academic performance and
                leadership experience. Participated in science fairs and group
                research activities.
              </p>
            </div>
          </div>
        </div>
        {/**card number 3 is below */}

        <div
          data-aos="fade-up"
          className="bg-[#FFFFFF] shadow-lg rounded-2xl px-6 py-6 mb-4"
        >
          <div data-aos="fade-up" className=" space-x-2">
            <div className="border-2 border-[var(--primary-color)] rounded-2xl p-2">
              <h3 data-aos="fade-up" className="font-bold sm:text-2xl pb-2 ">
                KL-YES Program - AYA
              </h3>
              <h3
                data-aos="fade-up"
                className="text-sm mb-2 sm:text-md font-bold"
              >
                @ Forest Hills High school
              </h3>
              <p
                data-aos="fade-up"
                className="sm:text-lg  pb-2 font-medium pl-4 "
              >
                Aug. 2019 - 2020
              </p>
              <p data-aos="fade-up" className="sm:text-lg ">
                Selected for the Kennedy-Lugar Youth Exchange and Study Program;
                studied in the U.S. to promote cultural exchange and leadership
                development for 10 months straight.
              </p>
            </div>
          </div>
        </div>
        {/**card number 4 is below */}
      </div>
    </div>
  );
};

export default Education;
