import React from 'react';
import {RiTwitterFill, RiFacebookCircleFill, RiInstagramFill, RiLinkedinBoxFill} from 'react-icons/ri'

const Footer = () => {
    return (
        <div className="h-[30vh] bg-white">
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <div>
                        <h2>Contact Us</h2>
                        <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    <div>
                        <p>abcdef@gmail.com</p>
                        <p>9876543210</p>
                        <div className='flex flex-row'>
                            <RiTwitterFill/>
                            <RiFacebookCircleFill/>
                            <RiInstagramFill/>
                            <RiLinkedinBoxFill/>
                        </div>
                    </div>
                </div>
                <div>
                    {/* copywrite */}
                </div>
            </div>
            
        </div>
    );
}

export default Footer;
