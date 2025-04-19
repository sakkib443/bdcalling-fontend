import React from "react";
import Hero from "./HomeComponents/Hero";
import HomeCategory from "./HomeComponents/HomeCategory";
import PopularCourse from "./HomeComponents/PopularCourse";
import bgImage from "../../assets/img/bgg.png";
import bgImage2 from "../../assets/img/bg1.png";

import SeminarAndEvent from "./HomeComponents/seminarAndEvent";
import SuccesHistory from "./HomeComponents/SuccesHistory";
import WhatWeProvide from "./HomeComponents/WhatWeProvide";
import Employe from "./HomeComponents/Employe";
import Concerns from "./HomeComponents/Concerns";

const Home = () => {
  return (
    <div>
      <div
        className="min-h-[calc(100vh-26rem)] py-12 md:py-16 lg:py-16 bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex items-center 2xl:py-14">
          <Hero />
        </div>
      </div>
      <HomeCategory />
      <div
        className="  bg-cover md:w-10/12 mx-auto rounded-2xl "
        style={{ backgroundImage: `url(${bgImage2})` }}
      >
        <PopularCourse />
      </div>
      <Concerns></Concerns>
      <SeminarAndEvent></SeminarAndEvent>
      <SuccesHistory></SuccesHistory>
      <WhatWeProvide></WhatWeProvide>
      <div>
        <Employe></Employe>
      </div>
    </div>
  );
};

export default Home;
