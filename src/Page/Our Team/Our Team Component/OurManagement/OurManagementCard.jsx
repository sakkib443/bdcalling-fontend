import React from 'react';

const OurManagementCard = ({ management }) => {
    return (
        <div>
            <div className="work">
                <div className="border border-gray-300  p-3 rounded-2xl">
                    <div className='flex items-center gap-8'>
                        <div className="flex items-center gap-5 h-44 rounded-md w-44 overflow-hidden  border border-gray-300">
                            <img className=' ' src={management.image} alt="" />
                        </div>
                        <div>
                            <h1 className='outfit text-3xl'>{management.name}</h1>
                            <p className='outfit-semibold text-lg'>{management.designation}</p>
                            <p>14 Years of Experence</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurManagementCard;