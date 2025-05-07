import React from "react";
import img1 from "../../../assets/img/heroSeminar.png";
import img2 from "../../../assets/img/seminar02.png";
import mentor from "../../../assets/img/Mentors/seminar.png";
import { LuBookOpenCheck } from "react-icons/lu";
import { LuAlarmClockMinus } from "react-icons/lu";
import { PiCertificateThin } from "react-icons/pi";
import { GrWorkshop } from "react-icons/gr";
import { HiOutlineComputerDesktop } from "react-icons/hi2";



const SeminarAndEvent = () => {
  return (
    <>
      {/* <div className="bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-0 lg:w-10/12 mx-auto md:mb-12">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
         
            <div className="flex flex-col md:flex-row justify-between items-end bg-[#ecfcfb] pt-8 px-6 md:px-8 lg:px-12 rounded-lg gap-6 md:gap-12 flex-1">
              <div className="w-full md:w-auto">
                <img
                  className="w-full md:w-[300px] lg:w-[400px] xl:w-[500px]"
                  src={mentor}
                  alt="Seminar mentor"
                />
              </div>
              <div className="w-full md:w-auto flex h-full items-center">
                <div>
                  <h2 className="outfit-semibold text-xl sm:text-2xl mb-4 dark:text-black">
                    Join Our Seminar
                  </h2>
                  <p className="work text-sm sm:text-[14px] dark:text-black">
                    Top instructors from around the world millions of student
                  </p>
                  <div className="flex gap-2 text-xl mt-4 mb-8 w-full sm:w-44 items-center justify-center sm:justify-start border bg-[#41bfb8] border-[#41bfb8] px-4 py-2 rounded-md">
                    <LuBookOpenCheck className="text-md font-semibold text-white" />
                    <p className="work tracking-tight text-[15px] text-white">
                      Apply Now
                    </p>
                  </div>
                </div>
              </div>
            </div>

   
            <div className="flex flex-col md:flex-row justify-between items-end bg-[#ecfcfb] pt-8 px-6 md:px-8 lg:px-12 rounded-lg gap-6 flex-1">
              <div className="w-full md:w-auto">
                <img
                  className="w-full md:w-[350px] lg:w-[450px] xl:w-[600px]"
                  src={img1}
                  alt="Event"
                />
              </div>
              <div className="w-full md:w-auto">
                <h2 className="outfit-semibold text-xl sm:text-2xl mb-4 dark:text-black">
                  Enjoy Our Events
                </h2>
                <p className="work text-sm sm:text-[14px] dark:text-black">
                  Top instructors from around the world millions of student
                </p>
                <div className="flex gap-2 text-xl mt-4 mb-8 w-full sm:w-44 items-center justify-center sm:justify-start border bg-[#41bfb8] border-[#41bfb8] px-4 py-2 rounded-md">
                  <LuBookOpenCheck className="text-md font-semibold text-white" />
                  <p className="work tracking-tight text-[15px] text-white">
                    Course Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex justify-center items-center gap-12 bg-[] container mx-auto">
        <div className="w-6/12">
          <div className="flex justify-end container">  <img  className="w-[80%]" src={img2} alt="" /></div>
        </div>
        <div className="w-6/12">
          <div className="w-[550px]">
            <div>
              <div className="flex items-center gap-2 border border-gray-200 py-1 px-2 pr-5 rounded-4xl work w-fit">
                <div className=" rounded-full p-3 bg-[#D8F7F6]">
                  <LuAlarmClockMinus />
                </div>
                <p>How We Start Journey</p>
              </div>
              <h1 className="outfit-semibold text-[40px]">
                We Care About <span className="csd"> Your Life For</span>  <br />
                Better Future
              </h1>
              <p className="work crd">This includes offering personalized feedback, fostering a seiscussion forums and group projects, and providing continuous support to address challenges and improve.</p>
            </div>

            <div className="mt-4">
              <div className="border border-gray-300 py-4 px-4 rounded-md flex items-center gap-3">
                <div className=" rounded-full p-3 bg-[#D8F7F6] w-fit">
                  <PiCertificateThin className="text-5xl" />
                </div>
                <div>
                  <p className="outfit-semibold text-xl">
                    Join Our Seminar
                  </p>
                  <p className="work"> Master Certified Trainer</p>
                </div>
              </div>
              <div className="border border-gray-300 py-4 px-4 rounded-md flex items-center gap-3 mt-4">
                <div className=" rounded-full p-3 bg-[#D8F7F6] w-fit">
                  <HiOutlineComputerDesktop className="text-5xl" />
                </div>
                <div>
                  <p className="outfit-semibold text-xl">
                    Join Our Workshop
                  </p>
                  <p className="work"> Master Certified Trainer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeminarAndEvent;
