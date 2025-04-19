import React from "react";
import { BiCategory } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { LuBookOpenCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

const CourseCard = ({ id, title, category, type, image, fee, rating }) => {
  return (
    <>
      <div>
        <div
          key={id}
          className="relative   bg-transparent cursor-pointer transition-transform duration-700 ease-in-out hover:scale-[1.03] hover:shadow-xl group perspective rounded-xl"
        >
          <div className="rounded-md border border-gray-200 bg-white p-2 text-gray-800 overflow-hidden transition-all duration-700 ease-in-out">
            <div className="relative h-52 w-full overflow-hidden rounded-xl">
              <img
                src={image}
                alt="thumbnail"
                className="h-full w-full rounded-xl object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>

            <div className="mt-5 space-y-1 text-left pl-4">
              <div className="flex justify-between pr-8">
                <div className="flex items-center gap-1">
                  <BiCategory />
                  <p className="text-[13px] work">{category}</p>
                </div>
                <p className="bg-[#F79952] text-white text-[13px] px-2 py-1 work rounded-[4px]">
                  {type}
                </p>
              </div>

              <h2 className="text-[22px] font-bold w-10/12 h-17 outfit-semibold csd">
                {title}
              </h2>

              <div className="flex justify-between pr-8 items-center">
                <p className="text-lg font-semibold text-gray-800 work">
                  Course Fee {fee}
                </p>
                <div className="rating text-sm">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name={`rating-${id}`}
                      className="mask mask-star-2 bg-orange-400 w-5"
                      aria-label={`${i + 1} star`}
                      defaultChecked={i + 1 === rating}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-2 pl-4 mb-2">
              <Link to={`${id}`} className="flex gap-2 text-xl items-center border bg-[#41bfb8] border-[#41bfb8] px-4 py-2 rounded-md">
                <LuBookOpenCheck className="text-md font-semibold text-white" />
                <p className="work tracking-tight text-[15px] text-white">
                  Course Details
                </p>
              </Link>
              <div className="flex gap-2 text-xl items-center border border-[#41bfb8] px-4 py-2 mr-6 rounded-md">
                <IoMdCall className="text-xl text-[#41bfb8] font-semibold" />
                <p className="text-[#41bfb8] work text-md tracking-tight text-[15px]">
                  Get Course
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
