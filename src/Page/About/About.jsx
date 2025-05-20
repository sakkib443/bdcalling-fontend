
import AboutHero from './AboutComponents/AboutHero';
import Count from './AboutComponents/Count';
import Mission from './AboutComponents/Mission';
import AboutGallery from './AboutComponents/AboutGallery';
import Value from './AboutComponents/Value';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';



const About = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // top-left corner
    }, [pathname]);
    return (
        <div>
            <AboutHero></AboutHero>
            <Count></Count>
            <Mission></Mission>
            <Value></Value>
            <AboutGallery></AboutGallery>
        </div>
    );
};

export default About;