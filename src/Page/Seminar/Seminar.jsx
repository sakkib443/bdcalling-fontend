import React from 'react';
import SeminarHero from './SemnarComponents/SeminarHero';
import { Link } from 'react-router-dom';

const Seminar = () => {
    return (
        <div>
            <div

                className="animated-bg fixed z-50 left-0 top-7/12 -translate-y-1/2 text-white px-6 py-2 rounded-l-lg cursor-pointer shadow-2xl "
                style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
            >
                <Link to='/events'>
                    <h3 className=" outfit-semibold uppercase">Join Seminar</h3>
                </Link>
            </div>
            <SeminarHero></SeminarHero>
        </div>
    );
};

export default Seminar;