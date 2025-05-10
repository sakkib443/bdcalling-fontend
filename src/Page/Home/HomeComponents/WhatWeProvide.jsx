import React from "react";
import SectionHeading from "../../../Components/Shared/SectionHeading";
import { FcCollaboration } from "react-icons/fc";

const WhatWeProvide = () => {
  return (
    <div className="bg-white py-8 md:py-12 lg:py-1 mt-12 mb-4">
      {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={"Learning Approach "}
          description={
            "We're committed to elevating your learning journey by providing special features and support that empower you to grow without limitations."
          }
        />
      </div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 ">
          
          {/* Card 1 */}
          <div className="px-6 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 bg-[#f0fdfc] rounded-2xl  cursor-pointer
            transition-all duration-300 ease-in-out 
            hover:scale-105 hover:shadow-2xl hover:bg-[#e0f7f5]">
            
            <FcCollaboration className="text-5xl md:text-6xl" />
            <h2 className="outfit-semibold my-4 text-xl md:text-2xl font-bold text-black">
              Job Placement Support 🎯
            </h2>
            <p className="work crd text-sm md:text-base">
              At BDCalling Academy, we believe in building a lasting
              relationship with our students. Our commitment doesn't end with
              the course—our dedicated support team is here for you 24/7, even
              long after you've completed your training. With personalized
              guidance and continuous support, we help you overcome career
              challenges and grow every single day.
            </p>
          </div>

          {/* Card 2 */}
          <div className="px-6 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 bg-[#fafaee] rounded-2xl  cursor-pointer
            transition-all duration-300 ease-in-out 
            hover:scale-105 hover:shadow-2xl hover:bg-[#f3f3d6]">
            
            <FcCollaboration className="text-5xl md:text-6xl" />
            <h2 className="outfit-semibold my-4 text-xl md:text-2xl font-bold text-black">
              Lifetime Support 🚀
            </h2>
            <p className="work crd text-sm md:text-base">
              At BDCalling Academy, we believe in building a lasting
              relationship with our students. Our commitment doesn't end with
              the course—our dedicated support team is here for you 24/7, even
              long after you've completed your training. With personalized
              guidance and continuous support, we help you overcome career
              challenges and grow every single day.
            </p>
          </div>

          {/* Card 3 */}
          <div className="px-6 py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 bg-[#ecfcfb] rounded-2xl  cursor-pointer
            transition-all duration-300 ease-in-out 
            hover:scale-105 hover:shadow-2xl hover:bg-[#d7f7f6]">
            
            <FcCollaboration className="text-5xl md:text-6xl" />
            <h2 className="outfit-semibold my-4 text-xl md:text-2xl font-bold text-black">
              Get Certification 🏅
            </h2>
            <p className="work crd text-sm md:text-base">
              After successfully completing your course at BDCalling Academy,
              you'll receive an industry-recognized certificate that validates
              your skills and enhances your professional credibility. This
              certification will help you stand out in the job market and boost
              your confidence as you step into your career.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;
