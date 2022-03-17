import React,{useState} from 'react'
import Webcam from "react-webcam";
const Capture = () => {
    const [image,setImage]=useState('');
    const videoConstraints = {
        width: 220,
        height: 200,
        facingMode: "user"
      };
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        });
  return (
      <>
             <div className='flex flex-col items-center justify-center w-full h-full'>
                <div className='w-1/5'></div>
                <div className=' border-white border-dashed border-2 p-4 m-10 w-3/5 '>
                    <div className="flex-column items-center p-5    ">
                    
                    {image==''?<Webcam
                    audio={false}
                    height={200}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={220}
                    videoConstraints={videoConstraints}
                    />:<img src={image}/>}  
                    </div>
                   
                </div>
                <div className='w-1/5'></div>
             </div>
            
            <div className='flex flex-row flex-basis'>
                <div className='w-2/5'  ></div>
                <div className='w-3/5 flex '>
                    <button onClick={(e)=>{e.preventDefault();capture();}} className='w-1/2 text-center align-middle  my-5 float-center px-10 py-3 bg-[#dddddd] text-black font-bold rounded-lg'>Capture</button>
                    <button className='w-1/2  text-center align-middle ml-3 my-5  px-10 py-3 bg-[#dddddd] text-black font-bold rounded-lg'>Search</button>
                </div>
                <div className='w-2/5'  ></div>
            </div>
       </>
    
  )
}

export default Capture