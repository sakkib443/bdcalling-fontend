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
            "At Bdcalling Academy, we provide diverse courses tailored to fit the demands of today’s job market. Whether you’re just starting and eager to dive into a new field or a seasoned professional looking to enhance your skills, we have the perfect course for you. "
          }
        ></SectionHeading>
        <PopularCourseCard></PopularCourseCard>
      </div>
    </div>
  );
};

export default PopularCourse;
