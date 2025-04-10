import React from 'react';
import { LuBookOpenCheck } from 'react-icons/lu';

const PopularCourse = () => {
    return (
        <div className='my-24'>
            <div>
                <h1 className='text-center csd text-6xl font-semibold outfit-semibold work '>Popular Courses</h1>
                <p className='text-center crd work  mt-4'>Bdcalling Academy offers a variety of courses, and upon successful completion, we provide job
                    opportunities within our company.  Additionally, <br /> we offer scholarships  in different categories   to support aspiring individuals. Our training programs include hands-on experience with
                    real client projects, <br /> ensuring a comprehensive and practical learning experience.</p>
            </div>
            <div className='w-10/12 mx-auto flex justify-start gap-12 mt-12 '>
                <div className='border border-[#d0eae8]  rounded-md  '>
                    <p className='border-b pl-6 py-3 mb-3 outfit-semibold  border-[#d1eae8] text-2xl'>Category</p>
                    <div className='flex flex-col gap-3 work  pl-6 pb-8 pr-24'>
                        <label className="fieldset-label">
                            <input type="checkbox" className="checkbox   w-5 h-5 rounded-sm" />
                            Multimedia
                        </label>
                        <label className="fieldset-label">
                            <input type="checkbox" className="checkbox   w-5 h-5 rounded-sm" />
                            Web Technology
                        </label>
                        <label className="fieldset-label">
                            <input type="checkbox" className="checkbox   w-5 h-5 rounded-sm" />
                            Marketing
                        </label>
                        <label className="fieldset-label">
                            <input type="checkbox" className="checkbox   w-5 h-5 rounded-sm" />
                            Media & Flim
                        </label>
                        <label className="fieldset-label">
                            <input type="checkbox" className="checkbox   w-5 h-5 rounded-sm" />
                            Netwrking & Server
                        </label>
                    </div>


                </div>

                <div className='flex gap-6'>
                    <div className="relative w-[400px]  transition-all duration-500 ease-in-out hover:rotate-[0.1deg] hover:scale-[1.03] hover:shadow-xl  group perspective rounded-xl">

                        <div className="relative  rounded-md border border-gray-200 bg-white p-2 text-gray-800 overflow-hidden transition-all duration-700 ease-in-out">

                            <div className="relative h-52 w-full overflow-visible">
                                <img
                                    src="../../../../public/course_img_wd.jpg"
                                    alt="thumbnail"
                                    className="absolute top-0 left-0 h-full w-full  rounded-xl transform transition-transform duration-700 ease-in-out group-hover:scale-105"
                                />
                            </div>


                            <div>
                                <div className="mt-5 space-y-2 text-left pl-4">
                                    <div className='flex justify-between pr-8'>
                                        <p className='btn btn-xs'>Web Technology</p>
                                        <p className='btn btn-xs'>Offline</p>
                                    </div>
                                    <h2 className="text-2xl font-bold  outfit-semibold csd">MERN Stack Development</h2>

                                    <div className='flex justify-between pr-8 items-center'>

                                        <p className="text-lg font-semibold text-gray-800 work">
                                            Course Fee 30000 ৳
                                        </p>
                                        <div className="rating text-sm">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-5" aria-label="1 star" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-5" aria-label="2 star" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-5" aria-label="3 star" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-5" aria-label="4 star" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-5" aria-label="5 star" defaultChecked />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* Button Section */}
                            <div className="flex justify-between items-center mt-2 pl-4 mb-2">
                                <div className="flex gap-2 justify-center  w-full text-xl items-center border border-[#41bfb8] px-2 py-1 rounded-md">
                                    <LuBookOpenCheck className="text-xl text-[#41bfb8] font-semibold" />
                                    <p className="text-[#41bfb8] work text-md ">Course Details</p>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="relative w-[400px]  transition-all duration-500 ease-in-out hover:rotate-[0.1deg] hover:scale-[1.03] hover:shadow-xl  group perspective rounded-xl">

                        <div className="relative rounded-md border  border-gray-200 bg-white p-2 text-gray-800 overflow-hidden transition-all duration-700 ease-in-out">

                            <div className="relative h-52 w-full overflow-visible">
                                <img
                                    src="../../../../public/course_img_wd.jpg"
                                    alt="thumbnail"
                                    className="absolute top-0 left-0 h-full w-full  rounded-xl transform transition-transform duration-700 ease-in-out group-hover:scale-105"
                                />
                            </div>


                            <div>
                                <div className="mt-5 space-y-2 text-left pl-4">
                                    <div className='flex justify-between pr-8'>
                                        <p className='btn btn-xs'>Web Technology</p>
                                        <p className='btn btn-xs'>Offline</p>
                                    </div>
                                    <h2 className="text-2xl font-bold  outfit-semibold csd">MERN Stack Development</h2>

                                    <div className='flex justify-between pr-8 items-center'>

                                        <p className="text-lg font-semibold text-gray-800 work">
                                            Course Fee 30000 ৳
                                        </p>
                                        <div className="rating text-sm">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-5" aria-label="1 star" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-5" aria-label="2 star" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-5" aria-label="3 star" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-5" aria-label="4 star" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-5" aria-label="5 star" defaultChecked />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* Button Section */}
                            <div className="flex justify-between items-center mt-2 pl-4 mb-2">
                                <div className="flex gap-2 justify-center  text-xl items-center border border-[#41bfb8] px-2 py-1 rounded-md">
                                    <LuBookOpenCheck className="text-xl text-[#41bfb8] font-semibold" />
                                    <p className="text-[#41bfb8] work text-md">Course Details</p>
                                </div>
                                <div className="flex gap-2 justify-center   text-xl items-center border border-[#41bfb8] px-2 py-1 rounded-md">
                                    <LuBookOpenCheck className="text-xl text-[#41bfb8] font-semibold" />
                                    <p className="text-[#41bfb8] work text-md">Get Course</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default PopularCourse;