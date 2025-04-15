import React from 'react';
import img1 from "../../../assets/img/heroSeminar.png"

import { LuBookOpenCheck } from 'react-icons/lu';

const SeminarAndEvent = () => {
    return (
        <div className='flex w-10/12 mx-auto gap-16 mb-12 '>
            <div className='flex justify-between items-end bg-gray-100 pt-8 px-12 rounded-lg gap-12 '>

                <div className=''>
                    <img className='w-[600px] ' src={img1} alt="" />
                </div>
                <div className=''>
                    <h2 className='outfit-semibold text-2xl mb-4'>Join Our Seminar</h2>
                    <p className='work  text-[14px]'>Top instructors from around the world millions of student</p>
                    <div className="flex gap-2 text-xl mt-4 mb-8  w-44 items-center border bg-[#41bfb8] border-[#41bfb8] px-4 py-2 rounded-md">
                        <LuBookOpenCheck className="text-md font-semibold text-white" />
                        <p className="work tracking-tight text-[15px] text-white">Course Details</p>
                    </div>
                </div>


            </div>
            <div className='flex justify-between items-end bg-gray-100 pt-8 px-12 rounded-lg  '>
                <div className=''>
                    <img className='w-[600px] ' src={img1} alt="" />
                </div>
                
                   <div className=''>
                    <h2 className='outfit-semibold text-xl mb-4'>Join Our Seminar</h2>
                    <p className='work  text-[14px]'>Top instructors from around the world millions of student</p>
                    <div className="flex gap-2 text-xl mt-4 mb-8 w-44 items-center border bg-[#41bfb8] border-[#41bfb8] px-4 py-2 rounded-md">
                        <LuBookOpenCheck className="text-md font-semibold text-white" />
                        <p className="work tracking-tight text-[15px] text-white">Course Details</p>
                    </div>
                </div>


            </div>



        </div>
    );
};

export default SeminarAndEvent;