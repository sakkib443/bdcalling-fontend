import React from "react";
import SectionHeading from "../../../Components/Shared/SectionHeading";

const SuccesHistory = () => {
  return (
    <>
      <div className="lg:bg-white bg-[#ecfcfb] md:py-12">
        <div className="bg-[#ecfcfb] py-8 md:pt-12  w-11/12 md:w-10/12 mx-auto rounded-2xl">
          <div className="lg:px-12">
            <SectionHeading
              title={"Success Story"}
              description={
                "Bdcalling Academy offers a variety of courses, and upon successful completion, we provide job opportunities within our company. Additionally, we offer scholarships in different categories to support aspiring individuals. Our training programs include hands-on experience with real client projects,ensuring a comprehensive and practical learning experience."
              }
            ></SectionHeading>

            <div className="my-12">
              <div>
                <div className="flex justify-center gap-4 flex-wrap ">
                  <iframe
                    width="580"
                    height="315"
                    src="https://www.youtube.com/embed/2GqZBsRqaf0?si=76n2vMFel2HI7qdS"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                 picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    className="rounded-xl"
                  ></iframe>
                  <iframe
                    width="580"
                    height="315"
                    src="https://www.youtube.com/embed/Gaeaaj4TsVQ?si=PF9MBNZNEOW0W4BF"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                 picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    className="rounded-xl"
                  ></iframe>
                  <iframe
                    width="580"
                    height="315"
                    src="https://www.youtube.com/embed/5RrnH4paPSg?si=xK3NObGaXHy-VLz2"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                 picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    className="rounded-xl"
                  ></iframe>
                  <iframe
                    width="580"
                    height="315"
                    src="https://www.youtube.com/embed/0_FsHO7u5Pc?si=mgTrBs4Ictjh72ZY"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                 picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccesHistory;
