import React from 'react'
import { FaProjectDiagram } from "react-icons/fa";
import projectImg from '../assets/download.jpeg';

const Projects = () => {
  return (
    <div id='project' className='projects m-5'>
         <span className='flex h-10 w-10 bg-[var(--primary-color)] rounded-full justify-center items-center mb-2 mt-4 ml-4'>
                            <FaProjectDiagram className='text-2xl text-white'/>
                        </span>
        <h2 className='font-bold text-2xl text-[var(--background-color)] mb-4 ml-4'>
                    Projects
                </h2>

        <div className='bg-[#FFFFFF] shadow-lg rounded-2xl px-5 py-10 flex flex-col justify-center items-center '>

                    <div className='mb-4'>
                        <img className='rounded-lg ' src={projectImg} alt="" />
                    </div>
                    <div className='mb-4'>
                        <h3 className='font-bold text-xl mb-2'>Project Name</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt quos vel voluptatem. Nobis est perferendis vel, atque excepturi nostrum. </p>
                    </div>
                    <span className='space-x-4'>
                        <a className='bg-[var(--primary-color)] px-6 py-3 rounded-xl text-white ' href="#">View Live</a>
                        <a className='text-[var(--primary-color)] px-6 py-3 rounded-xl bg-white border-1' href="#">Github</a>
                    </span>
                    
                </div>
        
    </div>
  )
}

export default Projects