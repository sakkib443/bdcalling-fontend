import React from 'react';
import { FiBookOpen } from "react-icons/fi";
import { LuBookOpenCheck } from 'react-icons/lu';

const Hero = () => {
    return (
        <div className="mx-auto w-9/12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Left Section */}
                <div className="flex-1 flex flex-col justify-between">
                    <div className="font-poppins">
                        <div className="flex items-center gap-2 mb-2">
                            <FiBookOpen className="text-3xl animate-bounce" />
                            <p className="text-[22px] text-[#41bfb8] work">Build A Strong Career With</p>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-semibold outfit">
                            <span className="text-5xl md:text-7xl text-[#F79952]">Betopia </span>Skills Ltd
                        </h1>
                        <p className="mt-3 mb-3 text-sm md:text-[15px] work">
                            Get ready to embark on a journey of knowledge with our innovative
                            learning platform. Explore a wide range of courses and interactive
                            lessons designed by industry-expert instructors to help you reach your full potential
                        </p>

                        {/* Stats */}
                        <div className="mb-4">
                            <div className="stats shadow w-full">
                                {/* Total Courses */}
                                <div className="stat flex items-center gap-1.5 w-full md:w-48">
                                    <div>
                                        <div className="stat-title text-sm">Total Courses</div>
                                        <div className="flex items-center gap-2">
                                            <div className="stat-value text-[#41bfb8] text-xl">50+</div>
                                        </div>
                                        <div className="stat-desc text-xs">21% more than last month</div>
                                    </div>
                                </div>

                                {/* Total Students */}
                                <div className="stat flex items-center gap-1.5 w-full md:w-48">
                                    <div>
                                        <div className="stat-title text-sm">Total Students</div>
                                        <div className="flex items-center gap-3">
                                            <div className="stat-value text-[#41bfb8] text-xl">4200+</div>
                                        </div>
                                        <div className="stat-desc text-xs">21% more than last month</div>
                                    </div>
                                </div>

                                {/* Job Success */}
                                <div className="stat flex items-center gap-1.5">
                                    <div className="stat-figure text-secondary flex-shrink-0 mr-2">
                                        <div className="avatar online">
                                            <div className="w-14 rounded-full">
                                                <img className='border-2 rounded-full border-[#F79952]' src="https://www.creativefabrica.com/wp-content/uploads/2021/03/10/business-success-icon-Graphics-9457042-1-1-580x386.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="stat-value text-xl">90%</div>
                                        <div className="stat-title text-sm">Job Success</div>
                                        <div className="stat-desc text-[#41bfb8] text-xs">31 tasks remaining</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Get Course Buttons */}
                        <div className="flex gap-4 flex-wrap">
                            <div className="flex gap-2 text-xl items-center bg-[#41bfb8] px-4 py-2 rounded-md">
                                <LuBookOpenCheck className="text-2xl text-white font-semibold" />
                                <p className="text-white font-semibold">Get Course</p>
                            </div>
                            <div className="flex gap-2 text-xl items-center border border-[#41bfb8] px-4 py-2 rounded-md">
                                <LuBookOpenCheck className="text-2xl text-[#41bfb8] font-semibold" />
                                <p className="text-[#41bfb8] font-semibold">Get Course</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section (Video) */}
                <div className="flex-1 flex justify-center items-center">
                    <div className="relative w-full h-0 pb-[60.25%] overflow-hidden rounded-xl">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/ohRdvaEzpJQ?si=ShAqobFXDT2Xoqag"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
