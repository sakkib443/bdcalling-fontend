import React from "react";
import Hero from "./HomeComponents/Hero";
import HomeCategory from "./HomeComponents/HomeCategory";
import PopularCourse from "./HomeComponents/PopularCourse";
import bgImage from "../../assets/img/bgg.png";
import bgImage2 from "../../assets/img/bg1.png";
import SuccesHistory from "./HomeComponents/SuccesHistory";
import WhatWeProvide from "./HomeComponents/WhatWeProvide";
import Employe from "./HomeComponents/Employe";
import Concerns from "./HomeComponents/Concerns";
import SeminarAndEvent from "./HomeComponents/SeminarAndEvent";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import img from "../../assets/img/onesection.png"

const Home = () => {
  // WhatsApp message and number
  const handleWhatsAppClick = () => {
    const phoneNumber = "01321231802"; // BDCalling Academy WhatsApp number
    const message = "আমি bdcalling academy te course korte cai"; // pre-filled message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="">

      {/* WhatsApp Button */}
      <div
        onClick={handleWhatsAppClick}
        style={{
          position: 'fixed',
          zIndex: "20",
          bottom: '20px',
          right: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: "transparent",
          padding: '8px 12px',
          borderRadius: '30px',
          cursor: 'pointer',
        }}
      >
        <div>
          <DotLottieReact
            className="w-[150px]"
            src="https://lottie.host/dbe74e91-d4cb-46b7-9219-54c29432d806/nBBwAAbPFi.lottie"
            loop
            autoplay
          />
        </div>
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
        className="min-h-[calc(100vh-26rem)] py-12 md:py-16 lg:py-16 bg-cover bg-center bg-no-repeat w-full relative"
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
      <Employe />
    </div>
  );
};

export default Home;
