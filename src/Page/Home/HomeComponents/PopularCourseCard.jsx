import React from 'react';
import { IoMdCall } from 'react-icons/io';
import { LuBookOpenCheck } from 'react-icons/lu';
import { BiCategory } from "react-icons/bi";
import giIdCardImg from '../../../assets/img/GD-Card (1).jpg';
import mernImg from '../../../assets/img/Mern-card.jpg';
import dmImg from '../../../assets/img/DM-caed.jpg';

const courseData = [
    {
        id: 2,
        title: "Advanced Mern Stck Development",
        category: "Web Technology",
        type: "Offline Course",
        image: mernImg,
        fee: "25000৳",
        rating: 5
    },
    {
        id: 3,
        title: "Advanced Graphic Design With AI",
        category: "Art & Graphic",
        type: "Offline Course",
        image: giIdCardImg,
        fee: "25000৳",
        rating: 5
    },
    {
        id: 1,
        title: "Certified Digital Marketing Specilist",
        category: "Web Technology",
        type: "Offline Course",
        image: dmImg,
        fee: "25000৳",
        rating: 5
    },
    
 
];

const PopularCourseCard = () => {
    return (
        <div className='mx-auto flex flex-col md:flex-row justify-center gap-12 mt-12'>
            <div className='border border-[#d0eae8] rounded-md'>
                <p className='border-b pl-6 py-3 mb-3 outfit-semibold border-[#d1eae8] text-2xl'>Category</p>
                <div className='flex flex-col gap-3 work pl-6 pb-8 pr-6'>
                    {['Multimedia', 'Web Technology', 'Marketing', 'Media & Flim', 'Netwrking & Server'].map((cat, idx) => (
                        <label key={idx} className="fieldset-label">
                            <input type="checkbox" className="checkbox w-5 h-5 rounded-sm" />
                            {cat}
                        </label>
                    ))}
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 flex-wrap '>
                {courseData.map(course => (
                    <div key={course.id} className="relative xl:w-[380px] bg-transparent  cursor-pointer transition-all duration-500 ease-in-out hover:rotate-[0.1deg] hover:scale-[1.03] hover:shadow-xl group perspective rounded-xl">
                        <div className="relative rounded-md border border-gray-200 bg-white p-2 text-gray-800 overflow-hidden transition-all duration-700 ease-in-out">
                            <div className="relative h-52 w-full overflow-visible">
                                <img
                                    src={course.image}
                                    alt="thumbnail"
                                    className="absolute top-0 left-0 h-full w-full rounded-xl transform transition-transform duration-700 ease-in-out group-hover:scale-105"
                                />
                            </div>

                            <div className="mt-5 space-y-1 text-left pl-4 ">
                                <div className='flex justify-between pr-8'>
                                    <div className='flex items-center gap-1'>
                                        <BiCategory />
                                        <p className='text-[13px] work'>{course.category}</p>
                                    </div>
                                    <p className='bg-[#F79952] text-white text-[13px] px-2 py-1 work rounded-[4px]'>{course.type}</p>
                                </div>
                                <h2 className="text-[26px] font-bold w-11/12 outfit-semibold csd ">{course.title}</h2>
                                <div className='flex justify-between pr-8 items-center'>
                                    <p className="text-lg font-semibold text-gray-800 work">Course Fee {course.fee}</p>
                                    <div className="rating text-sm">
                                        {[...Array(5)].map((_, i) => (
                                            <input
                                                key={i}
                                                type="radio"
                                                name={`rating-${course.id}`}
                                                className="mask mask-star-2 bg-orange-400 w-5"
                                                aria-label={`${i + 1} star`}
                                                defaultChecked={i + 1 === course.rating}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-2 pl-4 mb-2">
                                <div className="flex gap-2 justify-center text-xl items-center border bg-[#41bfb8] border-[#41bfb8] px-4 py-2 rounded-md">
                                    <LuBookOpenCheck className="text-md font-semibold text-white" />
                                    <p className="work tracking-tight text-[15px] text-white">Course Details</p>
                                </div>
                                <div className="flex gap-2 justify-center text-xl items-center border border-[#41bfb8] px-4 py-2 mr-6 rounded-md">
                                    <IoMdCall className='text-xl text-[#41bfb8] font-semibold' />
                                    <p className="text-[#41bfb8] work text-md tracking-tight text-[15px]">Get Course</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCourseCard;
