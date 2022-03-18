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

    <div className='h-full bg-[#00232D]'>
      <div className=' hidden md:block'>
        <Navbar />
        <div className="flex items-center pt-10 h-[50vh] ">
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
          <div className=' border-white border-dashed border-2 p-4 m-10 w-3/5 '>
          <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="flex-column items-center p-5 m-5   ">
            
            <img src={upload} alt="icon" className="flex-center justify-center mx-auto"/>
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
              className="text-center justify-center text-white font-semibold mx-auto"
            >
             Drag and Drop or browse to choose a file
            </button>
            {({ imageList, dragProps, isDragging }) => (
              <div {...dragProps}>
                {isDragging ? "Drop here please" : "Upload space"}
                {imageList.map((image, index) => (
                  <img key={index} src={image.data_url} alt="" />
                ))}
              </div>
            )}
            {imageList.map((image, index) => (
              <div key={index} className="image-item w-full">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                  <button onClick={() => onImageRemove(index)} className="text-white text-center ">Remove</button>
                </div>
              </div>
            ))}
            
          </div>
        )}
        
      </ImageUploading>
      </div>
          </div>
        </div>
      </div>
      <Upload />
    </div>
  )
}

export default UploadDesktop