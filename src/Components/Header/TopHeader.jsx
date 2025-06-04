import React from "react";
import { IoMdCall } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router-dom";
import { FiYoutube } from "react-icons/fi";

const TopHeader = () => {
  return (
    <div className=" bg-[#77dbd6] work hidden lg:block ">
      <div className="w-full container mx-auto">
        <div className=" flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-5 py-2">
            {/* Phone */}
            <a href="tel:01321231802" className="flex gap-1 items-center pr-4">
              <IoMdCall className="text-[20px] text-[#F79952]" />
              <p className="text-[15px] dark:text-black/70">01321231802</p>
            </a>

            {/* Email */}
            <a href="mailto:info@bdcallingacademy.com" className="flex gap-2 text-[20px] items-center">
              <IoMailOutline className="text-xl text-[#F79952]" />
              <p className="text-[15px] dark:text-black/70">info@bdcallingacademy.com</p>
            </a>
          </div>
          <div>
            <div className="flex gap-12 items-center">
              <div className="flex gap-6 text-[20px] text-gray-700 items-start">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/bdcallingacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SlSocialFacebook />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@bdcallingacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiYoutube className="transform translate-y-[2px]" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/bdcalling-academy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SlSocialLinkedin />
                </a>
              </div>

              <div className="flex gap-4 text-[15px]">
                <Link to="/login">
                  {" "}
                  <p className="border-r border-gray-400 pr-3 dark:text-black/70">
                    Login
                  </p>
                </Link>
                <Link to="/signup">
                  {" "}
                  <p className="dark:text-black/70">Register</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
