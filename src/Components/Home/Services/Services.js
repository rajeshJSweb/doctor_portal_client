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
        <div>
            <div className='mt-14'>
                <h3 className='text-xl text-primary'>Our Services</h3>
                <h1 className='text-3xl font-bold'>Services We Provide</h1>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center mt-16'>
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