import React from 'react';
import {RiTwitterFill, RiFacebookCircleFill, RiInstagramFill, RiLinkedinBoxFill} from 'react-icons/ri'

const Footer = () => {
    return (
        <div className="h-[40vh] bg-white font-bahnschrift hidden md:block">
            <div className='flex flex-col px-20'>
                <div className='flex flex-row justify-between py-5'>
                    <div  className='w-[50vw] text-left'>
                        <h2 className='text-xl font-bold py-5 '>Contact Us</h2>
                        <div className='text-lg mr-20'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    <div className='text-right text-lg py-12 leading-9'>
                        <p>abcdef@gmail.com</p>
                        <p>9876543210</p>
                        <div className='flex flex-row justify-end'>
                            <RiTwitterFill className='mx-1'/>
                            <RiFacebookCircleFill className='mx-1'/>
                            <RiInstagramFill className='mx-1'/>
                            <RiLinkedinBoxFill className='ml-1'/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-center'>
                    <span className='px-5'>Company</span>
                    <span className='px-5'>Terms of Service</span>
                    <span className='px-5'>Privacy Policy</span>
                </div>
                <div className='text-center text-xs py-3'>
                    © 2020 ENVISION GAMMA
                </div>
            </div>
            
        </div>
    );
}

export default Footer;
