import React from 'react';
import SectionHeading from '../../../Components/Shared/SectionHeading';
import { FcCollaboration } from "react-icons/fc";


const WhatWeProvide = () => {
    return (
        <div>
            <div>
                <SectionHeading title={"Our Unique Learning Approach "}
                    discription={"We're committed to elevating your learning journey by providing special features and support that empower you to grow without limitations."}></SectionHeading>
            </div>

            <div className='w-8/12 mx-auto flex justify-between my-12  flex-wrap'>
                <div className=' px-12 py-12 bg-[#f0fdfc] w-[32%] rounded-2xl'>
                    <FcCollaboration className='text-6xl' />
                    <h2 className='outfit-semibold my-4 text-2xl font-bold'>Job Placement Support 🎯 </h2>
                    <p className='work crd '>At BDCalling Academy, we believe in building a lasting relationship with our students. Our commitment doesn't end with the course—our dedicated support team is here for you 24/7, even long after you’ve completed your training. With personalized guidance and continuous support, we help you overcome career challenges and grow every single day.</p>
                </div>
                <div className='bg-[#fafaee] px-12 py-12 w-[32%] rounded-2xl'>
                    <FcCollaboration className='text-6xl' />
                    <h2 className='outfit-semibold my-4 text-2xl font-bold'>Lifetime Support 🚀</h2>
                    <p className='work  crd'>At BDCalling Academy, we believe in building a lasting relationship with our students. Our commitment doesn't end with the course—our dedicated support team is here for you 24/7, even long after you’ve completed your training. With personalized guidance and continuous support, we help you overcome career challenges and grow every single day.</p>
                </div>

                <div className='bg-[#ecfcfb] px-12 py-12 w-[32%] rounded-2xl'>
                    <FcCollaboration className='text-6xl' />
                    <h2 className='outfit-semibold my-4 text-2xl font-bold'>Get Certification 🏅</h2>
                    <p className='work crd '>After successfully completing your course at BDCalling Academy, you’ll receive an industry-recognized certificate that validates your skills and enhances your professional credibility. This certification will help you stand out in the job market and boost your confidence as you step into your career.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhatWeProvide;