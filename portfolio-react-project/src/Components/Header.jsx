import React from 'react'
import menuIcon from '../assets/menu.svg'
import logoIcon from '../assets/logo.svg'


const Header = () => {
  return (
    < header className='bg-[var(--secondary-color)] headerStyle '>
       <div className='pl-4'>
            <img className='h-39.29 ' src={logoIcon} alt="" /> 
       </div>
        <div className=' list-none space-x-4 hidden '>
            <a  href="#"><li >Home</li></a>
            <a  href="#"><li >About</li></a>
            <a  href="#"><li >Services</li></a>
            <a  href="#"><li >Hire Me</li></a>
        </div>
       <div className='pt-2 pr-4 text-[var(--background-color)]'>
        <a href="">
             <img className='text-black h-39.29  ' src={menuIcon} alt="" />
        </a>
       
       </div>
    </header>
  )
}

export default Header;