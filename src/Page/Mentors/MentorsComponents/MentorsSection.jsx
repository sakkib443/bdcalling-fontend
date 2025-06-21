import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MentorsSection = () => {
  const [mentors, setMentor] = useState([]);
  useEffect(() => {
    fetch("Mentors.json")
      .then((res) => res.json())
      .then((data) => setMentor(data));
  }, []);

  return (
    <div>
      <div className="w-full mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-4 px-4">
          {mentors.map((mentor, index) => (
            <div key={index}>
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
                      <h2 className="text-2xl font-bold text-gray-800 outfit">
                        {mentor.name}
                      </h2>
                      <p className="csd text-lg font-semibold">
                        {mentor.designation}
                      </p>
                      <p className="text-gray-700 work">{mentor.subject}</p>
                      <p className="text-sm text-gray-500 mt-2 work">
                        ✅ 14+ Years of Training Experience
                      </p>

                      <Link to={`/mentors/${mentor.id}`}>
                        <button className="mt-4 bg-[#00C6AD] text-white px-4 py-2 rounded hover:bg-[#009f8a] transition cursor-pointer">
                          View Profile
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorsSection;
