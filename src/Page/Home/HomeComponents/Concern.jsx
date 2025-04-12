import React from 'react';




const Concern = () => {

    return (
        <div className='mx-auto flex flex-col md:flex-row justify-center gap-12 mt-12'>
            <div className=' rounded-md'>
                <p className='border-b pl-6 py-3 mb-3 outfit-semibold border-[#d1eae8] text-2xl'>We Are Working With</p>
                <p></p>
                <div className='flex flex-col gap-3 work pl-6 pb-8 pr-6'>
                    {['Our Concern', 'Colaboration With', 'Member Of'].map((cat, idx) => (
                        <label key={idx} className="fieldset-label">
                            <input type="checkbox" className="checkbox w-5 h-5 rounded-sm" />
                            {cat}
                        </label>
                    ))}
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 flex-wrap '>
              
            </div>
        </div>
    );
};

export default Concern;