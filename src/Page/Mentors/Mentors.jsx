import React from 'react';
import MentorHeader from './MentorsComponents/MentorHeader';
import MentorsSection from './MentorsComponents/MentorsSection';

const Mentors = () => {
    return (
        <div className='pt-12 pb-12 mb-12 bg-[#ECFCFB]'>
            <MentorHeader></MentorHeader>
            <MentorsSection></MentorsSection>
        </div>
    );
};

export default Mentors;