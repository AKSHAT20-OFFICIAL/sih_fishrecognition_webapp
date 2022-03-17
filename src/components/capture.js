import React, { useState } from 'react'
import Webcam from "react-webcam";
import Navbar from './Navbar';
const Capture = ({image, setImage}) => {
    // const [image, setImage] = useState('');
    const [snap, setSnap] = useState(false);
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
            setSnap(true)
            console.log(image)
        });
    return (
        <div className='bg-[#00232D] h-screen'>
            <Navbar />
            <div>
                <div className='flex flex-col items-center justify-center w-full h-full'>
                    <div className='w-1/5'></div>
                    <div className=' border-white border-dashed border-2 p-4 m-10 w-3/5 flex justify-center'>
                        <div className="flex flex-col md:flex-row items-center p-5  justify-center  ">

                            {/* {image == '' ? <Webcam
                                audio={false}
                                height={320}
                                ref={webcamRef}
                                screenshotFormat="image/jpeg"
                                width={340}
                                videoConstraints={videoConstraints}
                            /> : <img src={image} />} */}
                            <Webcam
                                audio={false}
                                height={320}
                                ref={webcamRef}
                                screenshotFormat="image/jpeg"
                                width={340}
                                videoConstraints={videoConstraints}
                            />
                            {image !== "" ?
                                <img className='md:w-[340px] md:h-[310px] mt-5 md:ml-10' src={image} />
                                :
                                <span></span>
                            }
                        </div>

                    </div>
                    <div className='w-1/5'></div>
                </div>

                <div className='flex flex-row flex-basis'>
                    <div className='w-2/5'  ></div>
                    <div className='w-3/5 flex flex-col md:flex-row justify-center'>
                        <div className='flex'>
                            <button className='w-1/2 text-center align-middle  my-5 float-center px-10 py-3 bg-[#dddddd] text-black font-bold rounded-lg'>
                                <a href='/'>Upload</a>
                            </button>

                            <button
                                onClick={capture}
                                className='w-1/2  text-center align-middle ml-3 my-5  px-10 py-3 bg-[#dddddd] text-black font-bold rounded-lg'
                            >
                                Capture
                            </button>
                        </div>
                        <div className='flex'>
                            {snap && <button
                                onClick={() => {
                                    setImage('');
                                    setSnap(false)
                                }}
                                className='w-1/2  text-center align-middle ml-3 my-5  px-10 py-3 bg-[#dddddd] text-black font-bold rounded-lg'
                            >
                                Delete
                            </button>}

                            {snap && <button className='w-1/2  text-center align-middle ml-3 my-5  px-10 py-3 bg-[#dddddd] text-black font-bold rounded-lg'>
                                Search
                            </button>}
                        </div>

                    </div>
                    <div className='w-2/5'  ></div>
                </div>

            </div>
        </div>

    )
}

export default Capture

