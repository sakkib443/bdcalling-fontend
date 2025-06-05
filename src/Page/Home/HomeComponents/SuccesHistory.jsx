import React, { useState } from "react";
import SectionHeading from "../../../Components/Shared/SectionHeading";
import { Link } from "react-router-dom";

const videoData = [
  { id: "_6cBwuHNKgI", title: "Career Transformation - John's Success Story" },
  { id: "iqiNOsO7Yp8", title: "From Student to Professional - Sarah's Journey" },
  { id: "2GqZBsRqaf0", title: "From Student to Professional - Sarah's Journey" },
  { id: "VMWO2n9dpEY", title: "Student Feedback - Course Experience" },
];

const SuccesHistory = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <div className="lg:bg-white bg-[#ecfcfb] md:py-12">
        <div className="bg-[#ecfcfb] py-8 md:pt-12 w-11/12 md:w-10/12 mx-auto rounded-2xl">
          <div className="lg:px-12">
            <SectionHeading
              title={"Success Stories"}
              description={
                "At Bdcalling Academy, our students gain more than just skills—they gain opportunities. With real client project-based training, they graduate with the skills for real-world challenges. Many go on to secure roles within our company, supported by hands-on learning that sets them apart. Every success story starts with a single step, and we’re here to guide you all the way."
              }
            />

            <div className="my-12">
              <div className="flex justify-center gap-4 flex-wrap">
                {videoData.map((video, index) => (
                  <div
                    key={index}
                    className="cursor-pointer w-full sm:w-[480px] md:w-[560px] lg:w-[580px]"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full pointer-events-none"
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/success-story">
                <div className="text-center mt-10">
                  <button className="bg-[#0a98a0] hover:bg-[#088187] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform shadow-lg hover:shadow-xl cursor-pointer">
                    View More
                  </button>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 px-4 transition-opacity duration-300 ease-in-out">
          <div className="relative w-full max-w-4xl transform fade-zoom-in">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute cursor-pointer -top-4 -right-4 bg-white rounded-full px-4 py-[10px] shadow hover:bg-red-500 hover:text-white transition"
            >
              ✕
            </button>
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="rounded-xl w-full"
            ></iframe>
          </div>
        </div>
      )}

      {/* Animation Style */}
      <style>{`
        @keyframes fadeZoomIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .fade-zoom-in {
          animation: fadeZoomIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default SuccesHistory;
