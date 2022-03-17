import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom';

import ImageUploading from "react-images-uploading";
import upload from '../assets/upload.svg'
import Navbar from './Navbar';
import Upload from './upload';

const UploadDesktop = () => {
  const [images, setImages] = useState([]);
  // const [uploaded, setUploaded] = useState(false);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  // const history = useHistory();
  // const handleClick = () => history.push('/capture');

  return (

    <div className='h-screen'>
      <div className=' hidden md:block'>
        <Navbar />
        <div className="flex items-center pt-10 h-[90vh] bg-[#00232D]">
          <div className='basis-1/2 r'>
            <h1 className='text-white text-3xl font-bold text-center mb-3'>Upload Images or Videos</h1>
            <p className='text-white font-light text-center'>PNG, JPG, and JPEG  files are allowed</p>
            <div className='flex justify-center'>
              <button className='py-2 px-10 m-5 bg-[#ddd] rounded-lg '>Search</button>
              <a href="/capture"><button className='py-2 px-10 m-5 bg-[#ddd] rounded-lg'              >
                Cature
              </button></a>
            </div>

          </div>
          <div className='basis-1/2 text-white'>
            hello
          </div>
        </div>
      </div>
      <Upload />
    </div>
  )
}

export default UploadDesktop