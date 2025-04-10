
import React from 'react';
import Hero from './HomeComponents/Hero';
import HomeCategory from './HomeComponents/HomeCategory';
import PopularCourse from './HomeComponents/PopularCourse';

const Home = () => {
    return (
        <div>
            <div className="  h-[calc(100vh-12rem)] py-24 bg-[url('../../../../public/Untitled-2.png')] bg-cover" >
                <Hero></Hero>
            </div>
            <HomeCategory></HomeCategory>
            <PopularCourse></PopularCourse>
        </div>
    );
};

export default Home;