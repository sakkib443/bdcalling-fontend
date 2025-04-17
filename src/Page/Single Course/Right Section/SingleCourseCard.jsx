import React from "react";
import CourseCard from "../../../Components/CourseCard";
import { BiCategory } from "react-icons/bi";
import img from "../../../assets/img/course_img_wd.jpg";

const SingleCourseCard = ({ course, populerCourse }) => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center gap-6">
          <div className="shadow-lg rounded-xl bg-white overflow-hidden">
            <div>
              <img  src={img} alt="" />
            </div>
            <div className="px-6 py-4 space-y-1.5 text-gray-800">
              <div className="flex justify-between pr-8">
                <div className="flex items-center gap-1">
                  <BiCategory />
                  <p className="text-[13px] work">{course.category}</p>
                </div>
                <p className="bg-[#F79952] text-white text-[13px] px-2 py-1 work rounded-[4px]">
                  {course.type}
                </p>
              </div>
              <p className="text-lg font-semibold text-gray-800 work">
                Course Fee: {course.fee}
              </p>
              <button className="bg-[#41bfb8] rounded-md py-1.5 px-7 work tracking-tight text-[15px] text-white cursor-pointer border border-[#41bfb8] w-full mt-2">
                Enroll Now
              </button>
            </div>
          </div>

          <div className="hidden lg:block space-y-4">
            <h3 className="text-[#F79952] text-2xl md:text-3xl outfit-semibold text-center">
              Populer <span className="crd">Courses</span>
            </h3>
            {populerCourse.slice(0, 2).map((item) => (
              <CourseCard
                key={item.id}
                id={item.id}
                title={item.title}
                category={item.category}
                type={item.type}
                image={item.image}
                fee={item.fee}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCourseCard;
