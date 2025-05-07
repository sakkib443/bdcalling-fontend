import React from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiClock,
  FiChevronRight,
  FiYoutube,
} from "react-icons/fi";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import bgImage2 from "../../assets/img/bg1.png";
import PopularCourse from "../Home/HomeComponents/PopularCourse";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased">
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60 z-10"></div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Corporate office"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="container mx-auto px-6 pt-16 pb-32 relative z-20">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Connect With Our Executive Team
            </h1>
            <div className="flex items-center justify-center space-x-2 text-lg md:text-xl">
              <Link
                to="/"
                className="text-[#41bfb8] hover:text-white transition-colors"
              >
                Home
              </Link>
              <FiChevronRight className="text-blue-300" />
              <span className="text-white">Corporate Contact</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 -mt-20 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
            <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <FiMail className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
              Executive Communications
            </h3>
            <p className="text-gray-500 text-center mb-3">
              For strategic inquiries and C-level contacts
            </p>
            <div className="space-y-2 text-center">
              <Link
                to="mailto:info@bdcallingacademy.com"
                className="block text-blue-600 hover:text-blue-800 transition-colors font-medium text-lg"
              >
                info@bdcallingacademy.com
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
            <div className="bg-green-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <FiPhone className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
              Corporate Office
            </h3>
            <p className="text-gray-500 text-center mb-3">
              24/7 executive support line
            </p>
            <div className="space-y-2 text-center">
              <Link
                to="tel:+88 01321231802"
                className="block text-green-600 hover:text-[#41bfb8] transition-colors font-medium text-lg"
              >
                +88 01321231802
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
            <div className="bg-purple-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <FiMapPin className="text-purple-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
              Global Headquarters
            </h3>
            <p className="text-gray-500 text-center mb-3">
              By appointment only
            </p>
            <address className="not-italic text-gray-700 text-center space-y-1">
              <p className="font-medium text-lg">
                Daisy Garden, House 14, Block A, Banasree, main road, Dhaka-1219
              </p>
            </address>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 transition-transform hover:shadow-xl duration-300 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
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

          <div className="flex flex-col gap-8 h-full">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 transition-transform hover:shadow-xl duration-300 h-full flex flex-col justify-between">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-5">
                  <FiMapPin className="text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      Our Address
                    </h3>
                    <p className="text-gray-600">
                      Daisy Garden, House 14, Block A
                    </p>
                    <p className="text-gray-600">
                      Banasree, Main Road, Dhaka-1219
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <FiMail className="text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      Email Us
                    </h3>
                    <p className="text-gray-600">info@bdcallingacademy.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <FiPhone className="text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      Call Us
                    </h3>
                    <p className="text-gray-600">+88 01321231802</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <FiClock className="text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      Working Hours
                    </h3>
                    <p className="text-gray-600">
                      Saturday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 transition-transform hover:shadow-xl duration-300 h-full">
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

      <div
        className="bg-cover rounded-2xl mb-20"
        style={{ backgroundImage: `url(${bgImage2})` }}
      >
        <PopularCourse />
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8662.770468055722!2d90.41722969357912!3d23.765697600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c754583dd209%3A0xdd0c5fcc7d2d3836!2sbdCalling%20IT%20Ltd.%20-%20Corporate%20Office!5e1!3m2!1sen!2sbd!4v1744982086149!5m2!1sen!2sbd"
        width="100%"
        height="500"
        className="border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Global Headquarters Location"
      />
    </div>
  );
};

export default Contact;
