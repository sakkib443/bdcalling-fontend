import React from 'react';
import Hero from './HomeComponents/Hero';
import HomeCategory from './HomeComponents/HomeCategory';
import PopularCourse from './HomeComponents/PopularCourse';
import bgImage from '../../assets/img/bgg.png'; // ✅ import the image

const Home = () => {
    return (
        <div>
            <div
                className="h-[calc(100vh-12rem)] py-24 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }} // ✅
            >
                <Hero />
            </div>
            <HomeCategory />
            <PopularCourse />
        </div>
    );
};

export default Home;
