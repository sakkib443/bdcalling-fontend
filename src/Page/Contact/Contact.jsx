import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiClock,
  FiYoutube,
} from "react-icons/fi";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import SectionHeading from "../../Components/Shared/SectionHeading";

const Contact = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // top-left corner
  }, [pathname]);
  return (
    <div className=" bg-[#ECFCFB] font-sans text-gray-800">


      <div className="container mx-auto pt-12  relative z-20 mb-12">
        <SectionHeading title={"Connect With Our Team"} description={"Unlock a wide range of practical, in-demand courses designed to match your career goals. Whether you're taking your first step into tech or advancing your skills, our learning paths are crafted by industry experts to ensure you gain real-world knowledge that truly matters."}></SectionHeading>
      </div>


      <section className="container mx-auto px-6  relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="bg-[#E1FCF9] rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200">
            <div className=" w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <FiMail className="crd text-7xl" />
            </div>
            <h3 className="work font-semibold text-center text-gray-500 mb-1">
              Contact With Gamail
            </h3>


            <p className="text-gray-500 text-center mb-3 outfit-semibold text-xl">
              info@bdcallingacademy.com
            </p>
          </div>

          <div className="bg-[#E1FCF9] rounded-xl  p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200">
            <div className=" w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <FiPhone className="crd  text-5xl" />
            </div>
            <h3 className="work font-semibold text-center text-gray-500 mb-1">
              ontact With Phone
            </h3>
            <p className="text-gray-500 text-center mb-3 outfit-semibold text-xl">
              +88 01321231802
            </p>

          </div>

          <div className="bg-[#E1FCF9] rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <FiMapPin className="crd text-6xl" />
            </div>
            <h3 className="work font-semibold text-center text-gray-500 mb-1">
              Location
            </h3>
            <address className="text-gray-500 text-center mb-3 outfit-semibold text-xl">
              <p className="">
                Daisy Garden, House 14 (Level-5), Block A, Main Road, Banasree, Dhaka
              </p>
            </address>
          </div>
        </div>
      </section>







      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[#E1FCF9] p-8 rounded-xl shadow-lg border work border-gray-200 transition-transform hover:shadow-xl duration-300 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-4xl outfit font-bold mb-8">Send Us a Message</h2>
              <form className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-base font-medium text-gray-700 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none focus:border-teal-400 text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none focus:border-teal-400 text-base"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none focus:border-teal-400 text-base"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none focus:border-teal-400 text-base"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
              </form>
            </div>

            <button
              type="submit"
              className="mt-6 w-full cursor-pointer py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2 text-lg"
            >
              <FiSend />
              <span>Send Message</span>
            </button>
          </div>

          <div>
            <iframe

              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8662.770468055722!2d90.41722969357912!3d23.765697600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c754583dd209%3A0xdd0c5fcc7d2d3836!2sbdCalling%20IT%20Ltd.%20-%20Corporate%20Office!5e1!3m2!1sen!2sbd!4v1744982086149!5m2!1sen!2sbd"
              width="100%"
              height="500"
              className="border-0 rounded-xl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Global Headquarters Location"
            />
            <div className="bg-[#E1FCF9] p-8 rounded-xl  border border-gray-200 transition-transform hover:shadow-xl duration-300 mt-4">
              <h2 className="text-3xl font-bold mb-6">Follow Us</h2>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="https://www.facebook.com/bdcallingacademy"
                  target="_blank"
                  className="bg-gray-100 hover:bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center transition-colors text-gray-700 hover:text-blue-600"
                  aria-label="Facebook"
                >
                  <FiFacebook size={20} />
                </Link>

                <Link
                  to="https://www.youtube.com/@bdCalling"
                  target="_blank"
                  className="bg-gray-100 hover:bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center transition-colors text-gray-700 hover:text-sky-500"
                  aria-label="Youtube"
                >
                  <FiYoutube size={20} />
                </Link>

                <Link
                  to="https://www.linkedin.com/company/bdcallingitltd"
                  target="_blank"
                  className="bg-gray-100 hover:bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center transition-colors text-gray-700 hover:text-blue-700"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </Link>

                <Link
                  to="mailto:info@bdcallingacademy.com"
                  className="bg-gray-100 hover:bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center transition-colors text-gray-700 hover:text-blue-700"
                  aria-label="LinkedIn"
                >
                  <FiMail size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>




    </div>
  );
};

export default Contact;
