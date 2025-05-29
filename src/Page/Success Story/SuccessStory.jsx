import React, { useEffect, useState } from "react";
import SectionHeading from "../../Components/Shared/SectionHeading";

const SuccessHistory = () => {
  const [activeFilter, setActiveFilter] = useState("journey");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  // Video data for different categories
  const videoData = {
    journey: [
      { id: "2GqZBsRqaf0", title: "From Student to Professional - Sarah's Journey" },
      { id: "Gaeaaj4TsVQ", title: "Career Transformation - John's Success Story" },
      { id: "5RrnH4paPSg", title: "Learning to Earning - Maria's Experience" },
      { id: "0_FsHO7u5Pc", title: "Internship to Full-time - David's Progress" },
    ],
    feedback: [
      { id: "ymFUAUDfHIo", title: "Student Feedback - Course Experience" },
    ]
  };

  const activeVideos = videoData[activeFilter];
  
  // Define heading content based on active filter
  const headingContent = {
    journey: {
      title: "Success Stories",
      description: "Bdcalling Academy offers a variety of courses, and upon successful completion, we provide job opportunities within our company. Additionally, we offer scholarships in different categories to support aspiring individuals. Our training programs include hands-on experience with real client projects, ensuring a comprehensive and practical learning experience."
    },
    feedback: {
      title: "Student Feedback",
      description: "Embark on an inspiring learning journey with our students and witness the transformative power of education. Explore their incredible stories—how they overcame challenges, seized opportunities, and achieved remarkable success. Let their experiences ignite your passion for learning and motivate you to pursue your own dreams."
    }
  };

  return (
    <>
      <div className="lg:bg-white bg-[#ecfcfb] md:py-12">
        <div className="bg-[#ecfcfb] py-8 md:pt-12 w-11/12 md:w-10/12 mx-auto rounded-2xl">
          <div className="lg:px-12">
            {/* Dynamic SectionHeading based on active filter */}
            <SectionHeading
              title={headingContent[activeFilter].title}
              description={headingContent[activeFilter].description}
            ></SectionHeading>

            {/* Filter Buttons */}
            <div className="flex justify-center my-8 gap-4">
              <button
                onClick={() => setActiveFilter("journey")}
                className={`px-6 py-2 rounded-full font-semibold transition-all cursor-pointer ${
                  activeFilter === "journey"
                    ? "bg-[#0a98a0] text-white shadow-lg"
                    : "bg-[#67BDB9] hover:bg-[#0a98a0] text-white"
                }`}
              >
                Student Story
              </button>
              <button
                onClick={() => setActiveFilter("feedback")}
                className={`px-6 py-2 rounded-full font-semibold transition-all cursor-pointer ${
                  activeFilter === "feedback"
                    ? "bg-[#0a98a0] text-white shadow-lg"
                    : "bg-[#67BDB9] hover:bg-[#0a98a0] text-white"
                }`}
              >
                Student Feedback
              </button>
            </div>

            <div className="my-8">
              <div className="flex justify-center gap-4 flex-wrap">
                {activeVideos.map((video, index) => (
                  <iframe
                    key={index}
                    width="580"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-xl"
                  ></iframe>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessHistory;