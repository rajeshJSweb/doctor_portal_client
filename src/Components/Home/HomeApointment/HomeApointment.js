import React from 'react';
import doctor from './../../../../src/assets/images/doctor.png'
import apointment from './../../../assets/images/appointment.png'

const HomeApointment = () => {
    return (
        <section style={{
            background: `url(${apointment})`
        }} 
        className='flex justify-center items-center mt-14'>
            <div className='w-4/12 hidden lg:block'>
                <img className='-mt-32 ...' src={doctor} alt="" />
            </div>
            <div className='w-8/12 py-12'>
                <h1 className='text-secondary text-xl lg:text-left font-bold'>Apointment</h1>
                <h1 className='text-white text-2xl font-bold lg:text-5xl lg:text-left'>Make an Apointment Today</h1>
                <p className='text-white lg:text-left mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias delectus quos laudantium possimus nulla officia at culpa incidunt ad eum! Lorem ipsum dolor sit, lore20
                 amet consectetur adipisicing elit. Animi, aperiam! Quos pariatur voluptates officia sapiente!</p>
                <button className='btn text-white mt-5 bg-gradient-to-r from-secondary to-primary ...'>Get Started</button>
            </div>
        </section>
    );
};

export default HomeApointment;