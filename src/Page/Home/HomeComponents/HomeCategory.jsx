import React from 'react';


import img1 from '../../../assets/img/gdIcon.png';
import img2 from '../../../assets/img/webicon.png';
import img3 from '../../../assets/img/icon5.png';
import img4 from '../../../assets/img/icon6.png';
import img5 from '../../../assets/img/icon3.png';
import img6 from '../../../assets/img/icon4.png';
import img7 from '../../../assets/img/icon3.png';
import img8 from '../../../assets/img/gdIcon.png';
const HomeCategory = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-4 w-9/12  mx-auto justify-center items-center gap-x-5 gap-y-3  my-4 '>
                <div>
                    <div className='border border-gray-200 pl-6  pr-16 py-4 rounded-md flex  justify-center items-end gap-2'>
                        <div>
                            <img className='w-14 transform ' src={img1} alt="" />
                        </div>
                        <div className=''>
                            <h3 className='font-semibold crd outfit-semibold '> Art & Design</h3>
                            <p className='work '>Fun with Challeng</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border border-gray-200 pl-6  pr-16 py-4 rounded-md flex  justify-center items-end gap-2'>
                        <div>
                            <img className='w-14 transform ' src={img2} alt="" />
                        </div>
                        <div className=''>
                            <h3 className='font-semibold crd outfit-semibold '> Programming</h3>
                            <p className='work '>Code & Confident</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border border-gray-200 pl-6  pr-16 py-4 rounded-md flex  justify-center items-end gap-2'>
                        <div>
                            <img className='w-14 transform ' src={img3} alt="" />
                        </div>
                        <div className=''>
                            <h3 className='font-semibold crd outfit-semibold '> Marketing</h3>
                            <p className='work '>Fun with Challeng</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border border-gray-200 pl-6  pr-16 py-4 rounded-md flex  justify-center items-end gap-2'>
                        <div>
                            <img className='w-14 transform ' src={img4} alt="" />
                        </div>
                        <div className=''>
                            <h3 className='font-semibold crd outfit-semibold '> Media & Flim</h3>
                            <p className='work '>Fun with Challeng</p>
                        </div>
                    </div>
                </div>





                <div>
                    <div className='border border-gray-200 pl-6  pr-16 py-4 rounded-md flex  justify-center items-end gap-2'>
                        <div>
                            <img className='w-14 transform ' src={img5} alt="" />
                        </div>
                        <div className=''>
                            <h3 className='font-semibold crd outfit-semibold '> Networking & Server</h3>
                            <p className='work '>Fun with Challeng</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border border-gray-200 pl-6  pr-16 py-4 rounded-md flex  justify-center items-end gap-2'>
                        <div>
                            <img className='w-14 transform ' src={img6} alt="" />
                        </div>
                        <div className=''>
                            <h3 className='font-semibold crd outfit-semibold '>Management</h3>
                            <p className='work '>Code & Confident</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border border-gray-200 pl-6  pr-16 py-4 rounded-md flex  justify-center items-end gap-2'>
                        <div>
                            <img className='w-14 transform ' src={img7} alt="" />
                        </div>
                        <div className=''>
                            <h3 className='font-semibold crd outfit-semibold '> Marketing</h3>
                            <p className='work '>Fun with Challeng</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border border-gray-200 pl-6  pr-16 py-4 rounded-md flex  justify-center items-end gap-2'>
                        <div>
                            <img className='w-14 transform ' src={img8} alt="" />
                        </div>
                        <div className=''>
                            <h3 className='font-semibold crd outfit-semibold '> Media & Flim</h3>
                            <p className='work '>Fun with Challeng</p>
                        </div>
                    </div>
                </div>
               
            </div>
           
        </div>
    );
};

export default HomeCategory;