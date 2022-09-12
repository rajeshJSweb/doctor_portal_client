import React from 'react';
import apointment from './../../../../src/assets/images/appointment.png'

const HomeContact = () => {
    return (
        <section style={{
            background: `url(${apointment})`
        }} className='pb-10'>
            <div className='py-6'>
                <h1 className='text-secondary text-xl font-bold'>Contact Us</h1>
                <h4 className='font-bold text-2xl text-white'>Stay Connected With Us</h4>
            </div>
            <div className='grid grid-flow-row justify-center gap-3'>
            <input type="text" placeholder="Full Name" class="input input-bordered input-md w-96" />
            <input type="text" placeholder="Email" class="input input-bordered input-md w-96" />
            <input type="text" placeholder="Type Your Massege" class="input input-bordered input-lg max-w-screen-sm h-52" />
            <button className='btn btn-secondary text-white font-bold'>Submit</button>
            </div>
        </section>
    );
};

export default HomeContact;