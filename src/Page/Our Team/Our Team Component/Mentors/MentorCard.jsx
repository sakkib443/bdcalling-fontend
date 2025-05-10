import React from 'react';

const MentorCard = ({ mentor }) => {
    return (
        <div className="max-w-3xl mx-auto">
            <div className="bg-[#E1FCF9] cursor-pointer hover:shadow-2xl 2xl:w-[550px] container transition-shadow duration-300 border border-gray-200 rounded-md overflow-hidden p-6">
                <div className="flex items-center gap-6">
                    <div className="w-36 h-36 rounded-full overflow-hidden shadow-md">
                        <img
                            src={mentor.image}
                            alt={mentor.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 outfit">{mentor.name}</h2>
                        <p className="csd text-lg font-semibold">{mentor.designation}</p>
                        <p className="text-gray-700 work">{mentor.subject}</p>
                        <p className="text-sm text-gray-500 mt-2 work">✅ 14+ Years of Training Experience</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentorCard;
