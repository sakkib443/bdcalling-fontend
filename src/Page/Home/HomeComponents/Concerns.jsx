import { useState } from "react";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeading from "../../../Components/Shared/SectionHeading";
import bgImage from "../../../assets/img/bg1.png";

import OurConcernimg1 from "../../../assets/img/Our Working Partner Images/Our Concerns all images/1_softvence.png";
import OurConcernimg2 from "../../../assets/img/Our Working Partner Images/Our Concerns all images/2_sm_technology.png";
import OurConcernimg3 from "../../../assets/img/Our Working Partner Images/Our Concerns all images/3_backbencher_studio.png";
import OurConcernimg4 from "../../../assets/img/Our Working Partner Images/Our Concerns all images/4_sparktech.png";
import OurConcernimg5 from "../../../assets/img/Our Working Partner Images/Our Concerns all images/5_scaleup.png";
import OurConcernimg6 from "../../../assets/img/Our Working Partner Images/Our Concerns all images/6_Data-insight.png";
import OurConcernimg7 from "../../../assets/img/Our Working Partner Images/Our Concerns all images/1738666687308.jpeg";
import OurConcernimg8 from "../../../assets/img/Our Working Partner Images/Our Concerns all images/zenex.png";
import OurConcernimg9 from "../../../assets/img/Our Working Partner Images/Our Concerns all images/bdcalling.png";

import ColaborationWithimg1 from "../../../assets/img/Our Working Partner Images/Working with all images/1_bteb.png";
import ColaborationWithimg2 from "../../../assets/img/Our Working Partner Images/Working with all images/2_ict.png";
import ColaborationWithimg3 from "../../../assets/img/Our Working Partner Images/Working with all images/3_iitu.png";
import ColaborationWithimg4 from "../../../assets/img/Our Working Partner Images/Working with all images/4_edge.png";
import ColaborationWithimg5 from "../../../assets/img/Our Working Partner Images/Working with all images/5_nsda.png";
import ColaborationWithimg6 from "../../../assets/img/Our Working Partner Images/Working with all images/6_dhaka_university.jpg";
import ColaborationWithimg7 from "../../../assets/img/Our Working Partner Images/Working with all images/7_crown_institute_of_business_and_technology.jpg";
import ColaborationWithimg8 from "../../../assets/img/Our Working Partner Images/Working with all images/8_eastern_eniversity.png";
import ColaborationWithimg9 from "../../../assets/img/Our Working Partner Images/Working with all images/9_jagannath_university.png";
import ColaborationWithimg10 from "../../../assets/img/Our Working Partner Images/Working with all images/10_dhaka_college.png";
import ColaborationWithimg11 from "../../../assets/img/Our Working Partner Images/Working with all images/11_united_international_university.png";
import ColaborationWithimg12 from "../../../assets/img/Our Working Partner Images/Working with all images/12_metropolitan_university.png";
import ColaborationWithimg13 from "../../../assets/img/Our Working Partner Images/Working with all images/13_north_south_university.png";
import ColaborationWithimg14 from "../../../assets/img/Our Working Partner Images/Working with all images/14_east_west_university.png";
import ColaborationWithimg15 from "../../../assets/img/Our Working Partner Images/Working with all images/15_smuct.png";
import ColaborationWithimg16 from "../../../assets/img/Our Working Partner Images/Working with all images/16_bracu.png";
import ColaborationWithimg17 from "../../../assets/img/Our Working Partner Images/Working with all images/17_polytechnic.png";
import ColaborationWithimg18 from "../../../assets/img/Our Working Partner Images/Working with all images/18_polytechnic.png";
import ColaborationWithimg19 from "../../../assets/img/Our Working Partner Images/Working with all images/19_polytechnic.jpg";
import ColaborationWithimg20 from "../../../assets/img/Our Working Partner Images/Working with all images/20_polytechnic.jpg";
import ColaborationWithimg21 from "../../../assets/img/Our Working Partner Images/Working with all images/21_polytechnic.png";
import ColaborationWithimg22 from "../../../assets/img/Our Working Partner Images/Working with all images/22_polytechnic.jpg";
import ColaborationWithimg23 from "../../../assets/img/Our Working Partner Images/Working with all images/23_polytechnic.png";
import ColaborationWithimg24 from "../../../assets/img/Our Working Partner Images/Working with all images/24_polytechnic.png";
import ColaborationWithimg25 from "../../../assets/img/Our Working Partner Images/Working with all images/25_polytechnic.png";
import ColaborationWithimg26 from "../../../assets/img/Our Working Partner Images/Working with all images/26_polytechnic.png";
import ColaborationWithimg27 from "../../../assets/img/Our Working Partner Images/Working with all images/27_polytechnic.jpg";
import ColaborationWithimg28 from "../../../assets/img/Our Working Partner Images/Working with all images/28_polytechnic.png";
import ColaborationWithimg29 from "../../../assets/img/Our Working Partner Images/Working with all images/29_polytechnic.png";
import ColaborationWithimg30 from "../../../assets/img/Our Working Partner Images/Working with all images/30_polytechnic.png";
import ColaborationWithimg31 from "../../../assets/img/Our Working Partner Images/Working with all images/31_polytechnic.jpg";
import ColaborationWithimg32 from "../../../assets/img/Our Working Partner Images/Working with all images/32_polytechnic.png";
import ColaborationWithimg33 from "../../../assets/img/Our Working Partner Images/Working with all images/33_polytechnic.jpg";
import ColaborationWithimg34 from "../../../assets/img/Our Working Partner Images/Working with all images/34_polytechnic.png";
import ColaborationWithimg35 from "../../../assets/img/Our Working Partner Images/Working with all images/35_polytechnic.jpg";
import ColaborationWithimg36 from "../../../assets/img/Our Working Partner Images/Working with all images/36_polytechnic.jpg";
import ColaborationWithimg37 from "../../../assets/img/Our Working Partner Images/Working with all images/37_polytechnic.png";
import ColaborationWithimg38 from "../../../assets/img/Our Working Partner Images/Working with all images/38_polytechnic.png";

