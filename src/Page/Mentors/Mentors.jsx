import React, { useEffect } from 'react';
import MentorHeader from './MentorsComponents/MentorHeader';
import MentorsSection from './MentorsComponents/MentorsSection';
import { useLocation } from 'react-router-dom';

const Mentors = () => {
     const { pathname } = useLocation();
     useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    
    return (
        <div className='pt-12 pb-12 mb-12 bg-[#ECFCFB]'>
            <MentorHeader></MentorHeader>
            <MentorsSection></MentorsSection>
        </div>
    );
};

export default Mentors;