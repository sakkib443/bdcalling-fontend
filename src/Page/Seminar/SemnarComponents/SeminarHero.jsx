import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from 'react-icons/fa';



const SeminarHero = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date("2025-06-30T00:00:00"); // 🎯 Your target date/time
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Clear on unmount
    }, []);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // top-left corner
    }, [pathname]);
    return (
        <div>
            <div className='bg-cover bg-center relative'  style={{ backgroundImage: `url("https://scontent.fdac177-1.fna.fbcdn.net/v/t39.30808-6/490296322_1085750183597401_5712161885394260277_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=E5t3W2JZECMQ7kNvwHeSRGd&_nc_oc=Adm_xDoOefFQPpzzfazwNkKTygdAi0hHLGW76NxSlYixYgbJN6PLg9d5oqnRIIacl4A&_nc_zt=23&_nc_ht=scontent.fdac177-1.fna&_nc_gid=1iNYmsmxH7sywWvIVIMCeA&oh=00_AfKVJVsHcGKt6wItmoHodirhtaOMOeL5ZvsLl3v0gqa8sA&oe=683B4D9C")` }}>
                 <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
               
                <div className='flex flex-col justify-center items-center lg:py-12'>

                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8 relative container">
                        {/* Left Section */}
                        <div className="flex-1 flex flex-col justify-between w-full">
                            <div className="font-poppins">
                                <div className="flex items-center gap-2 mb-2">

                                    <p className="text-sm sm:text-xl md:text-[22px] crd work">
                                        A Leading Platform for Skills
                                    </p>
                                </div>
                                <h1 className="md:text-6xl my-4 text-4xl csd  outfit">

                                    Graphic Design Seminar

                                </h1>
                                <h1 className=" text-3xl sm:text-4xl md:text-6xl 2xl:text-4xl font-semibold outfit">


                                </h1>
                                <p className="mt-3 mb-3 text-xs sm:text-sm md:text-[15px] work">
                                    Welcome to Bdcalling Academy – the best place to build your IT career! We offer a range of expert-led courses to boost your tech skills and help you grow. Learn from real-world professionals, gain hands-on experience, and turn your dreams into reality. Start your journey with Bdcalling Academy today!
                                </p>

                            </div>
                        </div>


                        <div className="flex-1  items-center border border-gray-300 rounded-2xl w-full  py-12 lg:mt-0 bg-gray-100">
                            <div className='flex justify-center items-end gap-24'>
                                <div>
                                    <p className='work'>Start</p>
                                    <h3 className='text-xl outfit-semibold'>6.00 PM</h3>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <p className='poppins text-2xl'>May</p>
                                    <h3 className='text-5xl outfit'>30</h3>
                                    <p className='work'>Friday</p>
                                </div>
                                <div>
                                    <p className='work text-end'>End</p>
                                    <h3 className='text-xl outfit-semibold'>8.00 PM</h3>
                                </div>
                            </div>
                            <div className="flex gap-12 border mx-12 rounded py-2 border-gray-200 justify-center  mt-12">
                                <div>
                                    <span className="countdown font-mono text-4xl">
                                        <span style={{ "--value": timeLeft.days }} aria-label={`${timeLeft.days}`}>
                                            {timeLeft.days}
                                        </span>
                                    </span>
                                    <span className="block text-center">days</span>
                                </div>
                                <div>
                                    <span className="countdown font-mono text-4xl">
                                        <span style={{ "--value": timeLeft.hours }} aria-label={`${timeLeft.hours}`}>
                                            {timeLeft.hours}
                                        </span>
                                    </span>
                                    <span className="block text-center">hours</span>
                                </div>
                                <div>
                                    <span className="countdown font-mono text-4xl">
                                        <span style={{ "--value": timeLeft.minutes }} aria-label={`${timeLeft.minutes}`}>
                                            {timeLeft.minutes}
                                        </span>
                                    </span>
                                    <span className="block text-center">min</span>
                                </div>
                                <div>
                                    <span className="countdown font-mono text-4xl">
                                        <span style={{ "--value": timeLeft.seconds }} aria-label={`${timeLeft.seconds}`}>
                                            {timeLeft.seconds}
                                        </span>
                                    </span>
                                    <span className="block text-center">sec</span>
                                </div>
                            </div>

                            <div className='flex justify-center items-center px-12 mt-12' >
                                <div className='flex-1  flex items-center'>
                                    <CiLocationOn className='text-7xl' />
                                    <div>
                                        <h3 className='text-xl outfit-semibold'>Location</h3>
                                        <p className='text-sm work'>
                                            Daisy Garden, House 14 (Level-5), Block A, <br /> Main Road, Banasree, Dhaka</p>
                                    </div>
                                </div>
                                <div className=' border-l pl-12'>

                                    <h3 className='text-xl outfit-semibold'>Tickets</h3>
                                    <p className='text-3xl outfit-semibold'>
                                        Free Seminar</p>
                                </div>
                            </div>
                            <div className="flex gap-1 text-xl items-center justify-center lg:mx-12 mt-4 border border-[#41bfb8] px-4 py-2 mr-6 rounded-md hover:bg-[#e0f7f5] cursor-pointer transition">
                                <FaWhatsapp className="text-2xl text-[#41bfb8] font-semibold" />
                                <p className="text-[#41bfb8] work text-md tracking-tight text-[15px]">
                                    Book Now
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            {/* <div className="flex gap-5 justify-center mb-10">
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": timeLeft.days }} aria-label={`${timeLeft.days}`}>
                            {timeLeft.days}
                        </span>
                    </span>
                    <span className="block text-center">days</span>
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": timeLeft.hours }} aria-label={`${timeLeft.hours}`}>
                            {timeLeft.hours}
                        </span>
                    </span>
                    <span className="block text-center">hours</span>
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": timeLeft.minutes }} aria-label={`${timeLeft.minutes}`}>
                            {timeLeft.minutes}
                        </span>
                    </span>
                    <span className="block text-center">min</span>
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": timeLeft.seconds }} aria-label={`${timeLeft.seconds}`}>
                            {timeLeft.seconds}
                        </span>
                    </span>
                    <span className="block text-center">sec</span>
                </div>
            </div> */}
        </div>
    );
};

export default SeminarHero;