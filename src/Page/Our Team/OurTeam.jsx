import React from 'react';
import Overview from './Our Team Component/Overview';
import { useState } from 'react';
import OurManagement from './Our Team Component/OurManagement/OurManagement';
import SectionHeading from '../../Components/Shared/SectionHeading';
import Mentor from './Our Team Component/Mentors/Mentor';
import MarketingAndOperation from './Our Team Component/Marketing and Operation/MarketingAndOperation';
import CommunicationAndSale from './Our Team Component/Communication and Sales/CommunicationAndSale';

const OurTeam = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div>
            <div className="">
                <div className="">
                    {/* <div className="mt-10">
                        <h1 className='csd outfit-semibold text-5xl mb-3'>Our Team</h1>
                        <p className='crd work'>Our expert mentors have been contributing to making IT experts for the past 16 years. With their utmost dedication, we have been able to train more than 90,000 people who are currently working in several job sectors. All the mentors have the academic skills and job experience in the marketplace. They will be your guide in your journey to achieve a bright career.</p>
                    </div> */}
                    <div className="lg:w-9/12 w-full mx-auto mt-10">
                        <SectionHeading title={"Our Team"} discription={"Our expert mentors have been contributing to making IT experts for the past 16 years. With their utmost dedication, we have been able to train more than 90,000 people who are currently working in several job sectors. All the mentors have the academic skills and job experience in the marketplace. They will be your guide in your journey to achieve a bright career."}></SectionHeading>

                    </div>
                    <div className="w-9/12 mx-auto">
                        <Overview></Overview>
                    </div>
                    <div className="mt-8">
                        {/* Tab Headers */}
                        <div role="tablist" className="tabs flex justify-center gap-5">
                            <button
                                role="tab"
                                className={`tab ${activeTab === 'tab1' ? 'tab-active bg-[#41bfb8] text-white text-lg rounded-full shadow-2xl shadow-black hover:text-white' : 'text-[#414042]'}`}
                                onClick={() => setActiveTab('tab1')}
                            >
                                Our Management
                            </button>
                            <button
                                role="tab"
                                className={`tab ${activeTab === 'tab2' ? 'tab-active bg-[#41bfb8] text-white text-lg rounded-full shadow-2xl shadow-black hover:text-white' : 'text-[#414042]'}`}
                                onClick={() => setActiveTab('tab2')}
                            >
                                Mentors
                            </button>
                            <button
                                role="tab"
                                className={`tab ${activeTab === 'tab3' ? 'tab-active bg-[#41bfb8] text-white text-lg rounded-full shadow-2xl shadow-black hover:text-white' : 'text-[#414042]'}`}
                                onClick={() => setActiveTab('tab3')}
                            >
                                Marketing and Operation
                            </button>
                            <button
                                role="tab"
                                className={`tab ${activeTab === 'tab4' ? 'tab-active bg-[#41bfb8] text-white text-lg rounded-full shadow-2xl shadow-black hover:text-white' : 'text-[#414042]'}`}
                                onClick={() => setActiveTab('tab4')}
                            >
                                Communication and Sales
                            </button>
                        </div>

                        {/* Tab Content - Now properly connected */}
                        <div className="lg:w-9/12 w-11/12 mx-auto mt-6 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                            {activeTab === 'tab1' && (
                                <div className="fade-in">
                                    <OurManagement></OurManagement>
                                </div>
                            )}

                            {activeTab === 'tab2' && (
                                <div className="fade-in">
                                    <Mentor></Mentor>
                                </div>
                            )}

                            {activeTab === 'tab3' && (
                                <div className="fade-in">
                                    <MarketingAndOperation></MarketingAndOperation>
                                </div>
                            )}

                            {activeTab === 'tab4' && (
                                <div className="fade-in">
                                    <CommunicationAndSale></CommunicationAndSale>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;