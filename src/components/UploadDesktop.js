import React,{useState} from 'react'
import ImageUploading from "react-images-uploading";
import upload from '../assets/upload.svg'

const UploadDesktop = () => { const [images, setImages] = useState([]);
    // const [uploaded, setUploaded] = useState(false);
    const maxNumber =1;
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };

  return (

    <>
        <div className="flex items-center mt-10 h-[60vh] ">
             <div className='basis-1/2 r'>
                 <h1 className='text-white text-3xl font-bold text-center mb-3'>Upload Images or Videos</h1>
                 <p className='text-white font-light text-center'>PNG, JPG, and JPEG  files are allowed</p>
                 <div className='flex justify-center'>
                    <button className='py-2 px-10 m-5 bg-[#ddd] rounded-lg'>Search</button>
                    <button className='py-2 px-10 m-5 bg-[#ddd] rounded-lg '>Search</button>
                 </div>
                 
             </div>
             <div className='basis-1/2 text-white'>
                 hello
             </div>

        </div>
    </>
  )
}

export default UploadDesktop