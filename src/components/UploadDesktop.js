import React from 'react'

const UploadDesktop = () => {
  return (
    <>
        <div className='flex hidden sm:block'>
            <div className=''>
            <h1 className='text-white font-bolder text-center' >Upload Images</h1>
            <p className='text-slate-300 font-light text-center '>PNG, JPG, and JPEG files are allowed</p>
                <div className='flex flex-row flex-basis'>
                    <div className='w-2/5'  ></div>
                    <div className='w-3/5 flex '>
                        <button className='w-1/2 text-center align-middle  my-5 float-center px-10 py-3 bg-[#dddddd] text-black font-bold rounded-lg'>Search</button>
                        <button className='w-1/2  text-center align-middle ml-3 my-5  px-10 py-3 bg-[#dddddd] text-black font-bold rounded-lg'>capture</button>
                    </div>
                
                    <div className=' w-2/5'></div>
                    </div>
            </div>
            <div className=''>
              
            </div>
        </div>
    </>
  )
}

export default UploadDesktop