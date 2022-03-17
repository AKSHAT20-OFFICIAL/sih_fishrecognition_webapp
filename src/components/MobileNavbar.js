import React from 'react'
import icon from '../assets/navicon.svg'
const MobileNav = () => {
  return (
      <div className="">
          <div className='  flex bg-[transparent] lg:hidden '>
              <img className='m-5 align-left' src={icon} alt='navicon'/>
           </div>
           {/* <div className=' flex bg-transparent sm:hidden lg:block  '>
              <p className=' p-5 flex-right text-right text-white font-bold' >About Us</p>
           </div> */}
      </div>
    
  )
}

export default MobileNav