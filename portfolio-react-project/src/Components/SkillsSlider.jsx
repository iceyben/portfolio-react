import React from 'react';
import Slider from 'react-slick';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,FaFigma } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCanva } from "react-icons/si";



const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Tailwind CSS', icon: <RiTailwindCssFill  className="text-blue-400" /> },
  { name: 'Canva', icon: < SiCanva  className="text-blue-600" /> },
  { name: 'Figma', icon: < FaFigma  className="text-blue-600" /> },
];

const SkillsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
   <div id='skill' className='mx-5'>
     <div className="w-full max-w-4xl mx-auto  px-4 py-5  ">
      <h2 className="text-2xl text-white font-bold text-center mb-6">My Skills</h2>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="text-center px-4 ">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
              <div className="text-5xl mb-4 ">{skill.icon}</div>
              <p className="font-semibold ">{skill.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
   </div>
  );
};

export default SkillsSlider;
