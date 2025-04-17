import React from 'react';
import AboutHero from './AboutComponents/AboutHero';
import Count from './AboutComponents/Count';
import Partner from './AboutComponents/Partner';
import Mission from './AboutComponents/Mission';
import Vision from './AboutComponents/Vision';
import Category from './AboutComponents/Category';
import Mentors from './AboutComponents/Mentors';
import AboutGallery from './AboutComponents/AboutGallery';
import Employe from '../Home/HomeComponents/Employe';


const About = () => {
    return (
        <div>
             <AboutHero></AboutHero>
            <Count></Count>
            <Partner></Partner>
            <Mission></Mission>
            <Vision></Vision>
            <Category></Category>
            <Employe></Employe>
            {/* <Mentors></Mentors> */}
            <AboutGallery></AboutGallery>
        </div>
    );
};

export default About;