import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from './ContactComponent/FAQ';
import DropQuestion from './ContactComponent/DropQuestion';
import Address from './ContactComponent/Address';


const Contact = () => {

    return (
        <div>
            <div className="">
                <div className=" relative">
                    <div className=" absolute z-10 w-full">
                        <div className="bg-gradient-to-r from-[#F3F7FB] via-[#F3F7FB] to-transparent flex flex-col justify-center p-10 md:pl-30 lg:pl-83 h-[22vh] lg:h-[35vh] w-full mx-auto ">
                            <div className="">
                                <h1 style={{ fontFamily: "Outfit, sans-serif" }} className='text-4xl font-semibold lg:text-7xl'>Contact Us</h1>
                                <div className="breadcrumbs text-sm">
                                    <ul>
                                        <li><Link to={"/"} className='hover:font-semibold hover:text-[#41bfb8] lg:text-2xl outfit'  >Home</Link></li>
                                        <li style={{ fontFamily: "Outfit, sans-serif" }} className='font-semibold text-[#41bfb8] lg:text-2xl'>Contact Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" relative text-end flex justify-end">
                        <img className='h-[22vh] lg:h-[35vh] lg:mr-0 -mr-15 overflow-hidden' src="/src/Page/Contact/image/contact.png" alt="" />
                    </div>
                </div>
            </div>
           
            <div className="flex flex-col lg:flex-row gap-8 lg:w-8/12 mx-auto">

                <DropQuestion></DropQuestion>
                <Address></Address>
            </div>
            <FAQ></FAQ>
        </div>
    );
};

export default Contact;