import MemberOfimg1 from "../../../assets/img/Our Working Partner Images/Members of all images/1_basis.png";
import MemberOfimg2 from "../../../assets/img/Our Working Partner Images/Members of all images/2_bangladesh_computer_samity.png";

const Concerns = () => {
  const images = [
    // Our Concerns
    {
      id: 1,
      category: "Our Concern",
      src: OurConcernimg1,
      link: "https://softvence.agency/",
    },
    {
      id: 2,
      category: "Our Concern",
      src: OurConcernimg2,
      link: "https://smtech24.com/",
    },
    {
      id: 3,
      category: "Our Concern",
      src: OurConcernimg3,
      link: "https://backbencher.studio/",
    },
    {
      id: 4,
      category: "Our Concern",
      src: OurConcernimg4,
      link: "https://www.sparktech.agency/",
    },
    {
      id: 5,
      category: "Our Concern",
      src: OurConcernimg5,
      link: "https://scaleupadsagency.com/",
    },
    {
      id: 6,
      category: "Our Concern",
      src: OurConcernimg6,
      link: "https://www.facebook.com/profile.php?id=61568359432521",
    },
    {
      id: 7,
      category: "Our Concern",
      src: OurConcernimg7,
      link: "https://www.joinventureai.com/", // যদি এইটির লিংক এখনো না থাকে
    },
    {
      id: 8,
      category: "Our Concern",
      src: OurConcernimg8,
      link: "https://zenexcloud.com/",
    },
    {
      id: 9,
      category: "Our Concern",
      src: OurConcernimg9,
      link: "https://bdcalling.com/",
    },
    // Collaborations With
    { id: 7, category: "Colaboration With", src: ColaborationWithimg1 },
    { id: 8, category: "Colaboration With", src: ColaborationWithimg2 },
    { id: 9, category: "Colaboration With", src: ColaborationWithimg3 },
    { id: 10, category: "Colaboration With", src: ColaborationWithimg4 },
    { id: 11, category: "Colaboration With", src: ColaborationWithimg5 },
    { id: 12, category: "Colaboration With", src: ColaborationWithimg6 },
    { id: 13, category: "Colaboration With", src: ColaborationWithimg7 },
    { id: 14, category: "Colaboration With", src: ColaborationWithimg8 },
    { id: 15, category: "Colaboration With", src: ColaborationWithimg9 },
    { id: 16, category: "Colaboration With", src: ColaborationWithimg10 },
    { id: 17, category: "Colaboration With", src: ColaborationWithimg11 },
    { id: 18, category: "Colaboration With", src: ColaborationWithimg12 },
    { id: 19, category: "Colaboration With", src: ColaborationWithimg13 },
    { id: 20, category: "Colaboration With", src: ColaborationWithimg14 },
    { id: 21, category: "Colaboration With", src: ColaborationWithimg15 },
    { id: 22, category: "Colaboration With", src: ColaborationWithimg16 },
    { id: 23, category: "Colaboration With", src: ColaborationWithimg17 },
    { id: 24, category: "Colaboration With", src: ColaborationWithimg18 },
    { id: 25, category: "Colaboration With", src: ColaborationWithimg19 },
    { id: 26, category: "Colaboration With", src: ColaborationWithimg20 },
    { id: 27, category: "Colaboration With", src: ColaborationWithimg21 },
    { id: 28, category: "Colaboration With", src: ColaborationWithimg22 },
    { id: 29, category: "Colaboration With", src: ColaborationWithimg23 },
    { id: 30, category: "Colaboration With", src: ColaborationWithimg24 },
    { id: 31, category: "Colaboration With", src: ColaborationWithimg25 },
    { id: 32, category: "Colaboration With", src: ColaborationWithimg26 },
    { id: 33, category: "Colaboration With", src: ColaborationWithimg27 },
    { id: 34, category: "Colaboration With", src: ColaborationWithimg28 },
    { id: 35, category: "Colaboration With", src: ColaborationWithimg29 },
    { id: 36, category: "Colaboration With", src: ColaborationWithimg30 },
    { id: 37, category: "Colaboration With", src: ColaborationWithimg31 },
    { id: 38, category: "Colaboration With", src: ColaborationWithimg32 },
    { id: 39, category: "Colaboration With", src: ColaborationWithimg33 },
    { id: 40, category: "Colaboration With", src: ColaborationWithimg34 },
    { id: 41, category: "Colaboration With", src: ColaborationWithimg35 },
    { id: 42, category: "Colaboration With", src: ColaborationWithimg36 },
    { id: 43, category: "Colaboration With", src: ColaborationWithimg37 },
    { id: 44, category: "Colaboration With", src: ColaborationWithimg38 },

    // Members Of
    { id: 45, category: "Member Of", src: MemberOfimg1 },
    { id: 46, category: "Member Of", src: MemberOfimg2 },
  ];



  const [selectedCategory, setSelectedCategory] = useState("Our Concern");

  const filteredImages = images.filter(
    (image) => image.category === selectedCategory
  );

  return (
    <>
      <div>
        <div className="bg-white py-12 md:py-12 relative">
          <div
            className="relative w-11/12 lg:w-10/12 border border-gray-200 bg-cover mx-auto py-12 px-6 rounded-2xl"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            {/* Background Overlay */}
            <div
              className="absolute inset-0 rounded-2xl bg-cover bg-center opacity-10"
              style={{
                backgroundImage: `url('https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/491185347_1085730833599336_6679927905642902823_n.jpg?...')`,
              }}
            ></div>

            {/* Foreground Content */}
            <div className="relative z-10">
              <SectionHeading title={"Our Working Partner"} />
              <div className="flex flex-wrap justify-center gap-3 work pl-6 pb-8 pr-6 mt-12">
                {["Our Concern", "Colaboration With", "Member Of"].map(
                  (cat, idx) => (
                    <label
                      key={idx}
                      className="fieldset-label dark:text-gray-600"
                    >
                      <p
                        onClick={() => setSelectedCategory(cat)}
                        className={`fieldset-label btn rounded-md cursor-pointer shadow-2xl transition dark:border-gray-300 dark:shadow-none ${selectedCategory === cat
                          ? "bg-[#41bfb8] text-white"
                          : "bg-[#ecfcfb] dark:text-gray-500"
                          }`}
                      >
                        {cat}
                      </p>
                    </label>
                  )
                )}
              </div>

              {/* All Images (no pagination) */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                <div className="w-full lg:w-3/4 relative">
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6 gap-2">
                    {filteredImages.length > 0 ? (
                      filteredImages.map((image, index) => (
                        <motion.div
                          key={image.id}
                          className="flex items-center justify-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                          <a href={image.link} target="_blank">
                            <div className="lg:w-44 lg:h-36 w-24 h-18 flex justify-center items-center object-cover p-4 shadow-sm border-gray-200 bg-white rounded-xl">

                              <img
                                src={image.src}
                                alt={`Image ${image.id}`}
                                className="w-20"
                              />

                            </div>
                          </a>
                        </motion.div>
                      ))
                    ) : (
                      <p>No images to display. Select a category.</p>
                    )}
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

export default Concerns;
