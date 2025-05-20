
import { useState } from 'react';
import React from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SectionHeading from '../../../Components/Shared/SectionHeading';
import bgImage from "../../../assets/img/bg1.png";

const Concerns = () => {
    const images = [
        { id: 1, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/1_bteb.png' },
        { id: 2, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/2_ict.png' },
        { id: 3, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/3_iitu.png' },
        { id: 4, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/4_edge.png' },
        { id: 5, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/5_nsda.png' },
        { id: 6, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/6_dhaka_university.jpg' },
        { id: 7, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/7_crown_institute_of_business_and_technology.jpg' },
        { id: 8, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/8_eastern_eniversity.png' },
        { id: 9, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/9_jagannath_university.png' },
        { id: 10, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/10_dhaka_college.png' },
        { id: 11, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/11_united_international_university.png' },
        { id: 12, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/12_metropolitan_university.png' },
        { id: 13, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/1_bteb.png' },
        { id: 14, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/2_ict.png' },
        { id: 15, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/3_iitu.png' },
        { id: 16, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/4_edge.png' },
        { id: 17, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/5_nsda.png' },
        { id: 18, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/6_dhaka_university.jpg' },
        { id: 19, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/7_crown_institute_of_business_and_technology.jpg' },
        { id: 20, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/8_eastern_eniversity.png' },
        { id: 21, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/9_jagannath_university.png' },
        { id: 22, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/10_dhaka_college.png' },
        { id: 23, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/11_united_international_university.png' },
        { id: 24, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/12_metropolitan_university.png' },
        { id: 25, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/1_bteb.png' },
        { id: 26, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/2_ict.png' },
        { id: 27, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/3_iitu.png' },
        { id: 28, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/4_edge.png' },
        { id: 29, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/5_nsda.png' },
        { id: 30, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/6_dhaka_university.jpg' },
        { id: 31, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/7_crown_institute_of_business_and_technology.jpg' },
        { id: 32, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/8_eastern_eniversity.png' },
        { id: 33, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/9_jagannath_university.png' },
        { id: 34, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/10_dhaka_college.png' },
        { id: 35, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/11_united_international_university.png' },
        { id: 36, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/12_metropolitan_university.png' },
        { id: 37, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/1_bteb.png' },
        { id: 38, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/2_ict.png' },
        { id: 39, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/3_iitu.png' },
        { id: 40, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/4_edge.png' },
        { id: 41, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/5_nsda.png' },
        { id: 42, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/6_dhaka_university.jpg' },
        { id: 43, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/7_crown_institute_of_business_and_technology.jpg' },
        { id: 44, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/8_eastern_eniversity.png' },
        { id: 45, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/9_jagannath_university.png' },
        { id: 46, category: 'Our Concern', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/10_dhaka_college.png' },
        { id: 47, category: 'Colaboration With', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/11_united_international_university.png' },
        { id: 48, category: 'Member Of', src: 'https://www.bdcallingacademy.com/images/assest/assosiate/working/12_metropolitan_university.png' },
    ];

    const [selectedCategory, setSelectedCategory] = useState('Our Concern');
    const [page, setPage] = useState(0);
    const imagesPerPage = 10;

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setPage(0);
    };

    const handleNext = () => {
        const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
        if (page + 1 < totalPages) {
            setPage(prev => prev + 1);
        } else {
            setPage(0)
        }
    };

    const handlePrev = () => {
        if (page > 0) {
            setPage(prev => prev - 1);
        }
    };

    const filteredImages = images.filter(image => image.category === selectedCategory);
    const paginatedImages = filteredImages.slice(page * imagesPerPage, (page + 1) * imagesPerPage);
    // const hasMoreImages = filteredImages.length > (page + 1) * imagesPerPage;

    return (
        <div className='bg-white py-12 md:py-12 relative  '>
            <div className='relative w-11/12 lg:w-10/12 border border-gray-200 bg-cover  mx-auto py-12 px-6 rounded-2xl '  style={{ backgroundImage: `url(${bgImage})` }}>
                {/* Background Image Overlay */}
                <div
                    className="absolute inset-0 rounded-2xl bg-cover bg-center opacity-10"
                    style={{
                        backgroundImage: `url('https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/491185347_1085730833599336_6679927905642902823_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFMxqaiP5Vt0I1t6mXG8XC1dNnDbsVyffx02cNuxXJ9_MPyrTfVZTCx0vCN0yD0Cw46plaADOVLbLgLlZvYSbs_&_nc_ohc=OC5TdUjhyRMQ7kNvwHj744_&_nc_oc=AdlLq8prVk2-PMmbvhvxZ5JJ-svcd-XzkDbsbytax2LOvrG26hQPIxjJa-cd_ZN65Gg&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=cde8rQ94wWzg9tFxRh0r0g&oh=00_AfEXNuJppYlJjdSf1dPIGLW1sTGCxo5vvrocvFLGD1Rt_A&oe=68112840')`,
                    }}
                ></div>

                {/* All your foreground content below */}
                <div className='relative z-10'>
                    {/* Section Heading and Filter Buttons */}
                    <SectionHeading title={"Our Working Partner"} />
                    <div className='flex flex-wrap justify-center gap-3 work pl-6 pb-8 pr-6 mt-12'>
                        {['Our Concern', 'Colaboration With', 'Member Of'].map((cat, idx) => (
                            <label key={idx} className="fieldset-label dark:text-gray-600">
                                <p
                                    onClick={() => handleCategoryChange(cat)}
                                    className={`fieldset-label btn rounded-md cursor-pointer shadow-2xl transition dark:border-gray-300 dark:shadow-none ${selectedCategory === cat ? 'bg-[#41bfb8] text-white' : 'bg-[#ecfcfb] dark:text-gray-500'
                                        }`}
                                >
                                    {cat}
                                </p>
                            </label>
                        ))}
                    </div>

                    {/* Image Grid */}
                    <div className='flex flex-col lg:flex-row items-center justify-center gap-12'>
                        <div className='w-full lg:w-3/4 relative'>
                            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6 gap-2'>
                                {paginatedImages.length > 0 ? (
                                    paginatedImages.map((image, index) => (
                                        <motion.div
                                            key={image.id}
                                            className='flex items-center justify-center'
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.05 }}
                                        >
                                            <div className='w-44 h-36 flex justify-center items-center object-cover p-4 shadow-sm border-gray-200 bg-white rounded-xl'>
                                                <img src={image.src} alt={`Image ${image.id}`} className="w-20" />
                                            </div>
                                        </motion.div>
                                    ))
                                ) : (
                                    <p>No images to display. Select a category.</p>
                                )}
                            </div>

                            {/* Pagination Buttons */}
                            <button
                                onClick={handlePrev}
                                className="absolute cursor-pointer md:-left-15 -left-15 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 shadow-md p-3 rounded-full hover:bg-[#41bfb8] hover:text-white transition duration-500"
                            >
                                <FaChevronLeft className='cpr' size={18} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute md:-right-15 -right-5 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-3 rounded-full hover:bg-[#41bfb8] hover:text-white border border-gray-300 transition duration-500 cursor-pointer"
                            >
                                <FaChevronRight className='cpr' size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Concerns;
