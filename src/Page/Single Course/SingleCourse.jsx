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
  const [activeTab, setActiveTab] = useState("overview");
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
          <div className="space-y-6 md:space-y-6">
            <div className="py-10 md:py-16 lg:py-20 border-b border-gray-300">
              <div className="container mx-auto px-4 md:px-24">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-6">
                  <div className="space-y-2 w-full lg:w-1/2">
                    <p className="text-xl outfit-semibold crd">
                      Introducing to our
                    </p>
                    <h1 className="crd font-bold mb-4 outfit text-3xl xl:text-5xl">
                      {course?.title}
                    </h1>
                    <div className="flex flex-wrap gap-3">
                      <div className="py-2 px-12 border border-gray-200 rounded-md text-center">
                        <p className="crd outfit font-bold text-lg lg:text-md">
                          {course?.duration} Month
                        </p>
                        <p className="crd text-base work lg:text-md">
                          Duration
                        </p>
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
                        <p className="crd text-base lg:text-md work">
                          Projects
                        </p>
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

            {/* Tab Navigation */}

            <div className="flex flex-col lg:flex-row gap-10 container mx-auto px-4 md:px-24 ">
              <div className="space-y-6 w-full lg:w-2/3 border border-gray-100 px-8 py-8 shadow-sm rounded-md bg-[#E1FCF9]">
                <div className="">
                  <div className="flex gap-4  rounded-md border-gray-300  py-3 px-4">
                    <button
                      className={`px-5 py-2.5 rounded-md transition-all border border-gray-300  shadow-none duration-300 cursor-pointer ${activeTab === "overview"
                        ? "bg-[#43c3bc] text-white shadow-none border-[#43c3bc]"
                        : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
                        }`}
                      onClick={() => setActiveTab("overview")}
                    >
                      Overview
                    </button>
                    <button
                      className={`px-5 py-2.5 rounded-lg font-medium shadow-none border border-gray-300 text-sm transition-all duration-300 ease-in-out cursor-pointer ${activeTab === "curriculum"
                        ? "bg-[#43c3bc] text-white shadow-none border-[#43c3bc]"
                        : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
                        }`}
                      onClick={() => setActiveTab("curriculum")}
                    >
                      Curriculum
                    </button>

                    <button
                      className={`px-5 py-2.5 rounded-md shadow-none border border-gray-300 transition-all duration-300 cursor-pointer ${activeTab === "instructor"
                        ? "bg-[#43c3bc] text-white shadow-none border-[#43c3bc]"
                        : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
                        }`}
                      onClick={() => setActiveTab("instructor")}
                    >
                      Instructor
                    </button>
                  </div>
                </div>

                {/* Overview Tab Content */}
                {activeTab === "overview" && (
                  <div className="">
                    <div>
                      <h2 className="outfit-semibold text-2xl md:text-5xl">
                        Course <span className="csd">Overview</span>
                      </h2>
                      <p className="crd  lg:text-md work leading-8 mt-4">
                        {course?.details}
                      </p>
                    </div>

                    <div className="space-y-4 mt-12">
                      <h2 className="outfit-semibold text-2xl md:text-5xl">
                        This course<span className="csd"> Includes</span>
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {course?.courseIncludes.map((item, index) => (
                          <div
                            key={index}
                            className=" flex gap-2 items-top border items-center border-gray-200 p-2 rounded-md work"
                          >
                            {React.cloneElement(iconMap[item.icon], {
                              className: "text-gray-400  text-xl",
                            })}
                            <p className="text-md work ">{item.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Curriculum Tab Content */}
                {activeTab === "curriculum" && (
                  <div className="space-y-10">
                    <h2 className="outfit-semibold text-2xl md:text-5xl">
                      What <span className="csd">You'll Learn</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course?.curriculum.map((item, index) => (
                        <div
                          key={index}
                          className="flex gap-1.5 items-top border border-gray-200 p-2 rounded-md work"
                        >
                          <BsArrowRightCircle className="text-gray-400 mt-2 text-base " />
                          <p className="text-md crd">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="my-6 md:my-10 space-y-4">
                      <h2 className="outfit-semibold text-2xl md:text-5xl">
                        Software<span className="csd"> You'll Learn</span>
                      </h2>
                      <div className="border border-gray-300 rounded-lg p-6 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {course?.softwareYoullLearn.map((software, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-1.5"
                            >
                              <BsArrowRightCircle className="text-gray-400  text-base " />
                              <p className="text-md crd">{software}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h2 className="outfit-semibold text-2xl md:text-5xl">
                        Open<span className="csd"> Job Positions</span>
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border border-gray-300 rounded-lg p-6">
                        {course?.jobPositions.map((job, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-1.5"
                          >
                            <BsArrowRightCircle className="text-gray-400 text-base " />
                            <p className="crd text-md">{job}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Instructor Tab Content */}
                {/* {activeTab === "instructor" && (
                  <div className="space-y-4">
                    <h2 className="outfit-semibold text-2xl md:text-5xl">
                      <span className="cpr">Instructor</span>
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
                          {course?.instructorEmail ||
                            "Expert Photography Instructor"}
                        </p>
                        <div className="flex items-center gap-2 mt-3">
                          <div className="flex">{renderStars(4.9)}</div>
                          <span className="text-gray-600">
                            ({course?.instructorReviews} Reviews)
                          </span>
                          <span className="text-gray-600 hidden md:block">
                            ({course?.instructorExperience} Experience)
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 outfit-semibold block md:hidden crd">
                      ({course?.instructorExperience} Experience)
                    </p>
                    <p className="text-gray-600 text-base md:text-lg font-medium">
                      {course?.instructorBio ||
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                    </p>
                  </div>
                )} */}
              </div>

              {/* Popular Courses Sidebar */}
              <div className="w-full lg:w-1/3 lg:sticky lg:top-25 lg:self-start ">
                <div className="space-y-6">
                  <h3 className="cpr text-2xl md:text-5xl outfit-semibold text-center">
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
                            <h2 className="text-[22px] font-bold w-10/12 h-17 outfit-semibold csd line-clamp-2">
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
