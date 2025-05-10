import React, { useEffect, useState } from 'react';
import MentorCard from './MentorCard';

const Mentor = () => {
    const [mentors, setMentor] = useState([])
    useEffect(() => {
        fetch('Mentors.json')
            .then(res => res.json())
            .then(data => setMentor(data))
    }, [])
    return (
        <div>
            <div className="w-full mt-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2  gap-y-4 px-4">
                    {
                        mentors.map((mentor, index) => (
                            <MentorCard key={index} mentor={mentor} />
                        ))
                    }
                </div>
            </div>


        </div>
    );
};

export default Mentor;