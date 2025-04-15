import React from 'react';

import PopularCourseCard from './PopularCourseCard';


const PopularCourse = () => {
    return (
        <div className='mb-24  '>
            <div className=' py-16 w-11/12 mx-auto rounded-2xl'>
                <div>
                    <h1 className='text-center csd text-6xl font-semibold outfit-semibold work '>Popular Courses</h1>
                    <p className='text-center crd work  mt-4 '>Bdcalling Academy offers a variety of courses, and upon successful completion, we provide job
                        opportunities within our company.  Additionally, <br /> we offer scholarships  in different categories   to support aspiring individuals. Our training programs include hands-on experience with
                        real client projects, <br /> ensuring a comprehensive and practical learning experience.</p>
                </div>

                <PopularCourseCard></PopularCourseCard>


            </div>
        </div>
    );
};

export default PopularCourse;