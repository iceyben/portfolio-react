import React from 'react'
import {FaUser} from 'react-icons/fa'

const About = () => {
  return (
    <div id='about' className='aboutMe m-5'>
        <div className='bg-[#FFFFFF] shadow-lg rounded-2xl px-5 py-10'>
            <span className='flex h-10 w-10 bg-[var(--primary-color)] rounded-full justify-center items-center mb-4'>
                <FaUser className='text-2xl text-[var(--secondary-color)]'/>
            </span>
            <h2 className='font-bold text-2xl text-[var(--background-color)]'>
                About Me
            </h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam enim eveniet in natus placeat adipisci quod ea ex dignissimos cumque. Lorem ipsum dolor sit amet, 
            </p>
        </div>
    </div>
  )
}

export default About