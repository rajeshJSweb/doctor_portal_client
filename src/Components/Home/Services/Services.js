import React from 'react';
import fluoride from './../../../../src/assets/images/fluoride.png';
import cavity from './../../../../src/assets/images/cavity.png';
import whitening from './../../../../src/assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id:1,
            name:"Fluoride Treatment",
            desc:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img:fluoride
        },
        {
            _id:1,
            name:"Cavity Filling",
            desc:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img:cavity
        },
        {
            _id:1,
            name:"Teeth Whitening",
            desc:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img:whitening
        }
    ]
    return (
        <div className='mx-5'>
            <div className='my-10'>
                <h3 className='text-xl text-primary font-bold'>Our Services</h3>
                <h1 className='text-3xl font-bold'>Services We Provide</h1>
            </div>
            <div className='grid lg:grid-cols-3 gap-4 justify-items-center'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;