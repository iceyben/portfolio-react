import React from 'react'
import { FaPenNib } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { GrServices } from "react-icons/gr";

const Services = () => {
  return (
    <div id='service' className='services m-5'>
       <span className='flex h-10 w-10 bg-[var(--primary-color)] rounded-full justify-center items-center mb-2 mt-4'>
                      < GrServices className='text-2xl text-white'/>
                  </span>
       <h2 className='font-bold text-2xl text-[var(--background-color)] mb-4'>
                Services
            </h2>
        <div className='bg-[#FFFFFF] shadow-lg rounded-2xl px-5 py-10 flex flex-col justify-center items-center '>
            <span className='flex h-12 w-12 bg-[var(--primary-color)] rounded-full justify-center items-center mb-4'>
             <FaPenNib className='text-2xl text-white '/>
            </span> 
             <p className='mb-4 font-bold'>UI/UX Design</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nobis labore fugit perspiciatis. Et minima ratione similique, suscipit odio atque.</p>
            <a className='bg-[var(--primary-color)] px-4 py-2 mt-4 rounded-lg text-white ' href="#">Hire Me </a>
        </div>
        
    </div>
  )
}

export default Services