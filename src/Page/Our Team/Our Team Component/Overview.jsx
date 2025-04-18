import React from 'react';
import img1 from "../../../assets/img/icon (1).png"
const Overview = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto my-10">
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                    <div className="bg-[#FDF2F2] flex gap-10 justify-center items-center py-13  rounded-4xl">
                        <div className="">
                            <img className='w-15' src={img1} alt="" />
                        </div>
                        <div className="text-center">
                            <p className='text-5xl font-bold'>200+</p>
                            <p className='font-semibold text-2xl'>Courses</p>
                        </div>
                    </div>
                    <div className="bg-[#EDFBF2] flex gap-10 items-center justify-center py-13 rounded-4xl">
                        <div className="">
                            <img className='w-15' src="/src/assets/img/team/icon2.png" alt="" />
                        </div>
                        <div className="text-center">
                            <p className='text-5xl font-bold'>100+</p>
                            <p className='font-semibold text-2xl'>Mentors</p>
                        </div>
                    </div>
                    <div className="bg-[#FDF3FD] flex gap-10 items-center justify-center py-13 rounded-4xl">
                        <div className="">
                            <img className='w-15' src="/src/assets/img/team/icon1.png" alt="" />
                        </div>
                        <div className="text-center">
                            <p className='text-5xl font-bold'>50+</p>
                            <p className='font-semibold text-lg'>Associate Organizations</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;