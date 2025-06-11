import React from 'react'
import profileImg from '../assets/profile.jpg'

const HeroSection = () => {
  return (
    <div className='heroSection   '>
       
       <div className=''>
            <img className='h-56 rounded-full shadow-sm' src={profileImg} alt="" />
       </div>

       <div className='mb-20'>
        <p className='pt-5 text-2xl' > Hello, I'm</p>
        <h1 className='font-bold text-4xl'><span className='text-[var(--primary-color)]'>Benjamin</span> J. Mulbah</h1>
        <p className='text-3xl text-[var(--text-color)] pb-5'>
            Frontend Developer
        </p>
        <span className='space-x-4 '>
            <a className='px-6 py-3 bg-[var(--primary-color)] text-white text-xl rounded-xl' href="#">Hire Me</a>
            <a className='px-6 py-3 text-[var(--primary-color)] text-xl border-2 border-[var(--primary-color)] rounded-xl ' href="#">Hire Me</a>
        </span>
        <div>
            
        </div>
       </div>

    </div>
  )
}

export default HeroSection