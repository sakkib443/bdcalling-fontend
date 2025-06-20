
import AboutHero from './AboutComponents/AboutHero';
import Count from './AboutComponents/Count';
import Mission from './AboutComponents/Mission';
import AboutGallery from './AboutComponents/AboutGallery';
import Value from './AboutComponents/Value';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';



const About = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // top-left corner
    }, [pathname]);
    return (
        <div>
            <div>
                <div

                    className="animated-bg fixed z-50 left-0 top-7/12 -translate-y-1/2 text-white px-6 py-2 rounded-l-lg cursor-pointer shadow-2xl "
                    style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
                >
                    <Link to='/events'>
                        <h3 className=" outfit-semibold uppercase">Join Seminar</h3>
                    </Link>
                </div>
            </div>
            <AboutHero></AboutHero>
            <Count></Count>
            <Mission></Mission>
            <Value></Value>
            <AboutGallery></AboutGallery>
        </div>
    );
};

export default About;