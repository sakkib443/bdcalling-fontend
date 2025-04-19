import React from 'react';

import img1 from '../../../assets/img/gdIcon.png';
import img2 from '../../../assets/img/webicon.png';
import img3 from '../../../assets/img/icon5.png';
import img4 from '../../../assets/img/icon6 (2).png';
import img5 from '../../../assets/img/icon3.png';
import img6 from '../../../assets/img/icon4.png';
import img7 from '../../../assets/img/icon3.png';
import img8 from '../../../assets/img/gdIcon.png';

const categories = [
    { img: img1, title: 'Art & Design', subtitle: 'Fun with Challeng' },
    { img: img2, title: 'Programming', subtitle: 'Code & Confident' },
    { img: img3, title: 'Marketing', subtitle: 'Fun with Challeng' },
    { img: img4, title: 'Media & Flim', subtitle: 'Fun with Challeng' },
    { img: img5, title: 'Networking & Server', subtitle: 'Fun with Challeng' },
    { img: img6, title: 'Management', subtitle: 'Code & Confident' },
    { img: img7, title: 'Marketing', subtitle: 'Fun with Challeng' },
    { img: img8, title: 'Media & Flim', subtitle: 'Fun with Challeng' }
];

const HomeCategory = () => {
    return (
        <div className='bg-white'>
            <div className='grid cursor-pointer md:grid-cols-2 lg:grid-cols-4 w-9/12 mx-auto justify-center items-center gap-x-5 gap-y-3 py-6 md:py-10'>
                {
                    categories.map((cat, index) => (
                        <div key={index}>
                            <div className='border border-gray-200 pl-6 pr-16 py-4 rounded-md flex justify-center items-end gap-2 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03]'>
                                <div>
                                    <img className='w-14 transform' src={cat.img} alt={cat.title} />
                                </div>
                                <div>
                                    <h3 className='font-semibold crd outfit-semibold'>{cat.title}</h3>
                                    <p className='work dark:text-black text-nowrap'>{cat.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HomeCategory;
