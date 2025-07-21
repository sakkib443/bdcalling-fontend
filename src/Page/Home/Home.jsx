import React, { useEffect } from "react";
import Hero from "./HomeComponents/Hero";
import HomeCategory from "./HomeComponents/HomeCategory";
import PopularCourse from "./HomeComponents/PopularCourse";
import bgImage from "../../assets/img/bgg.png";
import bgImage2 from "../../assets/img/bg1.png";
import SuccesHistory from "./HomeComponents/SuccesHistory";
import WhatWeProvide from "./HomeComponents/WhatWeProvide";
import Concerns from "./HomeComponents/Concerns";
import SeminarAndEvent from "./HomeComponents/SeminarAndEvent";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from "react-router-dom";


const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="relative">
      <div

        className="animated-bg fixed z-50 left-0 top-7/12 -translate-y-1/2 text-white px-6 py-2 rounded-l-lg cursor-pointer shadow-2xl "
        style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
      >
        <Link to='/events'>
          <h3 className=" outfit-semibold uppercase">Join Seminar</h3>
        </Link>
      </div>
      

      {/* Inline animation */}
      <style>
        {`
          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-2px); }
            50% { transform: translateX(2px); }
            75% { transform: translateX(-2px); }
            100% { transform: translateX(0); }
          }
        `}
      </style>

      {/* Hero Section */}
      <div
        className="max-h-[calc(100vh-8rem)] py-12 md:py-16 lg:py-24 bg-cover bg-center bg-no-repeat w-full relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex items-center 2xl:py-14">
          <DotLottieReact
            className="absolute w-[450px] -bottom-5 -z-10 right-0"
            src="https://lottie.host/e8635977-030c-4254-88ae-e848cc27ecde/Ba86pVa1cR.lottie"
            loop
            autoplay
          />
          <Hero />
        </div>
      </div>

      {/* Other Sections */}
      <HomeCategory />
      <div
        className=" container mx-auto rounded-2xl mb-20 bg-cover"
        style={{ backgroundImage: `url(${bgImage2})` }}
      >
        <PopularCourse />
      </div>
      <SeminarAndEvent />
      <WhatWeProvide />
      <Concerns />
      <SuccesHistory />
      {/* <Employe /> */}
    </div>
  );
};

export default Home;
