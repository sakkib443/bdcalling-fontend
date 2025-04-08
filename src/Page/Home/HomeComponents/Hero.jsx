import React from 'react';
import { FiBookOpen } from "react-icons/fi";
import { LuBookOpenCheck } from 'react-icons/lu';



const Hero = () => {
    return (
        <div className=''>
            <div className='mx-auto w-9/12 my-24 '>
                <div className='flex justify-between items-center gap-16'>
                    <div className='font-poppins'>
                        <div className='flex items-center gap-2 mb-2'>
                            <FiBookOpen className='text-3xl ' />
                            <p className='text-xl '>Build A Strong Career With</p>
                        </div>
                        <h1 className='text-7xl font-semibold'> <span className='text-[#F79952]'>Betopia </span>Skills Ltd</h1>
                        <p className='mt-3 mb-3'>Get ready to embark on a journey of knowledge with our innovative
                            learning platform. Explore a wide range of courses and interactive
                            lessons designed by industry-expert instructors to help you reach your full potential</p>
                        <div className='flex gap-4'>
                            <div className="flex gap-2 text-xl items-center bg-[#F79952]   px-6 py-3 rounded-md ">
                                <LuBookOpenCheck className="text-2xl text-white font-semibold" />
                                <p className="text-white font-semibold">Get Course</p>
                            </div>
                            <div className="flex gap-2 text-xl items-center border border-[#F79952]   px-6 py-3 rounded-md ">
                                <LuBookOpenCheck className="text-2xl text-[#F79952] font-semibold" />
                                <p className="text-[#F79952] font-semibold">Get Course</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <iframe className='rounded-xl' width="660" height="385" src="https://www.youtube.com/embed/ohRdvaEzpJQ?si=ShAqobFXDT2Xoqag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;