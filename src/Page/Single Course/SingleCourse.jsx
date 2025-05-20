import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCheck, FaStar, FaStarHalfAlt, FaRegClock } from "react-icons/fa";
import {
  RiComputerLine,
  RiExpandLeftRightLine,
  RiLiveLine,
} from "react-icons/ri";
import { MdLiveTv, MdWorkOutline, MdLanguage } from "react-icons/md";
import { TfiCup } from "react-icons/tfi";
import { GiLevelEndFlag } from "react-icons/gi";
import { IoMdCall } from "react-icons/io";
import { LuBookOpenCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { CiCircleCheck } from "react-icons/ci";
import { BsArrowRightCircle } from "react-icons/bs";
const SingleCourse = () => {
  const [course, setCourse] = useState(null);
  const [populerCourse, setPopulerCourse] = useState([]);
  const { id } = useParams();

  const iconMap = {
    RiLiveLine: <RiLiveLine />,
    RiExpandLeftRightLine: <RiExpandLeftRightLine />,
    RiComputerLine: <RiComputerLine />,
    MdLiveTv: <MdLiveTv />,
    TfiCup: <TfiCup />,
    MdWorkOutline: <MdWorkOutline />,
  };

  useEffect(() => {
    fetch("/Course-Data/Courses.json")
      .then((res) => res.json())
      .then((data) => {
        const foundCourse = data.find((course) => course.id == id);
        setCourse(foundCourse);
        setPopulerCourse(data);
      });
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Render star ratings dynamically
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  // Render icons based on name
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "RiLiveLine":
        return <RiLiveLine className="cpr text-base mt-0.5" />;
      case "RiExpandLeftRightLine":
        return <RiExpandLeftRightLine className="cpr text-base mt-0.5" />;
      case "RiComputerLine":
        return <RiComputerLine className="cpr text-base mt-0.5" />;
      case "MdLiveTv":
        return <MdLiveTv className="cpr text-base mt-0.5" />;
      case "TfiCup":
        return <TfiCup className="cpr text-base mt-0.5" />;
      case "MdWorkOutline":
        return <MdWorkOutline className="cpr text-base mt-0.5" />;
      default:
        return <FaCheck className="cpr text-base mt-0.5" />;
    }
  };

  return (
    <>
      <div>
        <div className="bg-[#ECFCFB] pb-6">
          <div className="space-y-14">
            <div className="py-32">
              <div className="container mx-auto">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-6">
                  <div className="space-y-6 w-full lg:w-1/2">
                    <h1 className="text-[#141F51] font-bold outfit text-3xl xl:text-5xl">
                      {course?.title}
                    </h1>
                    <div className="flex gap-3">
                      <div className="py-2 px-12 border border-gray-200 rounded-md text-center">
                        <p className="text-black outfit font-bold text-lg lg:text-md">
                          {course?.duration} Month
                        </p>
                         <p className="crd text-base work lg:text-md">Duration</p>
                      </div>
                      <div className="py-2  px-12 border border-gray-200 rounded-md text-center">
                       
                        <p className="text-black font-bold text-lg lg:text-md">
                          {course?.lectures}+
                        </p>
                         <p className="crd text-base lg:text-md">Lectures</p>
                      </div>
                      <div className="py-2  px-12 border border-gray-200 rounded-md text-center">
                      
                        <p className="text-black font-bold text-lg outfit lg:text-md">
                          {course?.totalProject} +
                        </p>
                          <p className="crd text-base lg:text-md work">Projects</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-base md:text-md crd work w-11/12">
                          {course?.details}
                        </p>
                    </div>
              
                    <div className="flex flex-wrap items-center gap-6">
                      <p className="text-xl md:text-3xl text-gray-800 outfit-semibold">
                        Course Fee: {course?.fee}
                      </p>
                      <button className="bg-[#43c3bc]  hover:bg-[#41bfb8]  rounded-md py-3 px-7 work tracking-tight text-[21px] text-white cursor-pointer">
                        Enroll Now
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      <div className="cpr flex items-center gap-0.5">
                        <span className="text-lg outfit-semibold">
                          {course?.rating}
                        </span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) =>
                            i < Math.floor(course?.rating) ? (
                              <FaStar key={i} />
                            ) : i === Math.floor(course?.rating) &&
                              course?.rating % 1 !== 0 ? (
                              <FaStarHalfAlt key={i} />
                            ) : (
                              <FaStar key={i} className="text-gray-300" />
                            )
                          )}
                        </div>
                      </div>
                      <p className="csd text-base lg:text-lg outfit-semibold">
                        (<span className="">{course?.totalRating} </span>
                        ratings)
                      </p>
                      <p className="text-gray-600 text-base lg:text-lg outfit-semibold">
                        {course?.totalStudentsEnroll} students
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 h-full rounded-2xl overflow-hidden">
                    {course ? (
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="text-gray-600">Loading...</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>



            
            {/* <div className="border border-gray-200 py-14">
              <div className="space-y-10 w-11/12 md:w-10/11 lg:w-9/12 mx-auto">
                <h2 className="font-bold  text-2xl md:text-5xl outfit">
                  Course <span className="cpr"> Overview</span>
                </h2>
                <p className="crd text-lg lg:text-md work leading-8 ">
                  {course?.courseOverview}
                </p>
              </div>
            </div> */}
            <div className="flex flex-col lg:flex-row gap-10 w-11/12 md:w-10/11 lg:w-9/12 mx-auto">
              <div className="space-y-14 w-full lg:w-2/3">
                <div className="">
                  <div className="">
                    <div className="pb-8 lg:pb-14 space-y-10">
                      <div className=" border-gray-300 rounded-lg  space-y-4">
                        <h2 className="outfit-semibold  text-2xl md:text-5xl">
                          What <span className="cpr">You'll Learn</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {course?.curriculum.map((item, index) => (
                            <div key={index} className="flex gap-1.5 items-top border border-gray-200 p-2 rounded-md work">
                              <BsArrowRightCircle className="text-gray-400 mt-2 text-base " />
                              <p className="text-md crd">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4 lg:mt-24">
                        <h2 className="outfit-semibold  text-2xl md:text-5xl">
                          This course<span className="cpr"> includes</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3  rounded-md">
                          {course?.courseIncludes.map((item, index) => (
                            <div key={index} className=" border p-4 rounded-md border-gray-300 flex flex-col items-center justify-center  gap-1.5">
                              {React.cloneElement(iconMap[item.icon], {
                                className: "text-gray-400 csd  text-4xl",
                              })}
                              <p className="text-md work crd">{item.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>




                      
                      <div className="border border-gray-300 rounded-lg p-6 space-y-4">
                        <h2 className="outfit-semibold csd text-2xl md:text-3xl">
                          Software You'll Learn
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {course?.softwareYoullLearn.map((software, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-1.5"
                            >
                              <FaCheck className="cpr text-base" />
                              <p className="text-md crd">{software}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h2 className="outfit-semibold csd text-2xl md:text-3xl">
                          Open Job Positions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border border-gray-300 rounded-lg p-6">
                          {course?.jobPositions.map((job, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-1.5"
                            >
                              <div className="w-3 h-3 rounded-full bg-[#F79952]"></div>
                              <p className="crd text-md">{job}</p>
                            </div>
                          ))}
                        </div>
                      </div>
           
                    </div>
                  </div>
                </div>








                {/* Instructor Section */}
                <div className="space-y-4">
                  <h2 className="outfit-semibold csd text-2xl md:text-3xl">
                    Instructor
                  </h2>
                  <div className="flex items-center gap-6 rounded-lg">
                    <div className="size-26 rounded-full overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={course?.instructorImg}
                        alt={course?.instructorName}
                      />
                    </div>
                    <div className="space-y-1 outfit-semibold crd">
                      <h5 className="text-lg md:text-xl">
                        {course?.instructorName}
                      </h5>
                      <p className="text-base md:text-lg">
                        {course?.instructorEmail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular Courses Sidebar */}
              <div className="w-full lg:w-1/3 lg:sticky lg:top-25 lg:self-start ">
                <div className="space-y-6">
                  <h3 className="text-[#f81515] text-2xl md:text-5xl outfit-semibold text-center">
                    Popular <span className="crd">Courses</span>
                  </h3>
                  <div className="flex flex-wrap justify-center gap-6">
                    {populerCourse?.slice(0, 2).map((item) => (
                      <div
                        key={item.id}
                        className="relative w-[380px] h-[430px] bg-transparent cursor-pointer transition-transform duration-700 ease-in-out hover:scale-[1.03] hover:shadow-xl group perspective rounded-xl"
                      >
                        <div className="rounded-md border border-gray-200 bg-white p-2 text-gray-800 overflow-hidden transition-all duration-700 ease-in-out">
                          <div className="relative h-52 w-full overflow-hidden rounded-xl">
                            <img
                              src={item.image}
                              alt="thumbnail"
                              className="h-full w-full rounded-xl object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105"
                            />
                          </div>
                          <div className="mt-5 space-y-1 text-left pl-4">
                            <div className="flex justify-between pr-8">
                              <div className="flex items-center gap-1">
                                <BiCategory />
                                <p className="text-[13px] work">
                                  {item.category}
                                </p>
                              </div>
                              <p className="bg-[#F79952] text-white text-[13px] px-2 py-1 work rounded-[4px]">
                                {item.type}
                              </p>
                            </div>
                            <h2 className="text-[22px] font-bold w-10/12 h-17 outfit-semibold csd">
                              {item.title}
                            </h2>
                            <div className="flex justify-between pr-8 items-center">
                              <p className="text-lg font-semibold text-gray-800 work">
                                Course Fee {item.fee}
                              </p>
                              <div className="rating text-sm">
                                {[...Array(5)].map((_, i) => (
                                  <input
                                    key={i}
                                    type="radio"
                                    name={`rating-${item.id}`}
                                    className="mask mask-star-2 bg-orange-400 w-5"
                                    aria-label={`${i + 1} star`}
                                    defaultChecked={
                                      i + 1 === Math.round(item.rating)
                                    }
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-2 pl-4 mb-2">
                            <Link
                              to={`/courses/${item.id}`}
                              className="flex gap-2 text-xl items-center border bg-[#41bfb8] border-[#41bfb8] px-4 py-2 rounded-md"
                            >
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
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCourse;
