
import AboutHero from './AboutComponents/AboutHero';
import Count from './AboutComponents/Count';
import Mission from './AboutComponents/Mission';
import Category from './AboutComponents/Category';
import AboutGallery from './AboutComponents/AboutGallery';
import Value from './AboutComponents/Value';



const About = () => {
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