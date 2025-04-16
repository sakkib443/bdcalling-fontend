import React from 'react';
import SectionHeading from '../../../Components/Shared/SectionHeading';
import mentor from "../../../assets/img/Mentors/seminar.png"
import ButtonPrimary from '../../../Components/Shared/ButtonPrimary';

const Employe = () => {
    return (
        <div className='my-24'>

            <div className='bg-[#ecfcfb] w-10/12 mx-auto rounded-2xl py-12'>
                <div className='mb-12'>
                    <p className='text-center crd work text-xl'>9 Years Expert </p>
                    <SectionHeading title={"Meet Our Members"}></SectionHeading>

                </div>

                <div className='flex flex-row-reverse justify-center'>
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center'>
                            <div className=''>
                                <img className='w-[450px] border border-gray-200 p-4 pb-0 rounded-2xl' src={mentor} alt="" />
                            </div>
                        </div>
                        <div className='flex flex-col items-start ml-3'>
                            <h1 className='outfit text-3xl text-center my-1 '>
                                Our All Members
                            </h1>
                            <ButtonPrimary title={"All Mentors"}></ButtonPrimary>
                        </div>
                    </div>
                    <div className='flex justify-center items-center flex-row-reverse'>
                        <div className='flex justify-start'>
                            <div className='flex flex-col items-center justify-center'>
                                <img className='w-[450px] border border-gray-200 p-4 pb-0 rounded-2xl' src={mentor} alt="" />

                            </div>

                        </div>
                        <div className='flex flex-col items-end mr-4'>
                            <h1 className='outfit text-3xl text-center my-1'>
                                Meet Our Mentors
                            </h1>
                            <ButtonPrimary title={"All Mentors"}></ButtonPrimary>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center mt-8'>
                    <ButtonPrimary title={"Vew All Menbers"}></ButtonPrimary>
                </div>

            </div>

        </div>
    );
};

export default Employe;