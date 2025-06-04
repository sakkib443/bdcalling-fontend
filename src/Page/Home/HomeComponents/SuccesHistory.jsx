
import SectionHeading from "../../../Components/Shared/SectionHeading";
import { Link } from "react-router-dom";

const SuccesHistory = () => {
  return (
    <>
      <div className="lg:bg-white bg-[#ecfcfb] md:py-12">
        <div className="bg-[#ecfcfb] py-8 md:pt-12 w-11/12 md:w-10/12 mx-auto rounded-2xl">
          <div className="lg:px-12">
            <SectionHeading
              title={"Success Stories"}
              description={
                "Bdcalling Academy offers a variety of courses, and upon successful completion, we provide job opportunities within our company. Additionally, we offer scholarships in different categories to support aspiring individuals. Our training programs include hands-on experience with real client projects, ensuring a comprehensive and practical learning experience."
              }
            ></SectionHeading>

            <div className="my-12">
              <div>
                <div className="flex justify-center gap-4 flex-wrap">
                          <iframe
                    width="580"
                    height="315"
                    src="https://www.youtube.com/embed/_6cBwuHNKgI?si=9DRNn9tpulo_8oTa"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    className="rounded-xl"
                  ></iframe>
                  {/* Existing iframes */}
                  
                  <iframe
                    width="580"
                    height="315"
                    src="https://www.youtube.com/embed/iqiNOsO7Yp8?si=Cu7IJVhb4SXGvCZr"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    className="rounded-xl"
                  ></iframe>

                  <iframe
                    width="580"
                    height="315"
                    src="https://www.youtube.com/embed/2GqZBsRqaf0?si=76n2vMFel2HI7qdS"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    className="rounded-xl"
                  ></iframe>
                  <iframe
                    width="580"
                    height="315"
                    src="https://www.youtube.com/embed/VMWO2n9dpEY?si=Kse19yGSvTSL_ksm"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    className="rounded-xl"
                  ></iframe>
          
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
      </div>
    </>
  );
};

export default SuccesHistory;