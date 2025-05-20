import React, { useEffect, useState } from 'react';
import OurManagementCard from './OurManagementCard';
import bgImage from "../../../../assets/img/bg.png"
const OurManagement = () => {
    const [managements, setManagement] = useState([])
    useEffect(() => {
        fetch('ManagementTeam.json')
            .then(res => res.json())
            .then(data => setManagement(data))
    }, [])
    return (
        <div className="lg:p-4 lg:w-11/12 w-/12 mx-auto work "  >
            <div className=" rounded-lg  p-6 border border-gray-300 bg-center bg-cover bg-[#E1FCF9]" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="flex justify-center gap-6">
                    <div className='text-right flex flex-col lg:h-72  items-end justify-end'>
                        <div>
                            <h1 className='outfit text-3xl'>Sabina Akter
                            </h1>
                            <h3 className='outfit text-gray-500'>
                                Chairman, Betopia Group
                            </h3>
                            <p className='work'> “With the right skills, uncertainty becomes the path to certain success.”</p>
                        </div>
                        
                    </div>
                    <div className="flex justify-center">
                        <img
                            className="w-65 h-80 object-cover rounded-lg"
                            src="https://scontent.fdac177-1.fna.fbcdn.net/v/t39.30808-6/493230191_10237420209108362_3271647366651201959_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nA8SKzzKcGYQ7kNvwHG5D8v&_nc_oc=AdmxvsJvbFYPHYPy9eWC888RkIglr7-XiD-xauvYFOPt6Ee0OliLEAxh5GxuY2XIrCU&_nc_zt=23&_nc_ht=scontent.fdac177-1.fna&_nc_gid=bdJdlEAlIQi41L-5DrUOAg&oh=00_AfKFY7_GFMOM_65ybhd_kYEmYqtyqou5SHuvaNhytTQGuQ&oe=68322AF3"
                            alt="Muhammad Monir Hossain"
                        />
                        <img src="" alt="" />
                    </div>

                    <div className='lg:mt-4'>
                        <div>
                            <h1 className='outfit text-3xl'>Md Monir Hossain
                            </h1>
                            <h3 className='outfit text-gray-500'>
                                CEO, Betopia Group
                            </h3>
                            <p className='work'> “We will be empowered when people around us are empowered.”</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10">
                {
                    managements.map(management => (<OurManagementCard management={management}></OurManagementCard>))
                }
            </div>
        </div>
    );
};

export default OurManagement;
