import React from 'react';

const SectionHeading = ({ title, discription }) => {
    return (
        <div className='w-8/12 mx-auto'>
            <h1 className='text-center csd text-6xl font-semibold outfit-semibold work '>{title}</h1>
            <p className='text-center crd work  mt-4 '>{discription}</p>

        </div>
    );
};

export default SectionHeading;