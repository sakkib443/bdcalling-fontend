import React, { useState, useEffect } from 'react';
import { IoMdCall } from 'react-icons/io';
import { LuBookOpenCheck } from 'react-icons/lu';
import { BiCategory } from "react-icons/bi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import giIdCardImg from '../../../assets/img/GD-Card (1).jpg';
import mernImg from '../../../assets/img/Mern-card.jpg';
import dmImg from '../../../assets/img/DM-caed.jpg';

export const courseData = [
    {
        id: 1,
        title: "Certified Digital Marketing Specialist",
        category: "Web Technology",
        type: "Offline Course",
        image: dmImg,
        fee: "25000৳",
        rating: 5
    },
    {
        id: 2,
        title: "Advanced Mern Stack Development",
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
        id: 4,
        title: "Certified UI/UX Design Specialeast",
        category: "Design",
        type: "Offline Course",
        image: giIdCardImg,
        fee: "20000৳",
        rating: 4
    },
    {
        id: 5,
        title: "Web Development with PHP",
        category: "Web Technology",
        type: "Offline Course",
        image: mernImg,
        fee: "22000৳",
        rating: 5
    },
];

const PopularCourseCard = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(3);

    // Adjust visible items based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setVisibleItems(1); // Show 1 item on mobile
            } else {
                setVisibleItems(3); // Show 3 items on desktop
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial state based on the current screen width

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const visibleCourses = courseData.slice(startIndex, startIndex + visibleItems); // Show based on visibleItems

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex === 0 ? courseData.length - visibleItems : prevIndex - 1));
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + visibleItems >= courseData.length ? 0 : prevIndex + 1));
    };

    return (
        <div className='relative mx-auto mt-12 w-full'>
            {/* Category Filter */}
            <div className='flex flex-wrap justify-center gap-3 pl-6 pb-8 pr-6'>
                {['Multimedia', 'Web Technology', 'Marketing', 'Media & Film', 'Networking & Server'].map((cat, idx) => (
                    <label key={idx} className="fieldset-label btn bg-[#ecfcfb]">{cat}</label>
                ))}
            </div>

            {/* Course Cards Wrapper */}
            <div className="flex items-center justify-center relative">

                {/* Arrow Buttons */}
                <button
                    onClick={handlePrev}
                    className="absolute cursor-pointer left-0 md:left-35 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 shadow-md p-3 rounded-full hover:bg-[#41bfb8] hover:text-white transition duration-500"
                >
                    <FaChevronLeft className='cpr' size={18} />
                </button>

                <button
                    onClick={handleNext}
                    className="absolute right-0 md:right-35  cursor-pointer top-1/2 transform -translate-y-1/2 z-10 bg-white  shadow-md p-3 rounded-full hover:bg-[#41bfb8] hover:text-white border border-gray-300 transition duration-500"
                >
                    <FaChevronRight className='cpr' size={18} />
                </button>

                {/* Course Cards */}
                <div className='flex flex-wrap gap-8 justify-center transition-all duration-700 ease-in-out px-6 md:px-12'>
                    {visibleCourses.map(course => (
                        <div
                            key={course.id}
                            className="relative w-[380px] h-[430px] bg-transparent cursor-pointer transition-transform duration-700 ease-in-out hover:scale-[1.03] hover:shadow-xl group perspective rounded-xl"
                        >
                            <div className="rounded-md border border-gray-200 bg-white p-2 text-gray-800 overflow-hidden transition-all duration-700 ease-in-out">
                                <div className="relative h-52 w-full overflow-hidden">
                                    <img
                                        src={course.image}
                                        alt="thumbnail"
                                        className="h-full w-full rounded-xl object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105"
                                    />
                                </div>

                                <div className="mt-5 space-y-1 text-left pl-4">
                                    <div className='flex justify-between pr-8'>
                                        <div className='flex items-center gap-1'>
                                            <BiCategory />
                                            <p className='text-[13px] work'>{course.category}</p>
                                        </div>
                                        <p className='bg-[#F79952] text-white text-[13px] px-2 py-1 work rounded-[4px]'>{course.type}</p>
                                    </div>

                                    <h2 className="text-[22px] font-bold w-10/12 h-17 outfit-semibold csd">{course.title}</h2>

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
                                    <div className="flex gap-2 text-xl items-center border bg-[#41bfb8] border-[#41bfb8] px-4 py-2 rounded-md">
                                        <LuBookOpenCheck className="text-md font-semibold text-white" />
                                        <p className="work tracking-tight text-[15px] text-white">Course Details</p>
                                    </div>
                                    <div className="flex gap-2 text-xl items-center border border-[#41bfb8] px-4 py-2 mr-6 rounded-md">
                                        <IoMdCall className='text-xl text-[#41bfb8] font-semibold' />
                                        <p className="text-[#41bfb8] work text-md tracking-tight text-[15px]">Get Course</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularCourseCard;
