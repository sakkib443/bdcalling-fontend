import React from 'react';
import { BiSupport } from "react-icons/bi";


const HomeCategory = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-4 w-9/12  mx-auto justify-center items-center gap-8 my-4 '>
                <div>
                    <div className='border border-gray-200 pl-6  pr-16 py-4 rounded-md flex  justify-center items-end gap-2'>
                        <div>
                            <img className='w-14 transform ' src="../../../../public/gdIcon.png" alt="" />
                        </div>
                        <div className=''>
                            <h3 className='font-semibold crd outfit-semibold '> Art & Design</h3>
                            <p className='work '>Fun with Challeng</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border border-gray-200 pl-6  pr-16 py-4 rounded-md flex  justify-center items-end gap-2'>
                        <div>
                            <img className='w-14 transform ' src="../../../../public/webicon.png" alt="" />
                        </div>
                        <div className=''>
                            <h3 className='font-semibold crd outfit-semibold '> Programming</h3>
                            <p className='work '>Code & Confident</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border border-gray-200 pl-6  pr-16 py-4 rounded-md flex  justify-center items-end gap-2'>
                        <div>
                            <img className='w-14 transform ' src="../../../../public/gd.png" alt="" />
                        </div>
                        <div className=''>
                            <h3 className='font-semibold crd outfit-semibold '> Marketing</h3>
                            <p className='work '>Fun with Challeng</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border border-gray-200 pl-6  pr-16 py-4 rounded-md flex  justify-center items-end gap-2'>
                        <div>
                            <img className='w-14 transform ' src="../../../../public/gd.png" alt="" />
                        </div>
                        <div className=''>
                            <h3 className='font-semibold crd outfit-semibold '> Art & Design</h3>
                            <p className='work '>Fun with Challeng</p>
                        </div>
                    </div>
                </div>
               
            </div>
           
        </div>
    );
};

export default HomeCategory;