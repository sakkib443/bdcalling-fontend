import React, { useEffect, useState } from "react";
import Overview from "./Our Team Component/Overview";
import OurManagement from "./Our Team Component/OurManagement/OurManagement";
import SectionHeading from "../../Components/Shared/SectionHeading";
import Mentor from "./Our Team Component/Mentors/Mentor";
import MarketingAndOperation from "./Our Team Component/Marketing and Operation/MarketingAndOperation";
import CommunicationAndSale from "./Our Team Component/Communication and Sales/CommunicationAndSale";
import { useLocation } from "react-router-dom";

const tabsData = [
  {
    key: "tab1",
    label: "Our Management",
    component: <OurManagement />,
  },
  {
    key: "tab2",
    label: "Mentors",
    component: <Mentor />,
  },
  {
    key: "tab3",
    label: "Marketing and Operation",
    component: <MarketingAndOperation />,
  },
  {
    key: "tab4",
    label: "Communication and Sales",
    component: <CommunicationAndSale />,
  },
];

const OurTeam = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // top-left corner
  }, [pathname]);


  return (
    <div className="bg-[#ecfcfb]">
      <div className="lg:w-10/12 w-full mx-auto pt-10">
        <SectionHeading
          title={"Our Team"}
          description={
            "Behind the leading IT skill development platform, masterminds of industry leaders are working. From the management to the expert mentors, highly skilled people are dedicated to your skill advancement."
          }
        />
      </div>

      <div className="w-9/12 mx-auto">
        <Overview />
      </div>

      <div className="mt-8">
        {/* Tab Headers */}
        <div role="tablist" className="tabs flex justify-center gap-5 flex-wrap work">
  {tabsData.map((tab) => (
    <button
      key={tab.key}
      role="tab"
      className={`tab px-4 py-2 fieldset-label outfit-semibold rounded-md  dark:border-gray-400 dark:shadow-none  ${
        activeTab === tab.key
          ? "bg-[#41bfb8] tw" // ✅ Active tab: bg color + white text
          : "bg-[#ecfcfb] border border-gray-300 text-gray-800" // Inactive: normal text
      }`}
      onClick={() => setActiveTab(tab.key)}
    >
      {tab.label}
    </button>
  ))}
</div>


        {/* Tab Content */}
        <div className="container mx-auto mt-6 p-6  rounded-lg  border border-gray-200">
          <div className="fade-in">
            {tabsData.find((tab) => tab.key === activeTab)?.component}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
