import React from 'react';
import { IoMdCall } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
const TopHeader = () => {
    return (
        <div className=' bg-[#EBEEF6] font-poppins '>
            <div className='w-9/12 mx-auto bg-[#EBEEF6]'>
                <div className=' flex items-center justify-between'>
                    <div className='flex items-center gap-5 py-3 '>
                        <div className='flex gap-1 items-center  pr-4 '>
                            <IoMdCall className='text-xl text-[#F79952]' />
                            <p>01332840808</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <IoMailOutline className='text-xl text-[#F79952]' />
                            <p>learn.bdcalling@gmail.com</p>
                        </div>

                    </div>
                    <div>
                        <div className='flex gap-12 items-center'>
                            <div className='flex gap-6 text-xl text-gray-700 items-start'>
                                < SlSocialFacebook />
                                < SlSocialLinkedin />
                                < FaInstagram className='transform translate-y-[2px]' />
                                < FiTwitter className='transform translate-y-[2px]' />

                            </div>
                            <div className='flex gap-4'>
                                <p className='border-r border-gray-400 pr-3'>Login</p>
                                <p>Register</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopHeader;