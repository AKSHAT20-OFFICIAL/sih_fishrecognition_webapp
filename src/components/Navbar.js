import React from 'react';
import logo from '../assets/logo.png';
import icon from '../assets/navicon.svg'


export default function Navbar() {
  return (
    <>
      <div className='hidden  h-[16vh] px-10 py-7 bg-[#00232D] md:flex flex-row justify-between text-white font-bahnschrift'>
        <img className='w-16 h-16 my-auto' src={logo} alt="Logo" />
        <h5 className='my-auto text-xl'>About Us</h5>
      </div>

      <div className='md:hidden  h-[16vh] px-10 py-7 bg-[#00232D] flex flex-row justify-between text-white font-bahnschrift'>
        {/* <h5 className='my-auto text-xl'>About Us</h5> */}
        <img className='m-3 align-left w-10' src={icon} alt='navicon'/>

        <img className='w-12 h-12 my-auto' src={logo} alt="Logo" />
      </div>
    </>

  )
}
