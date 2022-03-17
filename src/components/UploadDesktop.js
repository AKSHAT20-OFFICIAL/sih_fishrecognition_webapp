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
        <div className='flex flex-row hidden sm:block'>
            <div className=''>
            <h1 className='text-white font-bolder text-center' >Upload Images</h1>
            <p className='text-slate-300 font-light text-center '>PNG, JPG, and JPEG files are allowed</p>
                <div className='flex flex-row flex-basis'>
                    
                    <div className=' flex '>
                        <button className='w-1/2 text-center align-middle  my-5 float-center px-10 py-3 bg-[#dddddd] text-black font-bold rounded-lg'>Search</button>
                        <button className='w-1/2  text-center align-middle ml-3 my-5  px-10 py-3 bg-[#dddddd] text-black font-bold rounded-lg'>capture</button>
                    </div>
                
                    
                    </div>
            </div>
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
    </>
  )
}

export default UploadDesktop