import React from "react";

import PopularCourseCard from "./PopularCourseCard";
import SectionHeading from "../../../Components/Shared/SectionHeading";

const PopularCourse = () => {
  return (
    <div className="">
      <div className=" py-16 w-11/12 mx-auto rounded-2xl">
        <SectionHeading
          title={"Popular Courses"}
          description={
            "At Bdcalling Academy, we offer a wide range of courses designed to meet the demands of today’s job market. Whether you're starting your career journey or a seasoned professional seeking to sharpen your skills, you'll find the perfect course with us."
          }
        ></SectionHeading>
        <PopularCourseCard></PopularCourseCard>
      </div>
    </div>
  );
};

export default PopularCourse;
