import React from 'react'
import Navbar from './Navbar'
import fish from '../assets/fish.jpg'

export default function Details() {
    return (
        <div className='h-screen bg-[#00232D]'>
            <Navbar />
            <div className='bg-white m-auto w-[80vw] h-[80vh] flex flex-col md:flex-row content-center'>
                {/* <button onClick={console.log(image)}>pic</button> */}
                <div className='w-[30vw] md:hidden block'>
                    <img src={fish} alt="captured" className='w-[20vw]' />
                </div>
                <div className='bg-[#00232D] m-auto w-[60vw] h-[65vh] flex flex-row p-20'>
                    <div className='text-white'>
                        <p className='font-semibold	text-5xl py-10'>Belone Belone</p>
                        <p className='text-xl w-[40vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        {/* <p>More like the above</p> */}
                        {/* <p className='text-2xl'>Similar photos</p> */}
                        {/* <div className='flex flex-row'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07Sf2lJjxmifAPxmgKxSUeHx3o1G2-2L8BSIekMllElz5taKYomwx1luaUoD2zxwG938&usqp=CAU" alt="fish1" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07Sf2lJjxmifAPxmgKxSUeHx3o1G2-2L8BSIekMllElz5taKYomwx1luaUoD2zxwG938&usqp=CAU" alt="fish2" />
                        </div> */}
                    </div>
                    <div className='w-[30vw] hidden md:flex align-center'>
                        <img src={fish} alt="captured" className='w-[30vw] my-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}
// 519303