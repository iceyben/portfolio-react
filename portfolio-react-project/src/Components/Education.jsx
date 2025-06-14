import React from 'react'
import {IoSchoolOutline} from 'react-icons/io5'

const Education = () => {
  return (
     <div id='education' className='education m-5'>
            <div className='bg-[#FFFFFF] shadow-lg rounded-2xl px-5 py-10'>
                <span className='flex h-10 w-10 bg-[var(--primary-color)] rounded-full justify-center items-center mb-4'>
                    <IoSchoolOutline className='text-2xl text-white'/>
                </span>
                
                <div className=' space-x-2'>
                    <div className='border-2 border-[var(--primary-color)] rounded-2xl p-2'>
                    <h3 className='font-bold '>
                        School Name
                    </h3>
                    <h3 className='text-sm mb-2 '>
                        June 2025 
                    </h3>
                    <p className=' '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis laboriosam alias aperiam minus praesentium mollitia ducimus, </p>
                </div>
                </div>
               
            </div>
        </div>
  )
}

export default Education