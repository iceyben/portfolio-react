import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";

const Contacts = () => {
  return (
    <div id='contact' className='contact m-5'>
        <h2 className='font-bold text-2xl mb-4 ml-4'>Contact</h2>
        <form action="#">
            <p className='mb-4 text-lg'>Book Appointment </p>

            <input className='inputContact'
             type="text" required placeholder='First Name' />

              <input className='inputContact'
             type="text"  required  placeholder='Last Name' />
               <input className='inputContact'
             type="email"  required  placeholder='Email' />
              <input className='inputContact'
             type="phone" placeholder='Phone Number' />
            <div className='flex flex-row bg-red border-2 space-x-2  p-4 mb-6 rounded-lg'>
                 <label className='flex' for="datetime">{< FaCalendarAlt className='text-[40px]'/>}</label> 
             <input className='text-xl' type="datetime-local" id="datetime" name="datetime"></input>
            </div>
            <button className='bg-[var(--primary-color)] w-full flex justify-center py-3 text-lg font-bold rounded-lg' href="#">Book Now</button>
        </form>
    </div>
  )
}

export default Contacts