import React from "react";
import SectionHeading from "../../../Components/Shared/SectionHeading";
import mentor from "../../../assets/img/Mentors/seminar.png";
import ButtonPrimary from "../../../Components/Shared/ButtonPrimary";

const Employe = () => {
  return (
    <div className="bg-white py-12 md:py-24">
      <div className="bg-[#ecfcfb] w-11/12 md:w-10/12 mx-auto rounded-2xl py-8 md:py-12 px-4">
        <div className="mb-8 md:mb-12">
          <p className="text-center crd work text-lg md:text-xl">
            9 Years Expert{" "}
          </p>
          <SectionHeading title={"Meet Our Members"}></SectionHeading>
        </div>

        <div className="flex flex-col lg:flex-row-reverse justify-center gap-8 md:gap-12">
          {/* First Card */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
            <div className="flex justify-center order-2 md:order-1">
              <div className="">
                <img
                  className="w-full max-w-[350px] md:w-[450px] border border-gray-200 p-4 pb-0 rounded-2xl"
                  src={mentor}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start ml-0 md:ml-3 order-1 md:order-2">
              <h1 className="outfit text-2xl md:text-3xl text-center my-1 text-black/80">
                Our All Members
              </h1>
              <ButtonPrimary title={"All Mentors"}></ButtonPrimary>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-4 md:gap-6">
            <div className="flex justify-center order-2 md:order-1">
              <div className="flex flex-col items-center justify-center">
                <img
                  className="w-full max-w-[350px] md:w-[450px] border border-gray-200 p-4 pb-0 rounded-2xl"
                  src={mentor}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end mr-0 md:mr-4 order-1 md:order-2">
              <h1 className="outfit text-2xl md:text-3xl text-center my-1 text-black/80">
                Meet Our Mentors
              </h1>
              <ButtonPrimary title={"All Mentors"}></ButtonPrimary>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6 md:mt-8">
          <ButtonPrimary title={"View All Members"}></ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default Employe;
