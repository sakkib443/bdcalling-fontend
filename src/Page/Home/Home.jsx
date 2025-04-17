import React from 'react';
import Hero from './HomeComponents/Hero';
import HomeCategory from './HomeComponents/HomeCategory';
import PopularCourse from './HomeComponents/PopularCourse';
import bgImage from '../../assets/img/bgg.png'; // ✅ import the image
import bgImage2 from '../../assets/img/bg1.png'; // ✅ import the image

import SeminarAndEvent from './HomeComponents/seminarAndEvent';
import SuccesHistory from './HomeComponents/SuccesHistory';
import WhatWeProvide from './HomeComponents/WhatWeProvide';
import Employe from './HomeComponents/Employe';
import Concerns from './HomeComponents/Concerns';

const Home = () => {
    return (
        <div>
            <div
                className="h-[calc(100vh-13rem)] py-24 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }} // ✅
            >
                <Hero />
            </div>
            <HomeCategory />
            <div className="  bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage2})` }} >
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
