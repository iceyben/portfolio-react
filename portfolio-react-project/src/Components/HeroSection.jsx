import React from 'react'
import profileImg from '../assets/profile.jpg'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div id='hero' className='heroSection   '>
       
       <div className=''>
            <img className='h-56 rounded-full shadow-sm' src={profileImg} alt="" />
       </div>

       <div className=''>
        <p className='pt-5 text-2xl' > Hello, I'm</p>
        <h1 className='font-bold text-3xl'><span className='text-[var(--primary-color)]'>Benjamin</span> J. Mulbah</h1>
        <p className='text-3xl text-[var(--text-color)] pb-5'>
            Frontend Developer
        </p>
        
        <span className='space-x-4 '>
            <a className='btn1  px-6 py-3 text-xl rounded-xl' href="#">Hire Me</a>
            <a className='btn2 px-6 py-3  text-xl border-2  rounded-xl mb ' href="#">Rusume</a>
        </span>

        <div className='mt-15 mb-5 flex justify-center space-x-4 '>
            <a href="https://github.com/iceyben"><FaGithub className="text-[var(--primary-color)] iconSize btnAnime " /></a>
            <a href="#"><FaLinkedin className="text-[var(--background-color)] iconSize btnAnime " /></a>
            <a href="#"><FaFacebook className="text-blue-700 iconSize btnAnime " /></a>
            <a href="#"><FaInstagram className="text-red-500 iconSize btnAnime " /></a>
            
        </div>
       </div>

    </div>
  )
}

export default HeroSection