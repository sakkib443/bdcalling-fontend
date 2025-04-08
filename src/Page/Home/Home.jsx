
import React from 'react';
import Hero from './HomeComponents/Hero';
import HomeCategory from './HomeComponents/HomeCategory';

const Home = () => {
    return (
        <div>
            <div className="  h-[calc(100vh-12rem)] py-24 bg-[url('../../../../public/Untitled-1.jpg')] bg-cover" >
                <Hero></Hero>
            </div>
            <HomeCategory></HomeCategory>
        </div>
    );
};

export default Home;