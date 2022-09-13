import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from './../../assets/images/chair.png'

const ApointmentBanner = ({date, setDate}) => {
    return (
        <div class="hero min-h-screen bg-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse gap-20">
            <div>
                <img src={chair} class="max-w-full lg:max-w-2xl rounded-lg shadow-2xl" />
            </div>
            <div className='w-5/12 flex justify-center'>
                <DayPicker
                mode='single'
                selected={date}
                onSelect={setDate}
                ></DayPicker>
            </div>
        </div>
        </div>
    );
};

export default ApointmentBanner;