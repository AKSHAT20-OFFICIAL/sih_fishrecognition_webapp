import React from 'react'
import Navbar from './Navbar'

export default function Details() {
    return (
        <div className='h-screen bg-[#00232D]'>
            <Navbar />
            <div className='bg-white m-auto w-[80vw] h-[80vh] flex flex-col md:flex-row content-center'>
                {/* <button onClick={console.log(image)}>pic</button> */}
                <div className='w-[30vw] md:hidden block'>
                    <img src="https://i.insider.com/57a4db38dd089551028b465b?width=1136&format=jpeg" alt="captured" className='w-[20vw]' />
                </div>
                <div className='bg-[#00232D] m-auto w-[60vw] h-[65vh] flex flex-row p-20'>
                    <div className='text-white'>
                        <p className='font-semibold	text-5xl'>Lorem ipsum dolor</p>
                        <p className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        {/* <p>More like the above</p> */}
                        <p className='text-2xl'>Similar photos</p>
                        <div className='flex flex-row'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07Sf2lJjxmifAPxmgKxSUeHx3o1G2-2L8BSIekMllElz5taKYomwx1luaUoD2zxwG938&usqp=CAU" alt="fish1" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07Sf2lJjxmifAPxmgKxSUeHx3o1G2-2L8BSIekMllElz5taKYomwx1luaUoD2zxwG938&usqp=CAU" alt="fish2" />
                        </div>
                    </div>
                    <div className='w-[30vw] hidden md:block'>
                        <img src="https://i.insider.com/57a4db38dd089551028b465b?width=1136&format=jpeg" alt="captured" className='w-[20vw]' />
                    </div>
                </div>
            </div>
        </div>
    )
}
