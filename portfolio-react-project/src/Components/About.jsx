import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="about" className="aboutMe m-5">
      <div
        data-aos="fade-up"
        className="bg-[#FFFFFF] shadow-lg rounded-2xl px-5 py-10"
      >
        <span
          data-aos="fade-up"
          className="flex h-10 w-10 bg-[var(--primary-color)] rounded-full justify-center items-center mb-4"
        >
          <FaUser className="text-2xl text-[var(--secondary-color)]" />
        </span>
        <h2
          data-aos="fade-up"
          className="font-bold text-2xl text-[var(--background-color)]"
        >
          About Me
        </h2>
        <p data-aos="fade-up">
          I’m a final-year Software Engineering student with a strong focus on
          frontend development. I have a solid understanding of HTML, CSS, and
          JavaScript, and I specialize in building user interfaces from UI/UX
          design all the way through to development. I work extensively with
          React and Tailwind CSS to build pixel-perfect, responsive, and
          user-friendly interfaces based on user empathy and accessibility. I'm
          also experienced with version control systems like Git and enjoy
          collaborating in team environments where communication and
          adaptability are key. I value teamwork and pride myself on being able
          to work well with others in a professional and efficient way. Beyond
          the frontend, I have foundational knowledge of Node.js and IoT, and
          I’m currently expanding my skillset into React Native. When it comes
          to design, I create high-quality visuals using tools like Figma and
          Canva, ensuring speed and consistency across every project.
        </p>
      </div>
    </div>
  );
};

export default About;
