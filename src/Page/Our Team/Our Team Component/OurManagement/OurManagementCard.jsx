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
                            <p>{management.designation}</p>
                        </div>
                    </div>
                    {/* <div className="grid grid-cols-2 gap-7 mt-5 border-b border-gray-300 pb-4">
                        <div className="">
                            <h4 className="text-xl font-semibold mb-2">Specialized Area</h4>
                            <ul className="list-disc list-inside space-y-1">
                                {
                                    (management.specialized_area).map(sa => (
                                        <li>{sa}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="">
                            <h4 className="text-xl font-semibold mb-2">Education Qualification</h4>
                            <ul className="list-disc list-inside space-y-1">
                                {
                                    (management.education_qualification).map(eq => (
                                        <li>{eq}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="">
                            <h4 className="text-xl font-semibold mb-2">Work Experience</h4>
                            <ul className="list-disc list-inside space-y-1">
                                {
                                    (management.work_experience).map(we => (
                                        <li>{we}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div>
                            <h4 className="text-lg font-semibold">Training Experience</h4>
                            <p className="text-gray-700">{management.training_experience.years} years +</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">Students</h4>
                            <p className="text-gray-700">{management.training_experience.students} +</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default OurManagementCard;