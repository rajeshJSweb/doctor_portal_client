import React from 'react';
import avatar1 from './../../../../src/assets/images/people1.png'
import avatar2 from './../../../../src/assets/images/people2.png'
import avatar3 from './../../../../src/assets/images/people3.png'
import Testimonial from './Testimonial';

const Testimonials = () => {
    const users=[
        {
            _id:1,
            name:'Wilson Sangma',
            address:'Dhaka,Bangladesh',
            img: avatar1,
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id:2,
            name:'Cathy M Marak',
            address:'Dhaka,Bangladesh',
            img:avatar2,
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id:3,
            name:'Kettrin B Balsrang',
            address:'Dhaka,Bangladesh',
            img:avatar3,
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        }
    ]
    return (
        <div className='mt-20 px-10'>
            <div className='lg:text-left ml-10'>
                <h1 className='font-bold text-secondary'>Testimonial</h1>
                <h3 className='text-2xl'>What Our Patients Says</h3>
            </div>
            <div className='grid lg:grid-cols-3 gap-4 mt-16'>
                {
                    users.map(user => <Testimonial
                    key={user._id}
                    user={user}
                    ></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;